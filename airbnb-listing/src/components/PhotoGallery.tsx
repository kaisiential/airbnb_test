"use client";

import { useState } from "react";
import { Grid2x2, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function PhotoGallery({ data }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = data.photos;

  if (showAll) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setShowAll(false)}
            className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <span className="text-white text-sm">
            {currentPhoto + 1} / {photos.length}
          </span>
          <div className="w-10" />
        </div>
        <div className="flex-1 flex items-center justify-center relative px-16">
          <button
            onClick={() =>
              setCurrentPhoto((p) => (p - 1 + photos.length) % photos.length)
            }
            className="absolute left-4 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={photos[currentPhoto]}
            alt={`Photo ${currentPhoto + 1}`}
            className="max-h-[80vh] max-w-full object-contain rounded-lg"
          />
          <button
            onClick={() =>
              setCurrentPhoto((p) => (p + 1) % photos.length)
            }
            className="absolute right-4 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center gap-2 py-6">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPhoto(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentPhoto ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
        {/* Main large photo */}
        <div
          className="md:col-span-2 md:row-span-2 cursor-pointer"
          onClick={() => {
            setCurrentPhoto(0);
            setShowAll(true);
          }}
        >
          <img
            src={photos[0]}
            alt="Main photo"
            className="w-full h-[300px] md:h-[420px] object-cover hover:brightness-90 transition-all"
          />
        </div>
        {/* 4 smaller photos */}
        {photos.slice(1, 5).map((photo, i) => (
          <div
            key={i}
            className="hidden md:block cursor-pointer"
            onClick={() => {
              setCurrentPhoto(i + 1);
              setShowAll(true);
            }}
          >
            <img
              src={photo}
              alt={`Photo ${i + 2}`}
              className="w-full h-[206px] object-cover hover:brightness-90 transition-all"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setCurrentPhoto(0);
          setShowAll(true);
        }}
        className="absolute bottom-4 right-4 bg-white border border-gray-800 rounded-lg px-4 py-1.5 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        <Grid2x2 className="w-4 h-4" />
        Show all photos
      </button>
    </div>
  );
}
