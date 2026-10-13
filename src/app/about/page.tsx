import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, HeartHandshake, Award, MessageCircle } from "lucide-react";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata = {
  title: "About Us | SPR Travels Chennai",
  description: "Learn about SPR Travels, our journey since 2012, core values, and dedication to excellence in corporate and outstation travel.",
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      desc: "Verified drivers, regular vehicle sanitization, GPS tracking, and top vehicle maintenance.",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      desc: "Strict adherence to pick-up schedules ensuring timely airport drops and employee shifts.",
    },
    {
      icon: HeartHandshake,
      title: "Customer Focused",
      desc: "Dedicated travel managers, round-the-clock support, and transparent billing.",
    },
    {
      icon: Award,
      title: "Integrity & Trust",
      desc: "Over 10 years of trusted relationships with corporate tech giants and families.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#071324] via-[#0b1c34] to-[#0f2442] text-white py-16 text-center border-b border-[#142943]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About SPR Travels</h1>
          <p className="text-xs text-[#e5a83b] mt-2 font-medium tracking-wide">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / About Us
          </p>
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#d99824] uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071527] tracking-tight">
                Your Trusted Travel Partner Since 2012
              </h2>
              <div className="w-12 h-1 bg-[#d99824] rounded" />
              
              <p className="text-sm text-gray-600 leading-relaxed">
                SPR Travels is a Chennai-based travel and transportation company providing reliable corporate transportation, airport transfers, and outstation taxi services across South India.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our mission is to deliver safe, comfortable, and punctual travel experiences with professional drivers and well-maintained cars. Whether facilitating daily shifts for IT corporate employees or curating memorable family outstation holidays, our focus on reliability remains unwavering.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 items-stretch">
                <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-3 text-center h-full flex flex-col justify-center">
                  <span className="text-xl font-extrabold text-[#071527] block">10+</span>
                  <span className="text-[11px] text-gray-500">Years Experience</span>
                </div>
                <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-3 text-center h-full flex flex-col justify-center">
                  <span className="text-xl font-extrabold text-[#071527] block">500+</span>
                  <span className="text-[11px] text-gray-500">Corporate Clients</span>
                </div>
                <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-3 text-center h-full flex flex-col justify-center">
                  <span className="text-xl font-extrabold text-[#071527] block">10000+</span>
                  <span className="text-[11px] text-gray-500">Happy Customers</span>
                </div>
                <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-3 text-center h-full flex flex-col justify-center">
                  <span className="text-xl font-extrabold text-[#071527] block">24/7</span>
                  <span className="text-[11px] text-gray-500">Support</span>
                </div>
              </div>
            </div>

            {/* Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80 sm:h-96">
                <Image
                  src="/images/hero-car.jpg"
                  alt="SPR Travels modern fleet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071527]">Our Values</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-8 h-0.5 bg-[#d99824]" />
              <span className="w-2 h-2 rounded-full bg-[#d99824]" />
              <span className="w-8 h-0.5 bg-[#d99824]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center h-full flex flex-col justify-start">
                  <div className="w-11 h-11 rounded-full bg-[#071527] text-[#e5a83b] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-bold text-[#071527] mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <TestimonialsSection />

      {/* Ready to Travel CTA Banner */}
      <section className="py-14 text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to Travel with Us?</h2>
          <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto">
            Book your ride or get a quick quote today!
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-bold text-xs rounded-md shadow transition"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs rounded-md shadow transition"
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
