"use client";

import { cn } from "@/lib/cn";

interface Props {
  version: "original" | "optimized";
  onChange: (version: "original" | "optimized") => void;
}

export default function VersionToggle({ version, onChange }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-900 rounded-full p-1 flex items-center shadow-2xl">
        <button
          onClick={() => onChange("original")}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
            version === "original"
              ? "bg-white text-gray-900 shadow-lg"
              : "text-gray-400 hover:text-white"
          )}
        >
          Original Listing
        </button>
        <button
          onClick={() => onChange("optimized")}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
            version === "optimized"
              ? "bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          )}
        >
          Optimized Listing
        </button>
      </div>
      <div className="text-center mt-2">
        <span className={cn(
          "text-xs px-3 py-1 rounded-full",
          version === "optimized"
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 text-gray-600"
        )}>
          {version === "optimized"
            ? "Showing optimized version"
            : "Showing original version"}
        </span>
      </div>
    </div>
  );
}
