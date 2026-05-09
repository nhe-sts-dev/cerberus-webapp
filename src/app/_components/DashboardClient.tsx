"use client";

import { useState, useEffect } from "react";
import { api } from "~/trpc/react";
import { useInView } from "react-intersection-observer";
import type { RouterOutputs } from "~/trpc/react";
import { EditModal } from "./EditModal"; // Assuming they are in the same folder

export type BusImage = RouterOutputs["image"]["getInfiniteImages"]["items"][number];

export function DashboardClient() {
  const { ref, inView } = useInView();
  const [selectedImage, setSelectedImage] = useState<BusImage | null>(null);

  const { data: stats } = api.image.getStats.useQuery();
  
  const [data, { fetchNextPage, hasNextPage, isFetchingNextPage }] = 
    api.image.getInfiniteImages.useSuspenseInfiniteQuery(
      { limit: 20 },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );

  // Fetch next page when the invisible div at the bottom comes into view
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  return (
    <div className="flex flex-col gap-8">
      {/* STATS ROW */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 font-medium">Clean Busses</p>
          <p className="text-3xl font-bold text-green-600">{stats?.cleanCount ?? 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 font-medium">Dirty Busses</p>
          <p className="text-3xl font-bold text-red-600">{stats?.dirtyCount ?? 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 font-medium">Needs Verification</p>
          <p className="text-3xl font-bold text-yellow-600">{stats?.unverifiedCount ?? 0}</p>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.pages.flatMap((page) => page.items).map((img) => (
          <div 
            key={img.id} 
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer relative overflow-hidden rounded-lg aspect-video transition-transform hover:scale-[1.02] ${
              img.isVerified ? "shadow-lg shadow-green-500/50 border-2 border-green-500" : "bg-gray-100 border border-gray-300"
            }`}
          >
            {/* Standard img tag bypasses Vercel image optimization limits completely */}
            <img 
              src={img.imageUrl} 
              alt="Bus" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Verified Badge */}
            {img.isVerified && (
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                <span>✓ Verified</span>
              </div>
            )}
            
            {/* Label Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm flex justify-between">
              <span className="font-semibold">{img.label}</span>
              {img.confidence && <span>{img.confidence}%</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scroll Trigger Point */}
      <div ref={ref} className="h-10 w-full flex justify-center items-center text-gray-400">
        {isFetchingNextPage ? "Loading more..." : "End of queue"}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <EditModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
}