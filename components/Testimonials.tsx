"use client";

import { useState } from "react";
import { Star, ChevronDown, ArrowRight } from 'lucide-react';
import { mockTestimonials } from "@/lib/mockData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: i <= rating ? "#F59E0B" : "rgba(255,255,255,0.2)",
            fill: i <= rating ? "#F59E0B" : "transparent",
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#16213E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-yellow-400" />
            Rider Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Loved by <span className="text-[#E94560]">Millions</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real stories from real riders who switched to InDrive and never looked back.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="bg-[#1A1A2E] rounded-3xl p-8 md:p-12 border border-white/5 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94560]/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="text-6xl text-[#E94560]/20 font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-medium mb-8 max-w-3xl">
              {mockTestimonials[activeIndex].text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={mockTestimonials[activeIndex].photo}
                alt={mockTestimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#E94560]"
              />
              <div>
                <div className="text-white font-bold">{mockTestimonials[activeIndex].name}</div>
                <div className="text-white/40 text-sm">{mockTestimonials[activeIndex].role} · {mockTestimonials[activeIndex].city}</div>
                <StarRating rating={mockTestimonials[activeIndex].rating} />
              </div>
              <div className="ml-auto text-white/20 text-sm">{mockTestimonials[activeIndex].date}</div>
            </div>
          </div>
        </div>

        {/* Testimonial selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {mockTestimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(i)}
              className={[
                "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all text-center",
                activeIndex === i
                  ? "bg-[#E94560]/10 border-[#E94560]/30"
                  : "bg-[#1A1A2E] border-white/5 hover:border-white/10",
              ].join(" ")}
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-white text-xs font-semibold leading-tight">{t.name}</div>
              <div className="text-white/30 text-xs">{t.city}</div>
            </button>
          ))}
        </div>

        {/* Overall stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "4.8/5", label: "Average Rating", sub: "Based on 2M+ reviews" },
            { value: "50M+", label: "Happy Riders", sub: "Worldwide" },
            { value: "98%", label: "Would Recommend", sub: "To friends & family" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1A1A2E] rounded-2xl p-6 border border-white/5">
              <div className="text-3xl font-black text-[#E94560] mb-1">{stat.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/30 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
