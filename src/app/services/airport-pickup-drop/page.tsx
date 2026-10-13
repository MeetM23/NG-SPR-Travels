"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CheckCircle } from "lucide-react";
import DistanceCalculator from "@/components/ui/DistanceCalculator";

export default function AirportPickupDropPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    flightNumber: "",
    date: "",
    time: "",
    notes: "",
  });
  const [booked, setBooked] = useState(false);

  const handleAirportBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        flightNumber: "",
        date: "",
        time: "",
        notes: "",
      });
    }, 4000);
  };

  const points = [
    "Pickup from Chennai International Airport (MAA) Terminal 1, 2 & 4",
    "Drop to your desired location anywhere in Chennai and outstation cities",
    "Real-time flight delay tracking & complimentary waiting time",
    "On-time & hassle-free airport transfers with clean AC vehicles",
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Banner with image as right-side background */}
      <section className="relative bg-[#071527] text-white overflow-hidden py-14 lg:py-20 border-b border-[#142943]">
        {/* Right background image blending into dark navy */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] z-0 pointer-events-none">
          <Image
            src="/images/service-airport.jpg"
            alt="Chennai International Airport Taxi"
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
            <span className="text-xs font-bold text-[#10b981] uppercase tracking-wider">
              05 Service Page 2
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Chennai Airport Pickup &amp; Drop
            </h1>
            <p className="text-xs text-gray-300">
              <Link href="/" className="hover:underline text-gray-400">Home</Link> /{" "}
              <Link href="/services" className="hover:underline text-gray-400">Services</Link> / Airport Transfer
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              Book your airport transfer in advance for a smooth and comfortable journey. Zero cancellation surge, professional chauffeurs awaiting your arrival.
            </p>

            <div className="space-y-2.5 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distance Calculator */}
      <section className="py-10 px-4">
        <DistanceCalculator
          title="Check Distance &amp; Book Your Ride"
          defaultPickup="Chennai International Airport (MAA)"
          defaultDrop="T Nagar, Chennai"
        />

        {/* Airport Booking Form */}
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071527]">
              Book Your Airport Transfer
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Provide your flight details and we will ensure your car is waiting at the terminal
            </p>
          </div>

          {booked ? (
            <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-xl border border-emerald-200 animate-fadeIn">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" strokeWidth={1.75} />
              <h3 className="text-base font-bold text-emerald-900">Airport Transfer Reserved!</h3>
              <p className="text-xs text-emerald-700">
                Driver and vehicle details will be shared on WhatsApp prior to landing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAirportBooking} className="space-y-4" suppressHydrationWarning>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="airport-name" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Your Name</label>
                  <input
                    id="airport-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="airport-phone" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Phone Number</label>
                  <input
                    id="airport-phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="airport-email" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Email Address</label>
                  <input
                    id="airport-email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="airport-flight" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Flight Number (Optional)</label>
                  <input
                    id="airport-flight"
                    type="text"
                    placeholder="e.g. 6E 425 / AI 540"
                    value={form.flightNumber}
                    onChange={(e) => setForm({ ...form, flightNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="airport-date" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Journey Date</label>
                  <input
                    id="airport-date"
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="airport-time" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Journey Time</label>
                  <input
                    id="airport-time"
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div>
                <label htmlFor="airport-notes" className="block text-xs font-semibold text-gray-700 mb-1" suppressHydrationWarning>Additional Notes (Optional)</label>
                <textarea
                  id="airport-notes"
                  rows={2}
                  placeholder="Drop location details, number of bags, infant seat, etc."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#059669] focus:outline-none"
                  suppressHydrationWarning
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs rounded-lg shadow transition"
                >
                  Book Airport Transfer
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hello%20SPR%20Travels,%20I%20want%20to%20book%20a%20Chennai%20Airport%20cab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#071527] hover:bg-[#0f2442] text-[#e5a83b] font-semibold text-xs rounded-lg shadow transition"
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
