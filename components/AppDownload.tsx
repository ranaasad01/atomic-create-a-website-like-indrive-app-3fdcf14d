import { Star, Download } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="bg-[#1A1A2E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#0F3460] via-[#16213E] to-[#1A1A2E] rounded-3xl overflow-hidden border border-white/10 p-8 md:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E94560]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F3460]/40 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 text-[#E94560] text-sm font-medium mb-6">
                <Download className="w-4 h-4" />
                Download the App
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Get InDrive
                <br />
                <span className="text-[#E94560]">On Your Phone</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Download the app and book your first negotiated ride in under 2 minutes. Available on iOS and Android.
              </p>

              {/* App ratings */}
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-white font-bold">4.8</div>
                  <div className="text-white/40 text-xs">App Store</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-white font-bold">4.7</div>
                  <div className="text-white/40 text-xs">Google Play</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-white font-bold">50M+</div>
                  <div className="text-white/40 text-xs">Downloads</div>
                </div>
              </div>

              {/* Download buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3.5 bg-white text-[#1A1A2E] rounded-2xl hover:bg-white/90 transition-all font-semibold"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3.5 bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/15 transition-all font-semibold"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM20.7 10.06l-2.7-1.56-3.57 3.57 3.57 3.57 2.73-1.58c.78-.45.78-1.55-.03-2zM2.01 1.05C1.7 1.37 1.5 1.86 1.5 2.5v19c0 .64.2 1.13.51 1.45l.08.07 10.64-10.64v-.25L2.09.98l-.08.07zM13.41 12.5l3.36-3.36-11.7-6.76 8.34 10.12z" />
                  </svg>
                  <div>
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-56 h-96 bg-[#1A1A2E] rounded-[2.5rem] border-4 border-white/10 overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-[#16213E] to-[#1A1A2E] p-4">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-4 text-white/40 text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/40 rounded-sm" />
                        <div className="w-2 h-2 bg-white/40 rounded-full" />
                      </div>
                    </div>
                    {/* App content preview */}
                    <div className="text-center mb-4">
                      <div className="text-white font-bold text-sm">Where to?</div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="bg-white/5 rounded-xl p-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <div className="text-white/60 text-xs">Current location</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#E94560] rounded-full" />
                        <div className="text-white/60 text-xs">Enter destination</div>
                      </div>
                    </div>
                    <div className="bg-[#E94560] rounded-xl p-3 text-center text-white text-xs font-bold mb-4">
                      Propose Fare: $15
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: "Marcus J.", price: "$18", rating: "4.9" },
                        { name: "Sofia M.", price: "$16", rating: "4.8" },
                      ].map((d) => (
                        <div key={d.name} className="bg-white/5 rounded-xl p-2.5 flex items-center justify-between">
                          <div>
                            <div className="text-white text-xs font-semibold">{d.name}</div>
                            <div className="text-yellow-400 text-xs">★ {d.rating}</div>
                          </div>
                          <div className="text-[#E94560] text-xs font-bold">{d.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 bg-[#E94560]/10 rounded-[2.5rem] blur-2xl -z-10 scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
