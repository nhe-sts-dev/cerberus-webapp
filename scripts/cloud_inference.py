import os
import sys
import uuid
import json
import requests
import psycopg2
import numpy as np
import tensorflow as tf
import easyocr
import re
from PIL import Image
from io import BytesIO
import cv2  # Ensure this is imported at the top of your file

# --- CONFIGURATION ---
DATABASE_URL = os.environ.get("DATABASE_URL")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")

payload = json.loads(os.environ.get("CLIENT_PAYLOAD", "{}"))
IMAGE_ID = payload.get("imageId")
IMAGE_URL = payload.get("imageUrl")
MODEL_ID = payload.get("modelId")
MODEL_NAME = payload.get("modelName")
MODEL_VERSION = payload.get("modelVersion")
WEIGHTS_URL = payload.get("weightsUrl")


def main():
    print(
        f"Starting Cloud Inference for Image: {IMAGE_ID} using Model: {MODEL_NAME} (v{MODEL_VERSION})"
    )

    print("Downloading weights and image...")
    model_path = "temp_model.tflite"
    with open(model_path, "wb") as f:
        f.write(requests.get(WEIGHTS_URL).content)

    img_response = requests.get(IMAGE_URL)
    raw_img = Image.open(BytesIO(img_response.content)).convert("RGB")
    raw_img_array = np.array(raw_img)

    # # --- EASYOCR PIPELINE WITH ROI ZOOM ---
    # print("Running OCR to extract fleet number...")
    # reader = easyocr.Reader(["en"], gpu=False)

    # # 1. Focus on the Region of Interest (Driver Cab Area)
    # # The sticker consistently sits in the middle-to-lower vertical section and right-hand side.
    # # [ymin:ymax, xmin:xmax] as percentages:
    # width, height = raw_img.size
    # crop_box = (
    #     int(width * 0.40),  # Left (40% across)
    #     int(height * 0.35),  # Top (35% down)
    #     int(width * 0.95),  # Right (95% across)
    #     int(height * 0.85),  # Bottom (85% down)
    # )
    # cropped_cab = raw_img.crop(crop_box)
    # cropped_array = np.array(cropped_cab)

    # # 2. Run OCR on the cropped area with tuned detection thresholds
    # ocr_results = reader.readtext(
    #     cropped_array, paragraph=False, text_threshold=0.5, low_text=0.3
    # )

    # fleet_number = None
    # fleet_pattern = re.compile(r"(\d{4})")

    # print(f"--- Raw OCR Detections ({len(ocr_results)} found) ---")
    # for bbox, text, prob in ocr_results:
    #     clean_text = text.strip()
    #     print(f"Detected: '{clean_text}' | Confidence: {prob:.2f}")

    #     # Look for any 4-digit sequence
    #     match = fleet_pattern.search(clean_text)
    #     if match and not fleet_number:
    #         fleet_number = match.group(1)
    #         print(f"==> Matched Fleet Number: {fleet_number} (from '{clean_text}')")

    # if not fleet_number:
    #     print("⚠️ No 4-digit fleet number identified in this image.")
    # # -------------------------------------

    # --- OPENCV PREPROCESSING & EASYOCR ---
    print("\n==========================================")
    print(f"🔗 Evaluating Image URL: {IMAGE_URL}")
    print("==========================================\n")
    print("Preprocessing image for OCR...")
    raw_img_cv = np.array(raw_img)
    height, width, _ = raw_img_cv.shape

    # 1. Broad Crop (Targeting the right half, middle-bottom where the cab is)
    cab_crop = raw_img_cv[
        int(height * 0.3) : int(height * 0.95), int(width * 0.4) : int(width * 0.95)
    ]

    # 2. Upscale by 2.5x to enlarge text
    scaled_cab = cv2.resize(
        cab_crop, None, fx=2.5, fy=2.5, interpolation=cv2.INTER_CUBIC
    )

    # 3. Grayscale
    gray = cv2.cvtColor(scaled_cab, cv2.COLOR_RGB2GRAY)

    # 4. CLAHE Contrast Enhancement
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # 5. Denoise (Removes compression artifacts)
    denoised = cv2.fastNlMeansDenoising(enhanced, h=15)

    print("Running OCR on enhanced image...")
    reader = easyocr.Reader(["en"], gpu=False)

    # We pass the enhanced OpenCV image array directly to EasyOCR
    ocr_results = reader.readtext(denoised, paragraph=False, text_threshold=0.5)

    fleet_number = None
    fleet_pattern = re.compile(r"(\d{4})")

    print(f"--- Raw OCR Detections ({len(ocr_results)} found) ---")
    for bbox, text, prob in ocr_results:
        clean_text = text.strip()
        print(f"Detected: '{clean_text}' | Confidence: {prob:.2f}")

        match = fleet_pattern.search(clean_text)
        if match and not fleet_number:
            fleet_number = match.group(1)
            print(f"==> Matched Fleet Number: {fleet_number} (from '{clean_text}')")

    if not fleet_number:
        print("⚠️ No 4-digit fleet number identified in this image.")
    # --------------------------------------

    print("Loading model into memory...")
    interpreter = tf.lite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()

    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    expected_height = input_details[0]["shape"][1]
    expected_width = input_details[0]["shape"][2]

    print(
        f"Model expects dimensions {expected_width}x{expected_height}. Resizing image..."
    )
    img = raw_img.resize((expected_width, expected_height))
    img_array = np.array(img, dtype=np.float32) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    if input_details[0]["dtype"] == np.uint8:
        img_array = (img_array * 255).astype(np.uint8)

    print("Running inference...")
    interpreter.set_tensor(input_details[0]["index"], img_array)
    interpreter.invoke()

    prediction = interpreter.get_tensor(output_details[0]["index"])[0][0]

    if output_details[0]["dtype"] == np.uint8:
        dirty_confidence = int((prediction / 255.0) * 100)
    else:
        dirty_confidence = int(prediction * 100)

    clean_confidence = 100 - dirty_confidence
    predicted_label = "DIRTY" if dirty_confidence > 50 else "CLEAN"

    print(f"Result: {predicted_label} (Dirty Conf: {dirty_confidence}%)")

    print("Logging to Neon Database...")
    inf_id = f"inf_{uuid.uuid4().hex[:16]}"
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cursor = conn.cursor()

        # 1. Insert the Inference Log
        inference_query = """
            INSERT INTO "InferenceLog" (id, "predictedLabel", confidence, "imageId", "modelId", "createdAt")
            VALUES (%s, %s, %s, %s, %s, NOW())
        """
        cursor.execute(
            inference_query,
            (inf_id, predicted_label, dirty_confidence, IMAGE_ID, MODEL_ID),
        )

        # 2. Update the BusImage record with the discovered fleet number
        if fleet_number:
            update_query = """
                UPDATE "BusImage" 
                SET "fleetNumber" = %s 
                WHERE id = %s
            """
            cursor.execute(update_query, (fleet_number, IMAGE_ID))

        conn.commit()
    except Exception as e:
        print(f"DB Error: {e}")
    finally:
        if "conn" in locals():
            cursor.close()
            conn.close()


if __name__ == "__main__":
    main()


# import os
# import sys
# import uuid
# import json
# import requests
# import psycopg2
# import resend
# import numpy as np
# import tensorflow as tf
# from PIL import Image
# from io import BytesIO

# # --- CONFIGURATION ---
# DATABASE_URL = os.environ.get("DATABASE_URL")
# RESEND_API_KEY = os.environ.get("RESEND_API_KEY")

# payload = json.loads(os.environ.get("CLIENT_PAYLOAD", "{}"))
# IMAGE_ID = payload.get("imageId")
# IMAGE_URL = payload.get("imageUrl")
# MODEL_ID = payload.get("modelId")
# MODEL_NAME = payload.get("modelName")
# MODEL_VERSION = payload.get("modelVersion")
# WEIGHTS_URL = payload.get("weightsUrl")

# def main():
#     print(f"Starting Cloud Inference for Image: {IMAGE_ID} using Model: {MODEL_NAME} (v{MODEL_VERSION})")

#     # 1. Download Model and Image
#     print("Downloading weights and image...")
#     model_path = "temp_model.tflite"
#     with open(model_path, "wb") as f:
#         f.write(requests.get(WEIGHTS_URL).content)

#     img_response = requests.get(IMAGE_URL)
#     img = Image.open(BytesIO(img_response.content)).convert("RGB")

#     # 2. Load TFLite Model FIRST to get required dimensions
#     print("Loading model into memory...")
#     interpreter = tf.lite.Interpreter(model_path=model_path)
#     interpreter.allocate_tensors()

#     input_details = interpreter.get_input_details()
#     output_details = interpreter.get_output_details()

#     # Extract the expected height and width from the model's input tensor shape
#     # Shape is usually: [batch_size, height, width, channels] e.g., [1, 224, 224, 3]
#     expected_height = input_details[0]['shape'][1]
#     expected_width = input_details[0]['shape'][2]

#     # 3. Dynamically Preprocess Image
#     print(f"Model expects dimensions {expected_width}x{expected_height}. Resizing image...")
#     img = img.resize((expected_width, expected_height))
#     img_array = np.array(img, dtype=np.float32) / 255.0
#     img_array = np.expand_dims(img_array, axis=0) # Add batch dimension

#     # Check if model expects INT8 (quantized) or FLOAT32
#     if input_details[0]['dtype'] == np.uint8:
#         img_array = (img_array * 255).astype(np.uint8)

#     # 4. Run Inference
#     print("Running inference...")
#     interpreter.set_tensor(input_details[0]['index'], img_array)
#     interpreter.invoke()

#     prediction = interpreter.get_tensor(output_details[0]['index'])[0][0]

#     # Normalize prediction to a 1-100 confidence score
#     if output_details[0]['dtype'] == np.uint8:
#         dirty_confidence = int((prediction / 255.0) * 100)
#     else:
#         dirty_confidence = int(prediction * 100)

#     clean_confidence = 100 - dirty_confidence
#     predicted_label = "DIRTY" if dirty_confidence > 50 else "CLEAN"

#     print(f"Result: {predicted_label} (Dirty Conf: {dirty_confidence}%)")

#     # 5. Save to Neon Database
#     print("Logging to Neon...")
#     inf_id = f"inf_{uuid.uuid4().hex[:16]}"
#     try:
#         conn = psycopg2.connect(DATABASE_URL)
#         cursor = conn.cursor()
#         query = """
#             INSERT INTO "InferenceLog" (id, "predictedLabel", confidence, "imageId", "modelId", "createdAt")
#             VALUES (%s, %s, %s, %s, %s, NOW())
#         """
#         cursor.execute(query, (inf_id, predicted_label, dirty_confidence, IMAGE_ID, MODEL_ID))
#         conn.commit()
#     except Exception as e:
#         print(f"DB Error: {e}")
#     finally:
#         if 'conn' in locals():
#             cursor.close()
#             conn.close()

#     # # 6. Send Email via Resend
#     # print("Sending Email Alert...")
#     # resend.api_key = RESEND_API_KEY

#     # color = "#ef4444" if predicted_label == "DIRTY" else "#22c55e"

#     # html_content = f"""
#     # <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
#     #     <div style="background-color: {color}; padding: 20px; text-align: center; color: white;">
#     #         <h1 style="margin: 0;">Bus Classified as {predicted_label}</h1>
#     #     </div>
#     #     <div style="padding: 20px;">
#     #         <img src="{IMAGE_URL}" style="width: 100%; border-radius: 4px; margin-bottom: 20px;" alt="Bus Image" />
#     #         <p><strong>Confidence:</strong> {dirty_confidence}% Dirty</p>
#     #         <p><strong>Model Used:</strong> {MODEL_NAME} (v{MODEL_VERSION})</p>
#     #         <p><strong>Image ID:</strong> {IMAGE_ID}</p>
#     #         <a href="https://project-560xk.vercel.app/dashboard" style="display: inline-block; background: #1f2937; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View in Dashboard</a>
#     #     </div>
#     # </div>
#     # """

#     # resend.Emails.send({
#     #     "from": "cerberus@jludik.dev",
#     #     "to": ["jacques@ludik.dev"],
#     #     "subject": f"Alert: Bus classified as {predicted_label}",
#     #     "html": html_content
#     # })
#     # print("Process complete. Check your inbox!")

# if __name__ == "__main__":
#     main()
