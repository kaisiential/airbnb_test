"use client";

import { ShieldCheck, Star, Clock, MessageCircle } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function HostDetails({ data }: Props) {
  return (
    <div className="py-8 border-b border-gray-200">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={data.hostAvatar}
          alt={data.hostName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-[22px] font-semibold">
            Hosted by {data.hostName}
          </h2>
          <p className="text-gray-500 text-sm">
            Joined {data.hostYears} years ago
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm">{data.hostReviewCount} Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm">Identity verified</span>
        </div>
        {data.hostIsSuperhost && (
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#FF385C]" />
            <span className="text-sm font-semibold">Superhost</span>
          </div>
        )}
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        {data.hostDescription}
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span>Response time: {data.hostResponseTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MessageCircle className="w-4 h-4" />
          <span>Response rate: {data.hostResponseRate}</span>
        </div>
      </div>

      <button className="border border-gray-800 rounded-lg px-6 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors">
        Contact Host
      </button>

      <div className="mt-6 flex items-start gap-2 text-sm text-gray-500">
        <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#FF385C]" />
        <span>
          To protect your payment, never transfer money or communicate outside of
          the Airbnb website or app.
        </span>
      </div>
    </div>
  );
}
