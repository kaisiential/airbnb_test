"use client";

import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  isChanged: boolean;
  version: "original" | "optimized";
}

export default function DiffHighlight({ children, isChanged, version }: Props) {
  if (!isChanged || version === "original") {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div
        className={cn(
          "relative rounded-lg transition-all duration-500",
          "ring-2 ring-green-400/50 bg-green-50/30"
        )}
      >
        <div className="absolute -top-2.5 -right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold z-10">
          OPTIMIZED
        </div>
        {children}
      </div>
    </div>
  );
}
