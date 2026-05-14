"use client";

import { MapPin, Navigation } from 'lucide-react';

interface MapPlaceholderProps {
  pickup?: string;
  destination?: string;
  height?: string;
}

export default function MapPlaceholder({
  pickup = "Current Location",
  destination = "",
  height = "h-64",
}: MapPlaceholderProps) {
  const containerClass = "relative " + height + " bg-[#0F3460]/30 rounded-2xl overflow-hidden border border-white/10";

  return (
    <div className={containerClass}>
      <img
        src="https://www.mapsofworld.com/images-mow/world-map.jpg"
        alt="Map"
        className="w-full h-full object-cover opacity-40"
      />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {destination && (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M 20% 75% Q 40% 40% 60% 30% Q 75% 20% 85% 15%"
            stroke="#E94560"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
            opacity="0.8"
          />
        </svg>
      )}

      <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <Navigation className="w-4 h-4 text-white" />
          </div>
          <div className="mt-1 bg-[#1A1A2E]/90 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap max-w-xs truncate">
            {pickup}
          </div>
        </div>
      </div>

      {destination && (
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-[#E94560] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="mt-1 bg-[#1A1A2E]/90 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap max-w-xs truncate">
              {destination}
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-3 right-3 flex flex-col gap-1">
        <button className="w-8 h-8 bg-[#16213E]/90 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm font-bold">
          +
        </button>
        <button className="w-8 h-8 bg-[#16213E]/90 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm font-bold">
          -
        </button>
      </div>

      <div className="absolute bottom-3 left-3 bg-[#1A1A2E]/80 text-white/40 text-xs px-2 py-1 rounded-lg">
        Interactive Map
      </div>
    </div>
  );
}
