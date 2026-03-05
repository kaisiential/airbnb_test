"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { ListingData } from "@/data/listingData";

interface Props {
  data: ListingData;
}

export default function Description({ data }: Props) {
  const [expanded, setExpanded] = useState(false);
  const text = data.description;
  const isLong = text.length > 400;
  const displayText = expanded || !isLong ? text : text.slice(0, 400) + "...";

  return (
    <div className="py-8 border-b border-gray-200">
      <div className="whitespace-pre-line text-gray-700 leading-relaxed">
        {displayText}
      </div>
      {isLong && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-1 mt-4 text-black font-semibold underline text-sm"
        >
          Show more
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
