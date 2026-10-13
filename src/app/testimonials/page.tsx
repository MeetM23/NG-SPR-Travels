import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata = {
  title: "Client Testimonials | SPR Travels Chennai",
  description: "Read reviews and feedback from corporate clients and families who travel with SPR Travels across South India.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#071324] via-[#0b1c34] to-[#0f2442] text-white py-16 text-center border-b border-[#142943]">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-[#e5a83b] uppercase tracking-wider block mb-1">
            07 Testimonials Page
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">What Our Customers Say</h1>
          <p className="text-xs text-[#e5a83b] mt-2 font-medium tracking-wide">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Testimonials
          </p>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto mt-3">
            We value the trust our corporate partners and individual clients place in us every day.
          </p>
        </div>
      </section>

      {/* Complete Testimonials Grid */}
      <TestimonialsSection
        title="Verified Client Feedback"
        subtitle="Genuine reviews from corporate IT managers, airport commuters, and holiday travelers."
        showAll={true}
      />

      {/* CTA Box */}
      <section className="py-14 bg-[#f8fafc] border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#071527]">
            Ready to Experience the SPR Travels Difference?
          </h3>
          <p className="text-xs text-gray-500 mt-2">
            Book your next ride with Chennai&apos;s most reliable travel team today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-bold text-xs rounded-lg shadow transition"
            >
              Get in Touch
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs rounded-lg shadow transition"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
