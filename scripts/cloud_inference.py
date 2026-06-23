import os
import sys
import uuid
import json
import requests
import psycopg2
import resend
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO

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
    print(f"Starting Cloud Inference for Image: {IMAGE_ID} using Model: {MODEL_NAME} (v{MODEL_VERSION})")

    # 1. Download Model and Image
    print("Downloading weights and image...")
    model_path = "temp_model.tflite"
    with open(model_path, "wb") as f:
        f.write(requests.get(WEIGHTS_URL).content)

    img_response = requests.get(IMAGE_URL)
    img = Image.open(BytesIO(img_response.content)).convert("RGB")
    
    # 2. Load TFLite Model FIRST to get required dimensions
    print("Loading model into memory...")
    interpreter = tf.lite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()
    
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    
    # Extract the expected height and width from the model's input tensor shape
    # Shape is usually: [batch_size, height, width, channels] e.g., [1, 224, 224, 3]
    expected_height = input_details[0]['shape'][1]
    expected_width = input_details[0]['shape'][2]
    
    # 3. Dynamically Preprocess Image
    print(f"Model expects dimensions {expected_width}x{expected_height}. Resizing image...")
    img = img.resize((expected_width, expected_height))
    img_array = np.array(img, dtype=np.float32) / 255.0
    img_array = np.expand_dims(img_array, axis=0) # Add batch dimension

    # Check if model expects INT8 (quantized) or FLOAT32
    if input_details[0]['dtype'] == np.uint8:
        img_array = (img_array * 255).astype(np.uint8)
        
    # 4. Run Inference
    print("Running inference...")
    interpreter.set_tensor(input_details[0]['index'], img_array)
    interpreter.invoke()
    
    prediction = interpreter.get_tensor(output_details[0]['index'])[0][0]
    
    # Normalize prediction to a 1-100 confidence score
    if output_details[0]['dtype'] == np.uint8:
        dirty_confidence = int((prediction / 255.0) * 100)
    else:
        dirty_confidence = int(prediction * 100)
        
    clean_confidence = 100 - dirty_confidence
    predicted_label = "DIRTY" if dirty_confidence > 50 else "CLEAN"
    
    print(f"Result: {predicted_label} (Dirty Conf: {dirty_confidence}%)")

    # 5. Save to Neon Database
    print("Logging to Neon...")
    inf_id = f"inf_{uuid.uuid4().hex[:16]}"
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cursor = conn.cursor()
        query = """
            INSERT INTO "InferenceLog" (id, "predictedLabel", confidence, "imageId", "modelId", "createdAt")
            VALUES (%s, %s, %s, %s, %s, NOW())
        """
        cursor.execute(query, (inf_id, predicted_label, dirty_confidence, IMAGE_ID, MODEL_ID))
        conn.commit()
    except Exception as e:
        print(f"DB Error: {e}")
    finally:
        if 'conn' in locals():
            cursor.close()
            conn.close()

    # 6. Send Email via Resend
    print("Sending Email Alert...")
    resend.api_key = RESEND_API_KEY
    
    color = "#ef4444" if predicted_label == "DIRTY" else "#22c55e"
    
    html_content = f"""
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: {color}; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0;">Bus Classified as {predicted_label}</h1>
        </div>
        <div style="padding: 20px;">
            <img src="{IMAGE_URL}" style="width: 100%; border-radius: 4px; margin-bottom: 20px;" alt="Bus Image" />
            <p><strong>Confidence:</strong> {dirty_confidence}% Dirty</p>
            <p><strong>Model Used:</strong> {MODEL_NAME} (v{MODEL_VERSION})</p>
            <p><strong>Image ID:</strong> {IMAGE_ID}</p>
            <a href="https://project-560xk.vercel.app/dashboard" style="display: inline-block; background: #1f2937; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View in Dashboard</a>
        </div>
    </div>
    """

    resend.Emails.send({
        "from": "cerberus@jludik.dev",
        "to": ["jacques@ludik.dev"],
        "subject": f"Alert: Bus classified as {predicted_label}",
        "html": html_content
    })
    print("Process complete. Check your inbox!")

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
#     print(f"Starting Cloud Inference for Image: {IMAGE_ID} using Model: {MODEL_NAME}")

#     # 1. Download Model and Image
#     print("Downloading weights and image...")
#     model_path = "temp_model.tflite"
#     with open(model_path, "wb") as f:
#         f.write(requests.get(WEIGHTS_URL).content)

#     img_response = requests.get(IMAGE_URL)
#     img = Image.open(BytesIO(img_response.content)).convert("RGB")
    
#     # 2. Preprocess Image (Assuming 256x256 based on your earlier ACAP config)
#     img = img.resize((256, 256))
#     img_array = np.array(img, dtype=np.float32) / 255.0
#     img_array = np.expand_dims(img_array, axis=0) # Add batch dimension

#     # 3. Run TFLite Inference
#     print("Running inference...")
#     interpreter = tf.lite.Interpreter(model_path=model_path)
#     interpreter.allocate_tensors()
    
#     input_details = interpreter.get_input_details()
#     output_details = interpreter.get_output_details()
    
#     # Check if model expects INT8 (quantized) or FLOAT32
#     if input_details[0]['dtype'] == np.uint8:
#         img_array = (img_array * 255).astype(np.uint8)
        
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

#     # 4. Save to Neon Database
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

#     # 5. Send Email via Resend
#     print("Sending Email Alert...")
#     resend.api_key = RESEND_API_KEY
    
#     color = "#ef4444" if predicted_label == "DIRTY" else "#22c55e"
    
#     html_content = f"""
#     <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
#         <div style="background-color: {color}; padding: 20px; text-align: center; color: white;">
#             <h1 style="margin: 0;">Bus Classified as {predicted_label}</h1>
#         </div>
#         <div style="padding: 20px;">
#             <img src="{IMAGE_URL}" style="width: 100%; border-radius: 4px; margin-bottom: 20px;" alt="Bus Image" />
#             <p><strong>Confidence:</strong> {dirty_confidence}% Dirty</p>
#             <p><strong>Model Used:</strong> {MODEL_NAME} (v{MODEL_VERSION})</p>
#             <p><strong>Image ID:</strong> {IMAGE_ID}</p>
#             <a href="https://project-560xk.vercel.app/dashboard" style="display: inline-block; background: #1f2937; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View in Dashboard</a>
#         </div>
#     </div>
#     """

#     resend.Emails.send({
#         "from": "cerberus@jludik.dev",
#         "to": ["jacques@ludik.dev"],
#         "subject": f"Alert: Bus classified as {predicted_label}",
#         "html": html_content
#     })
#     print("Process complete.")

# if __name__ == "__main__":
#     main()