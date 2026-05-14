import Link from "next/link";
import { Car, MessageCircle as Twitter, Globe as Facebook, Camera as Instagram, Briefcase as Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Riders: [
    { label: "Book a Ride", href: "/book" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Safety", href: "/safety" },
    { label: "Cities", href: "/cities" },
  ],
  Drivers: [
    { label: "Become a Driver", href: "/driver" },
    { label: "Driver Benefits", href: "/driver#benefits" },
    { label: "Requirements", href: "/driver#requirements" },
    { label: "Driver Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#16213E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#E94560] rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                dat<span className="text-[#E94560]">Ride</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The world&apos;s first negotiation-based ride-hailing platform. Fair prices, verified drivers, and community-first rides in 700+ cities.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E94560]/20 hover:text-[#E94560] text-white/50 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                support@datride.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                +1 (800) 463-7483
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                700+ Cities Worldwide
              </span>
            </div>
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} datRide. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}