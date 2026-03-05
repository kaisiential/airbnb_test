"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp, Flag } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function BookingWidget({ data }: Props) {
  const [checkIn, setCheckIn] = useState("2026-03-15");
  const [checkOut, setCheckOut] = useState("2026-03-20");
  const [guests, setGuests] = useState(1);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const nights = 5;
  const subtotal = data.pricePerNight * nights;
  const total = subtotal + data.cleaningFee + data.serviceFee;

  return (
    <div className="border border-gray-200 rounded-xl shadow-lg p-6 sticky top-24">
      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-[22px] font-semibold">
          {data.currencySymbol}{data.pricePerNight}
        </span>
        <span className="text-gray-600">night</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2 text-sm">
        <Star className="w-3.5 h-3.5 fill-current" />
        <span className="font-semibold">{data.rating}</span>
        <span className="mx-1 text-gray-300">·</span>
        <span className="text-gray-500 underline">
          {data.reviewCount} reviews
        </span>
      </div>

      {/* Date & Guest Selector */}
      <div className="mt-4 border border-gray-400 rounded-xl overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-b border-gray-400">
            <label className="text-[10px] font-bold uppercase tracking-wider">
              CHECK-IN
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="block w-full text-sm mt-0.5 bg-transparent outline-none"
            />
          </div>
          <div className="p-3 border-b border-gray-400">
            <label className="text-[10px] font-bold uppercase tracking-wider">
              CHECKOUT
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="block w-full text-sm mt-0.5 bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setGuestsOpen(!guestsOpen)}
            className="w-full p-3 flex items-center justify-between"
          >
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider block">
                GUESTS
              </label>
              <span className="text-sm">
                {guests} guest{guests > 1 ? "s" : ""}
              </span>
            </div>
            {guestsOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {guestsOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-xl shadow-lg p-4 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">Guests</span>
                  <p className="text-sm text-gray-500">Max {data.maxGuests}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={guests <= 1}
                  >
                    −
                  </button>
                  <span className="w-4 text-center">{guests}</span>
                  <button
                    onClick={() =>
                      setGuests(Math.min(data.maxGuests, guests + 1))
                    }
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={guests >= data.maxGuests}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => setGuestsOpen(false)}
                className="block ml-auto mt-3 text-sm font-semibold underline"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reserve Button */}
      <button className="w-full mt-4 bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] text-white rounded-lg py-3.5 font-semibold text-base hover:opacity-90 transition-opacity">
        Reserve
      </button>
      <p className="text-center text-sm text-gray-500 mt-3">
        You won&apos;t be charged yet
      </p>

      {/* Price Breakdown */}
      <div className="mt-5 space-y-3">
        <div className="flex justify-between text-gray-700">
          <span className="underline">
            {data.currencySymbol}{data.pricePerNight} x {nights} nights
          </span>
          <span>
            {data.currencySymbol}{subtotal}
          </span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className="underline">Cleaning fee</span>
          <span>
            {data.currencySymbol}{data.cleaningFee}
          </span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className="underline">Airbnb service fee</span>
          <span>
            {data.currencySymbol}{data.serviceFee}
          </span>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
          <span>Total before taxes</span>
          <span>
            {data.currencySymbol}{total}
          </span>
        </div>
      </div>

      {/* Report */}
      <div className="mt-5 flex items-center justify-center gap-2 text-gray-500">
        <Flag className="w-4 h-4" />
        <button className="text-sm underline font-semibold">
          Report this listing
        </button>
      </div>
    </div>
  );
}
