import Link from "next/link";
import { MapPin, ArrowRight } from 'lucide-react';
import { mockCities } from "@/lib/mockData";

export default function CityCoverage() {
  const displayCities = mockCities.slice(0, 8);

  return (
    <section className="bg-[#1A1A2E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 text-[#E94560] text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Global Coverage
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Rides in <span className="text-[#E94560]">700+ Cities</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From megacities to emerging markets, InDrive is transforming how people move around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayCities.map((city) => (
            <div
              key={city.id}
              className="relative bg-[#16213E] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E94560]/30 transition-all card-hover group cursor-pointer"
            >
              <div className="h-28 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16213E] via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{city.flag}</span>
                  <h3 className="text-white font-bold text-sm">{city.name}</h3>
                </div>
                <p className="text-white/40 text-xs mb-2">{city.country}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/30">{city.drivers.toLocaleString()} drivers</span>
                  <span className="text-[#E94560] font-semibold">{city.rides} rides</span>
                </div>
              </div>
              {city.active && (
                <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
          >
            View All 700+ Cities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
