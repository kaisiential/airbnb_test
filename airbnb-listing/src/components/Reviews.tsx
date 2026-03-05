"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function Reviews({ data }: Props) {
  const [showAll, setShowAll] = useState(false);
  const displayReviews = showAll ? data.reviews : data.reviews.slice(0, 6);

  return (
    <div className="py-8 border-b border-gray-200">
      {/* Rating Overview */}
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 fill-current" />
        <span className="text-[22px] font-semibold">{data.rating}</span>
        <span className="text-gray-300 text-xl mx-1">·</span>
        <span className="text-[22px] font-semibold">
          {data.reviewCount} reviews
        </span>
      </div>

      {/* Rating Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 mb-8 pb-8 border-b border-gray-200">
        {data.ratingCategories.map((cat, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="text-sm">{cat.name}</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 rounded-full"
                  style={{ width: `${(cat.score / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs font-semibold w-6 text-right">
                {cat.score.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {displayReviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm">{review.author}</h4>
                {review.location && (
                  <p className="text-xs text-gray-500">{review.location}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < review.rating ? "fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">
                · {review.date}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {data.reviews.length > 6 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 border border-gray-800 rounded-lg px-6 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors"
        >
          Show all {data.reviewCount} reviews
        </button>
      )}

      {/* Fullscreen reviews modal */}
      {showAll && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 py-8">
            <button
              onClick={() => setShowAll(false)}
              className="mb-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-semibold mb-8">
              <Star className="w-5 h-5 fill-current inline mr-2" />
              {data.rating} · {data.reviewCount} reviews
            </h2>
            <div className="space-y-8">
              {data.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{review.author}</h4>
                      <p className="text-xs text-gray-500">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
