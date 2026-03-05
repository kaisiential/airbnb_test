"use client";

import { useState } from "react";
import { originalListing, optimizedListing } from "@/data/listingData";
import Header from "@/components/Header";
import PhotoGallery from "@/components/PhotoGallery";
import ListingHeader from "@/components/ListingHeader";
import HostInfoBar from "@/components/HostInfoBar";
import Highlights from "@/components/Highlights";
import Description from "@/components/Description";
import SleepingArrangements from "@/components/SleepingArrangements";
import Amenities from "@/components/Amenities";
import BookingWidget from "@/components/BookingWidget";
import Reviews from "@/components/Reviews";
import LocationSection from "@/components/LocationSection";
import HostDetails from "@/components/HostDetails";
import HouseRules from "@/components/HouseRules";
import Footer from "@/components/Footer";
import VersionToggle from "@/components/VersionToggle";
import DiffHighlight from "@/components/DiffHighlight";

export default function ListingPage() {
  const [version, setVersion] = useState<"original" | "optimized">("original");
  const data = version === "original" ? originalListing : optimizedListing;
  const isOptimized = version === "optimized";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Photo Gallery */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-0 mt-6">
        <PhotoGallery data={data} />
      </div>

      {/* Main Content */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[650px]">
            {/* Title */}
            <DiffHighlight isChanged={isOptimized} version={version}>
              <ListingHeader data={data} />
            </DiffHighlight>

            {/* Host Info Bar */}
            <HostInfoBar data={data} />

            {/* Highlights */}
            <DiffHighlight isChanged={isOptimized} version={version}>
              <Highlights data={data} />
            </DiffHighlight>

            {/* Description */}
            <DiffHighlight isChanged={isOptimized} version={version}>
              <Description data={data} />
            </DiffHighlight>

            {/* Sleeping Arrangements */}
            <DiffHighlight isChanged={isOptimized} version={version}>
              <SleepingArrangements data={data} />
            </DiffHighlight>

            {/* Amenities */}
            <DiffHighlight isChanged={isOptimized} version={version}>
              <Amenities data={data} />
            </DiffHighlight>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="hidden lg:block w-[372px] shrink-0 pt-8">
            <BookingWidget data={data} />
          </div>
        </div>

        {/* Full Width Sections */}
        <Reviews data={data} />
        <LocationSection data={data} />

        <DiffHighlight isChanged={isOptimized} version={version}>
          <HostDetails data={data} />
        </DiffHighlight>

        <HouseRules data={data} />
      </div>

      <Footer />

      {/* Version Toggle - Fixed at bottom */}
      <VersionToggle version={version} onChange={setVersion} />

      {/* Bottom padding for toggle */}
      <div className="h-20" />
    </div>
  );
}
