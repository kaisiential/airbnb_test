"use client";

import { MapPin } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function LocationSection({ data }: Props) {
  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold mb-4">Where you&apos;ll be</h2>

      {/* Map placeholder */}
      <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        <div className="relative text-center">
          <MapPin className="w-10 h-10 text-[#FF385C] mx-auto mb-2" />
          <p className="font-semibold text-gray-700">{data.location}</p>
          <p className="text-sm text-gray-500 mt-1">
            Exact location provided after booking
          </p>
        </div>
        {/* Decorative map-like grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="gray"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <h3 className="font-semibold mt-6 mb-2">{data.locationDetail}</h3>
      <p className="text-gray-600 leading-relaxed">{data.neighborhood}</p>
    </div>
  );
}
