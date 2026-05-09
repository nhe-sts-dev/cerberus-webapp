"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import type { BusImage } from "./DashboardClient"; 

// Recreate the types locally for the frontend to use without Prisma dependencies
type LabelStatus = "DIRTY" | "CLEAN" | "UNCERTAIN" | "UNLABELED";
type Weather = "SUNNY" | "RAINY" | "OVERCAST" | "NIGHT";
type Angle = "FRONT" | "SIDE" | "REAR";

export function EditModal({ image, onClose }: { image: BusImage; onClose: () => void }) {
  const utils = api.useUtils();
  
  // Explicitly type the state to fix ESLint "unsafe destructuring" errors
  const [label, setLabel] = useState<LabelStatus>((image.label!) ?? "UNLABELED");
  const [confidence, setConfidence] = useState<number>(image.confidence ?? 50);
  const [fleetNumber, setFleetNumber] = useState<string>(image.fleetNumber ?? "");
  const [cameraId, setCameraId] = useState<string>(image.cameraId ?? "");
  
  // HTML datetime-local inputs require a specific string format (YYYY-MM-DDThh:mm)
  const [timeTaken, setTimeTaken] = useState<string>(
    image.timeTaken ? new Date(image.timeTaken).toISOString().slice(0, 16) : ""
  );
  
  const [weatherCondition, setWeatherCondition] = useState<Weather | "">((image.weatherCondition!) ?? "");
  const [cameraAngle, setCameraAngle] = useState<Angle | "">((image.cameraAngle!) ?? "");

  const updateMutation = api.image.updateImage.useMutation({
    onMutate: async (newImage) => {
      await utils.image.getInfiniteImages.cancel();
      onClose();
      
      utils.image.getStats.setData(undefined, (old) => {
        if (!old) return old;
        return {
          ...old,
          unverifiedCount: image.isVerified ? old.unverifiedCount : Math.max(0, old.unverifiedCount - 1)
        };
      });
    },
    onSettled: () => {
      void utils.image.getInfiniteImages.invalidate();
      void utils.image.getStats.invalidate();
    }
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate({
      id: image.id,
      label,
      confidence,
      // Convert empty strings to null for the database
      fleetNumber: fleetNumber || null,
      cameraId: cameraId || null,
      timeTaken: timeTaken ? new Date(timeTaken) : null,
      weatherCondition: (weatherCondition as Weather) || null,
      cameraAngle: (cameraAngle as Angle) || null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Left Side: Large Image */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative">
           <img src={image.imageUrl} className="max-w-full max-h-full object-contain" alt="Bus focus" />
           <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm backdrop-blur-md">
              ID: {image.id.slice(-6)}
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/5 p-6 overflow-y-auto bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Label Context</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors text-2xl">✕</button>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            {/* Classification */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Status Classification</label>
                <select 
                  value={label} 
                  onChange={(e) => setLabel(e.target.value as LabelStatus)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="UNLABELED">Select a label...</option>
                  <option value="DIRTY">Dirty</option>
                  <option value="CLEAN">Clean</option>
                  <option value="UNCERTAIN">Uncertain</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                  <label>Confidence</label>
                  <span>{confidence}%</span>
                </div>
                <input 
                  type="range" min="1" max="100" 
                  value={confidence} 
                  onChange={(e) => setConfidence(parseInt(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>

            {/* Context & Metadata */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Taken</label>
                <input 
                  type="datetime-local" 
                  value={timeTaken}
                  onChange={(e) => setTimeTaken(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weather</label>
                <select 
                  value={weatherCondition} 
                  onChange={(e) => setWeatherCondition(e.target.value as Weather)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Unknown</option>
                  <option value="SUNNY">Sunny</option>
                  <option value="RAINY">Rainy</option>
                  <option value="OVERCAST">Overcast</option>
                  <option value="NIGHT">Night</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Angle</label>
                <select 
                  value={cameraAngle} 
                  onChange={(e) => setCameraAngle(e.target.value as Angle)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Unknown</option>
                  <option value="FRONT">Front</option>
                  <option value="SIDE">Side</option>
                  <option value="REAR">Rear</option>
                </select>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Fleet #</label>
                <input 
                  type="text" 
                  placeholder="e.g. Bus-402"
                  value={fleetNumber}
                  onChange={(e) => setFleetNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Camera ID</label>
                <input 
                  type="text" 
                  placeholder="e.g. Axis-P1465"
                  value={cameraId}
                  onChange={(e) => setCameraId(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition shadow-md mt-4"
            >
              Verify & Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


















// import { useState } from "react";
// import { api } from "~/trpc/react";
// import type { BusImage } from "./DashboardClient"; // Import the type

// export function EditModal({ image, onClose }: { image: BusImage; onClose: () => void }) {
//   const utils = api.useUtils();
  
//   // Local state for the form
//   const [label, setLabel] = useState(image.label ?? "UNLABELED");
//   const [confidence, setConfidence] = useState(image.confidence ?? 50);

//   const updateMutation = api.image.updateImage.useMutation({
//     // OPTIMISTIC UPDATE LOGIC
//     onMutate: async (newImage) => {
//       await utils.image.getInfiniteImages.cancel();
//       // Close the modal instantly for a snappy UX
//       onClose();
      
//       // Update the stats optimistically
//       utils.image.getStats.setData(undefined, (old) => {
//         if (!old) return old;
//         return {
//           ...old,
//           unverifiedCount: image.isVerified ? old.unverifiedCount : Math.max(0, old.unverifiedCount - 1)
//         };
//       });
//     },
//     onSettled: () => {
//       // Background refetch to ensure truth
//       void utils.image.getInfiniteImages.invalidate();
//       void utils.image.getStats.invalidate();
//     }
//   });

//   const handleSave = (e: React.FormEvent) => {
//     e.preventDefault();
//     updateMutation.mutate({
//       id: image.id,
//       label: label as LabelStatus,
//       confidence,
//       // Pass the other fields here...
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
//       <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
//         {/* Left Side: Large Image */}
//         <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
//            <img src={image.imageUrl} className="max-w-full max-h-full object-contain" alt="Bus focus" />
//         </div>

//         {/* Right Side: Form */}
//         <div className="w-full md:w-1/3 p-6 overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold">Label Image</h3>
//             <button onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
//           </div>

//           <form onSubmit={handleSave} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Status</label>
//               <select 
//                 value={label} 
//                 onChange={(e) => setLabel(e.target.value as LabelStatus)}
//                 className="w-full p-2 border rounded-md"
//               >
//                 <option value="DIRTY">Dirty</option>
//                 <option value="CLEAN">Clean</option>
//                 <option value="UNCERTAIN">Uncertain</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Confidence: {confidence}%</label>
//               <input 
//                 type="range" min="1" max="100" 
//                 value={confidence} 
//                 onChange={(e) => setConfidence(parseInt(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             {/* Add your other inputs here (fleetNumber, weather, etc.) following the same pattern */}

//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
//             >
//               Verify & Save Next
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }