import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RideNego — Negotiate Your Ride Price",
    template: "%s | RideNego",
  },
  description:
    "RideNego is a negotiation-based ride-hailing app. Set your own price, choose your driver, and ride fair. Available in 700+ cities worldwide.",
  keywords: ["ride hailing", "taxi app", "negotiate fare", "ridenego", "ride sharing"],
  openGraph: {
    title: "RideNego — Negotiate Your Ride Price",
    description: "Set your own price, choose your driver, and ride fair.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#1A1A2E] text-white font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}