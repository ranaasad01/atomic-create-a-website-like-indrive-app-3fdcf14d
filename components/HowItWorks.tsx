import Link from "next/link";
import { MapPin, Users, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Post Your Ride",
    description:
      "Enter your pickup location, destination, and propose the fare you think is fair. You are in control from the start.",
    color: "#E94560",
    tags: ["Set pickup & drop-off", "Propose your price", "Choose ride type"],
  },
  {
    number: "02",
    icon: Users,
    title: "Drivers Make Offers",
    description:
      "Nearby verified drivers see your request and respond with their offers. Accept, decline, or negotiate further.",
    color: "#3B82F6",
    tags: ["See driver profiles", "Compare ratings", "Review counter-offers"],
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Choose & Go",
    description:
      "Pick the driver that suits you best by price, rating, or ETA. Confirm and track your ride in real time.",
    color: "#22C55E",
    tags: ["Confirm your driver", "Live GPS tracking", "Safe arrival"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#16213E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 text-[#E94560] text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            How <span className="text-[#E94560]">InDrive</span> Works
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Three simple steps to a fair, negotiated ride. No algorithms setting prices — just you and your driver agreeing on a fair fare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#1A1A2E] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 group card-hover"
              >
                <div className="text-6xl font-black text-white/5 absolute top-4 right-6 select-none">
                  {step.number}
                </div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: step.color + "20", border: "1px solid " + step.color + "30" }}
                >
                  <Icon className="w-7 h-7" style={{ color: step.color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-16 z-10 w-8 h-8 bg-[#16213E] border border-white/10 rounded-full items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white/30" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E94560] hover:bg-[#c73652] text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            Start Your First Ride
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
