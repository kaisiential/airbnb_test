"use client";

import { useState } from "react";
import {
  Wifi,
  Tv,
  CookingPot,
  WashingMachine,
  Wind,
  Flame,
  Monitor,
  Shirt,
  Scissors,
  Grip,
  ShieldAlert,
  ShieldCheck,
  FireExtinguisher,
  Cross,
  X,
} from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  tv: Tv,
  kitchen: CookingPot,
  washer: WashingMachine,
  dryer: Wind,
  heating: Flame,
  workspace: Monitor,
  iron: Shirt,
  "hair-dryer": Scissors,
  hangers: Grip,
  "smoke-alarm": ShieldAlert,
  "carbon-monoxide": ShieldCheck,
  "fire-extinguisher": FireExtinguisher,
  "first-aid": Cross,
};

export default function Amenities({ data }: Props) {
  const [showAll, setShowAll] = useState(false);
  const displayAmenities = showAll
    ? data.amenities
    : data.amenities.slice(0, 10);

  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayAmenities.map((amenity, i) => {
          const Icon = iconMap[amenity.icon] || Wifi;
          return (
            <div key={i} className="flex items-center gap-4 py-2">
              <Icon className="w-6 h-6 shrink-0 text-gray-700" />
              <span
                className={
                  amenity.available ? "text-gray-700" : "text-gray-400 line-through"
                }
              >
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
      {data.totalAmenities > 10 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 border border-gray-800 rounded-lg px-6 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors"
        >
          Show all {data.totalAmenities} amenities
        </button>
      )}

      {/* Fullscreen modal */}
      {showAll && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="max-w-xl mx-auto px-6 py-8">
            <button
              onClick={() => setShowAll(false)}
              className="mb-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-semibold mb-6">
              What this place offers
            </h2>
            <div className="space-y-1">
              {data.amenities.map((amenity, i) => {
                const Icon = iconMap[amenity.icon] || Wifi;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-4 border-b border-gray-100"
                  >
                    <Icon className="w-6 h-6 shrink-0" />
                    <span
                      className={
                        amenity.available
                          ? ""
                          : "text-gray-400 line-through"
                      }
                    >
                      {amenity.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
