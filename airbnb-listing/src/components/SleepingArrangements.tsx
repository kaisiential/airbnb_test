"use client";

import { Bed } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function SleepingArrangements({ data }: Props) {
  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold mb-4">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.sleepingArrangements.map((arrangement, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-6"
          >
            <Bed className="w-6 h-6 mb-3" />
            <h3 className="font-semibold">{arrangement.room}</h3>
            <p className="text-gray-500 text-sm mt-1">{arrangement.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
