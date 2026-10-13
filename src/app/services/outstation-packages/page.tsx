"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CheckCircle } from "lucide-react";
import DistanceCalculator from "@/components/ui/DistanceCalculator";

export default function OutstationPackagesPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    days: "2",
    passengers: "4",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        days: "2",
        passengers: "4",
        notes: "",
      });
    }, 4000);
  };

  const points = [
    "Customized round trips & one-way drops across Tamil Nadu, Karnataka, Kerala & AP",
    "Pickup & drop anywhere in South India with door-to-door convenience",
    "Transparent pricing with clear driver allowances, tolls, and parking breakdown",
    "Ideal for 1-3 day packages, temple pilgrimages, weekend getaways & family holidays",
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Banner with image as right-side background */}
      <section className="relative bg-[#071527] text-white overflow-hidden py-14 lg:py-20 border-b border-[#142943]">
        {/* Right background image blending into dark navy */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] z-0 pointer-events-none">
          <Image
            src="/images/service-outstation.jpg"
            alt="Outstation Holiday Packages South India"
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
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
              06 Service Page 3
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Individual &amp; Outstation Packages
            </h1>
            <p className="text-xs text-gray-300">
              <Link href="/" className="hover:underline text-gray-400">Home</Link> /{" "}
              <Link href="/services" className="hover:underline text-gray-400">Services</Link> / Outstation Packages
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              Plan customized outstation journeys with our reliable fleet of Sedans, Innova Crysta, and Tempo Travellers. Explore South India in total peace of mind.
            </p>

            <div className="space-y-2.5 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Trip Distance Calculator */}
      <section className="py-10 px-4">
        <DistanceCalculator
          title="Plan Your Trip"
          defaultPickup="Chennai"
          defaultDrop="Pondicherry"
        />

        {/* Send Trip Enquiry Form */}
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071527]">
              Send Trip Enquiry
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Share your trip details and our outstation travel specialist will prepare a customized itinerary
            </p>
          </div>

          {submitted ? (
            <div className="p-6 text-center space-y-2 bg-orange-50 rounded-xl border border-orange-200 animate-fadeIn">
              <CheckCircle className="w-8 h-8 text-[#ea580c] mx-auto" strokeWidth={1.75} />
              <h3 className="text-base font-bold text-orange-900">Trip Enquiry Received!</h3>
              <p className="text-xs text-orange-700">
                We are tailoring the best route options and pricing for your journey.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Journey Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">No. of Days</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={form.days}
                    onChange={(e) => setForm({ ...form, days: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">No. of Passengers</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={form.passengers}
                    onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Additional Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Destination cities, sightseeing spots, preferred car model (Innova Crysta, Sedan, Tempo)..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#ea580c] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs rounded-lg shadow transition"
                >
                  Get Quote
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hello%20SPR%20Travels,%20I%20want%20to%20plan%20an%20outstation%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs rounded-lg shadow transition"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
