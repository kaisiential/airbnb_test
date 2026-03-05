"use client";

import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function HostInfoBar({ data }: Props) {
  return (
    <div className="flex items-center justify-between py-6 border-b border-gray-200">
      <div>
        <h2 className="text-xl md:text-[22px] font-semibold">
          {data.propertyType} hosted by {data.hostName}
        </h2>
        <p className="text-gray-600 mt-1">
          {data.guests} guest{data.guests > 1 ? "s" : ""} · {data.bedrooms} bedroom
          {data.bedrooms > 1 ? "s" : ""} · {data.beds} bed{data.beds > 1 ? "s" : ""} ·{" "}
          {data.bathrooms} bath{data.bathrooms > 1 ? "s" : ""}
        </p>
      </div>
      <div className="relative shrink-0 ml-4">
        <img
          src={data.hostAvatar}
          alt={data.hostName}
          className="w-14 h-14 rounded-full object-cover"
        />
        {data.hostIsSuperhost && (
          <div className="absolute -bottom-1 -right-1 bg-[#FF385C] rounded-full w-6 h-6 flex items-center justify-center">
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 text-white fill-current"
            >
              <path d="M8 0l2.09 5.527L16 6.18l-4.09 3.694L13.18 16 8 12.764 2.82 16l1.27-6.127L0 6.18l5.91-.654z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
