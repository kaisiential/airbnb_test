"use client";

import { Clock, Users, CircleAlert } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function HouseRules({ data }: Props) {
  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold mb-4">Things to know</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* House Rules */}
        <div>
          <h3 className="font-semibold mb-3">House rules</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Clock className="w-5 h-5 shrink-0" />
              <span>Check-in: {data.checkIn}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Clock className="w-5 h-5 shrink-0" />
              <span>Checkout: {data.checkOut}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Users className="w-5 h-5 shrink-0" />
              <span>
                {data.maxGuests} guest{data.maxGuests > 1 ? "s" : ""} maximum
              </span>
            </div>
            {data.houseRules.map((rule, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <CircleAlert className="w-5 h-5 shrink-0" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Property */}
        <div>
          <h3 className="font-semibold mb-3">Safety & property</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-700">Carbon monoxide alarm</p>
            <p className="text-sm text-gray-700">Smoke alarm</p>
            <p className="text-sm text-gray-700">Security camera/recording device not reported</p>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div>
          <h3 className="font-semibold mb-3">Cancellation policy</h3>
          <p className="text-sm text-gray-700 font-semibold">
            {data.cancellationPolicy}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {data.cancellationDetail}
          </p>
        </div>
      </div>
    </div>
  );
}
