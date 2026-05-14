import Link from "next/link";
import { Shield, Phone, Share2, Eye, Star, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const safetyItems = [
  {
    icon: Phone,
    title: "SOS Emergency Button",
    description: "One tap sends your location and ride details to emergency services and your trusted contacts instantly.",
    color: "#E94560",
  },
  {
    icon: Share2,
    title: "Live Trip Sharing",
    description: "Share your real-time location and trip details with family or friends before and during every ride.",
    color: "#3B82F6",
  },
  {
    icon: Eye,
    title: "Verified Drivers",
    description: "Every driver undergoes background checks, license verification, and vehicle inspection before joining.",
    color: "#22C55E",
  },
  {
    icon: Star,
    title: "Two-Way Ratings",
    description: "Both riders and drivers rate each other after every trip, maintaining high community standards.",
    color: "#F59E0B",
  },
  {
    icon: Lock,
    title: "Encrypted Payments",
    description: "All payment data is encrypted with bank-level security. Your financial information is always protected.",
    color: "#8B5CF6",
  },
  {
    icon: AlertCircle,
    title: "24/7 Support",
    description: "Our safety team is available around the clock to handle any incidents or concerns immediately.",
    color: "#06B6D4",
  },
];

export default function SafetyFeatures() {
  return (
    <section className="bg-[#16213E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Your Safety First
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Built for <span className="text-[#E94560]">Safety</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Every feature we build starts with one question: is this safe? From verified drivers to emergency SOS, your security is our top priority.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#1A1A2E] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all card-hover group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color + "20" }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Safety stats */}
        <div className="mt-16 bg-[#1A1A2E] rounded-3xl p-8 border border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.8%", label: "Safe Rides", icon: CheckCircle, color: "#22C55E" },
              { value: "< 2min", label: "SOS Response", icon: Phone, color: "#E94560" },
              { value: "100%", label: "Drivers Verified", icon: Shield, color: "#3B82F6" },
              { value: "24/7", label: "Safety Support", icon: AlertCircle, color: "#F59E0B" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/safety"
            className="inline-flex items-center gap-2 text-[#E94560] hover:text-white font-semibold transition-colors"
          >
            Learn more about our safety features
            <Shield className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
