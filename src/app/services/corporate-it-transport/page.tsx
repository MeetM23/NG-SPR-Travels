import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import DistanceCalculator from "@/components/ui/DistanceCalculator";

export const metadata = {
  title: "Corporate IT Employee Transportation | SPR Travels Chennai",
  description: "Dedicated daily employee transport solutions for IT companies in Chennai. Safe, comfortable, punctual monthly contract service.",
};

export default function CorporateTransportPage() {
  const points = [
    "Monthly / Contract basis customized for shift requirements",
    "Multiple pickup & drop locations across Chennai areas",
    "Safe, comfortable & on-time service with verified chauffeurs",
    "Well maintained fleet of Sedans, SUVs, Innova Crysta & Tempo Travellers",
    "Real-time GPS tracking and dedicated emergency support desk",
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Banner with image as right-side background */}
      <section className="relative bg-[#071527] text-white overflow-hidden py-14 lg:py-20 border-b border-[#142943]">
        {/* Right background image blending into dark navy */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] z-0 pointer-events-none">
          <Image
            src="/images/service-corporate.jpg"
            alt="Corporate IT Transportation in Chennai"
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#071527] to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-[#071527]/75 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl lg:max-w-[55%] space-y-4">
            <span className="text-xs font-bold text-[#e5a83b] uppercase tracking-wider">
              04 Service Page 1
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Corporate IT Employee Transportation
            </h1>
            <p className="text-xs text-gray-300">
              <Link href="/" className="hover:underline text-gray-400">Home</Link> /{" "}
              <Link href="/services" className="hover:underline text-gray-400">Services</Link> / Corporate Transportation
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              Reliable and punctual employee transport services for IT companies across Chennai, covering OMR, Porur, Guindy, Siruseri, and Ambattur IT corridors.
            </p>

            <div className="space-y-2.5 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5a83b] mt-1.5 flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Check Pickup & Drop Distance Widget */}
      <section className="py-12 px-4">
        <DistanceCalculator
          title="Check Pickup & Drop Distance"
          defaultPickup="OMR Tech Park"
          defaultDrop="Guindy"
        />

        {/* CTA Quote Container */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#071527] mb-2">
            Interested in our Corporate Transport Service?
          </h2>
          <p className="text-xs text-gray-500 max-w-md mx-auto mb-6">
            Get a customized quote for your company today. We support day and night employee shifts with 100% compliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hello%20SPR%20Travels,%20we%20need%20a%20corporate%20employee%20transport%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-bold text-xs rounded-lg shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              <span>Enquire on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0c2340] hover:bg-[#14325a] text-white font-semibold text-xs rounded-lg shadow-sm transition"
            >
              <Mail className="w-4 h-4" strokeWidth={1.8} />
              <span>Send Email Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
