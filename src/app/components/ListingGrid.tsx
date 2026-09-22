"use client";

import React, { useState } from "react";
import { Bath, BedDouble, Building2, MapPin, Maximize } from "lucide-react";

export type Listing = {
  title: string;
  location: string;
  price: string;
  priceNote?: string;
  type: string;
  area: string;
  beds?: number;
  baths?: number;
  tag?: string;
  image?: string;
};

const ListingGrid = ({ listings }: { listings: Listing[] }) => {
  const categories = ["All", ...Array.from(new Set(listings.map((listing) => listing.type)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleListings =
    activeCategory === "All"
      ? listings
      : listings.filter((listing) => listing.type === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full border-2 font-semibold text-sm transition-colors cursor-pointer ${
              activeCategory === category
                ? "bg-[#E76969] border-[#E76969] text-white"
                : "bg-white border-[#F6DCDC] text-gray-900 hover:border-[#E76969]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleListings.map((listing) => (
          <div
            key={listing.title}
            className="rounded-lg overflow-hidden bg-white border-2 border-[#F6DCDC] hover:border-[#E76969] transition-all flex flex-col"
          >
            <div
              className="relative h-[180px] bg-gradient-to-br from-[#F6DCDC] to-[#fff6f4] flex items-center justify-center"
              style={
                listing.image
                  ? {
                      backgroundImage: `url(${listing.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }
                  : undefined
              }
            >
              {!listing.image && <Building2 className="w-14 h-14 text-[#E76969]/60" />}
              <span className="absolute top-3 left-3 bg-black/80 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm">
                {listing.type}
              </span>
              {listing.tag && (
                <span className="absolute top-3 right-3 bg-[#E76969] text-white text-xs font-bold px-3 py-1 rounded-sm">
                  {listing.tag}
                </span>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg text-gray-900">{listing.title}</h3>
              <p className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <MapPin className="w-4 h-4 shrink-0" />
                {listing.location}
              </p>
              <p className="text-[#E76969] font-bold text-xl mt-3">
                {listing.price}
                {listing.priceNote && (
                  <span className="text-sm font-medium text-gray-600"> {listing.priceNote}</span>
                )}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-4 pt-4 border-t border-[#F6DCDC]">
                {listing.beds !== undefined && (
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4" /> {listing.beds} Beds
                  </span>
                )}
                {listing.baths !== undefined && (
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4" /> {listing.baths} Baths
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Maximize className="w-4 h-4" /> {listing.area}
                </span>
              </div>

              <a
                href="#enquiry"
                className="mt-5 text-center bg-[#E76969] hover:bg-[#d45959] text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Enquire
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingGrid;
