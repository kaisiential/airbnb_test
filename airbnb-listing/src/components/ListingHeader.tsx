"use client";

import { Share, Heart, Star } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function ListingHeader({ data }: Props) {
  return (
    <div className="mt-6">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl md:text-[26px] font-semibold text-gray-900">
          {data.title}
        </h1>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <button className="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
            <Share className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold underline hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
            <Heart className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-1 text-sm">
        <Star className="w-4 h-4 fill-current" />
        <span className="font-semibold">{data.rating}</span>
        <span className="mx-1">·</span>
        <button className="font-semibold underline">
          {data.reviewCount} reviews
        </button>
        <span className="mx-1">·</span>
        {data.hostIsSuperhost && (
          <>
            <span className="font-semibold">
              ꟷ Superhost ꟷ
            </span>
            <span className="mx-1">·</span>
          </>
        )}
        <button className="font-semibold underline">{data.location}</button>
      </div>
    </div>
  );
}
