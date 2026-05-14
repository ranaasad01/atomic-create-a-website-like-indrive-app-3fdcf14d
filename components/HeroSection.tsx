"use client";

import Link from "next/link";
import { ArrowRight, Star, Shield, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A2E]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E94560]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0F3460]/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16213E]/60 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 text-[#E94560] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#E94560] rounded-full animate-pulse" />
              Now available in 700+ cities worldwide
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              You Set
              <br />
              <span className="text-[#E94560]">The Price.</span>
              <br />
              <span className="text-white/80">Drivers Compete.</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              The world&apos;s first negotiation-based ride-hailing app. Propose your fare, receive driver offers, and choose the best deal. No surge pricing. Ever.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "50M+", label: "Happy Riders" },
                { value: "700+", label: "Cities" },
                { value: "4.8★", label: "App Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E94560] hover:bg-[#c73652] text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[#E94560]/30 hover:-translate-y-1 text-lg"
              >
                Book a Ride
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/driver"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all duration-200 text-lg"
              >
                Become a Driver
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="flex items-center gap-1.5 text-white/40 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                Verified Drivers
              </div>
              <div className="flex items-center gap-1.5 text-white/40 text-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                No Surge Pricing
              </div>
              <div className="flex items-center gap-1.5 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-[#E94560]" />
                Real-time Tracking
              </div>
            </div>
          </div>

          {/* Right — Animated Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-80 h-80 rounded-full border border-[#E94560]/10 animate-spin-slow" />
            <div className="absolute w-64 h-64 rounded-full border border-[#0F3460]/40" />

            {/* Main card */}
            <div className="relative w-72 bg-[#16213E] rounded-3xl p-6 border border-white/10 shadow-2xl">
              {/* Map placeholder */}
              <div className="w-full h-40 rounded-2xl bg-[#0F3460]/50 mb-4 overflow-hidden relative">
                <img
                  src="https://www.mapsofworld.com/images-mow/world-map.jpg"
                  alt="Map"
                  className="w-full h-full object-cover opacity-60"
                />
                {/* Route line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 160">
                  <path
                    d="M 40 130 Q 100 80 160 60 Q 200 45 240 30"
                    stroke="#E94560"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="6 3"
                  />
                  <circle cx="40" cy="130" r="6" fill="#22C55E" />
                  <circle cx="240" cy="30" r="6" fill="#E94560" />
                </svg>
                {/* Car icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#E94560] rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-sm">🚗</span>
                </div>
              </div>

              {/* Fare negotiation preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Your offer</span>
                  <span className="text-white font-bold text-lg">$15.00</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex items-center gap-3">
                  <img
                    src="https://b3387583.smushcdn.com/3387583/wp-content/uploads/2023/05/iStock-1283471963.jpg?lossy=2&strip=1&webp=1"
                    alt="Driver"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#E94560]"
                  />
                  <div className="flex-1">
                    <div className="text-white text-sm font-semibold">Marcus J.</div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white/50 text-xs">4.9 · 2,847 trips</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#E94560] font-bold">$18</div>
                    <div className="text-white/40 text-xs">counter</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 rounded-xl bg-[#E94560]/10 text-[#E94560] text-sm font-semibold border border-[#E94560]/20">
                    Counter
                  </button>
                  <button className="py-2 rounded-xl bg-[#E94560] text-white text-sm font-semibold">
                    Accept $18
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
              3 Drivers Nearby
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#16213E] border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              ⚡ 4 min away
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#16213E" />
        </svg>
      </div>
    </section>
  );
}
