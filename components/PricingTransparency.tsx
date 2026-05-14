import { TrendingDown, DollarSign, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: TrendingDown,
    title: "Zero Surge Pricing",
    description:
      "Unlike other apps, InDrive never applies surge multipliers during peak hours, bad weather, or high demand. The price you negotiate is the price you pay.",
    highlight: "0x surge",
    color: "#22C55E",
  },
  {
    icon: DollarSign,
    title: "You Name the Price",
    description:
      "Propose any fare you think is fair based on distance, time, and your budget. Drivers can accept, decline, or counter-offer — creating a true marketplace.",
    highlight: "Your price",
    color: "#E94560",
  },
  {
    icon: Zap,
    title: "No Hidden Fees",
    description:
      "What you negotiate is what you pay. No booking fees, no service charges, no surprise tolls added after the ride. Complete transparency from start to finish.",
    highlight: "100% clear",
    color: "#3B82F6",
  },
  {
    icon: BarChart3,
    title: "Market-Based Fares",
    description:
      "Our app shows you the suggested fare range based on real market data, so you can make an informed offer that drivers are likely to accept.",
    highlight: "Fair market",
    color: "#F59E0B",
  },
];

export default function PricingTransparency() {
  return (
    <section className="bg-[#1A1A2E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              Fair Pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              No Surge Pricing.
              <br />
              <span className="text-[#E94560]">Ever.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Traditional ride apps punish you for needing a ride at the wrong time. InDrive flips the model — you always have the power to set a fair price, rain or shine, rush hour or midnight.
            </p>

            {/* Comparison */}
            <div className="bg-[#16213E] rounded-2xl p-6 border border-white/5">
              <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                <div className="text-white/40 font-medium">Scenario</div>
                <div className="text-red-400 font-semibold">Other Apps</div>
                <div className="text-green-400 font-semibold">InDrive</div>
              </div>
              {[
                { scenario: "Rush Hour", other: "2.5x surge", indrive: "Your price" },
                { scenario: "Rain/Storm", other: "3.2x surge", indrive: "Your price" },
                { scenario: "New Year's Eve", other: "5x surge", indrive: "Your price" },
                { scenario: "Airport pickup", other: "+$15 fee", indrive: "Negotiated" },
              ].map((row) => (
                <div key={row.scenario} className="grid grid-cols-3 gap-4 text-center text-sm py-2.5 border-t border-white/5">
                  <div className="text-white/60">{row.scenario}</div>
                  <div className="text-red-400/80">{row.other}</div>
                  <div className="text-green-400">{row.indrive}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#16213E] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all card-hover"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: feature.color + "20" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div
                    className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3"
                    style={{ backgroundColor: feature.color + "15", color: feature.color }}
                  >
                    {feature.highlight}
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
