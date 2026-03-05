"use client";

import { DoorOpen, Star, CalendarDays, MapPin } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  door: DoorOpen,
  star: Star,
  calendar: CalendarDays,
  location: MapPin,
};

export default function Highlights({ data }: Props) {
  return (
    <div className="py-6 border-b border-gray-200 space-y-6">
      {data.highlights.map((highlight, i) => {
        const Icon = iconMap[highlight.icon] || Star;
        return (
          <div key={i} className="flex gap-4">
            <Icon className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">{highlight.title}</h3>
              <p className="text-gray-500 text-sm mt-0.5">
                {highlight.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
