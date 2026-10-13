"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#071324] via-[#0b1c34] to-[#0f2442] text-white py-14 text-center border-b border-[#142943]">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-[#e5a83b] uppercase tracking-wider block mb-1">
            08 Contact Us Page
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-xs text-[#e5a83b] mt-2 font-medium tracking-wide">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Contact Us
          </p>
        </div>
      </section>

      {/* Main 3-Column Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Col 1: Get In Touch Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-bold text-[#071527] mb-1">Get in Touch</h2>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  We are here to help you. Reach out to us for bookings, enquiries or any assistance.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#071527] text-[#e5a83b] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Phone
                      </span>
                      <a
                        href="tel:+919876543210"
                        className="text-xs sm:text-sm font-bold text-[#071527] hover:text-[#d99824] transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#071527] text-[#e5a83b] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Email
                      </span>
                      <a
                        href="mailto:info@sprtravels.com"
                        className="text-xs sm:text-sm font-medium text-[#071527] hover:text-[#d99824] transition-colors"
                      >
                        info@sprtravels.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#071527] text-[#e5a83b] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Address
                      </span>
                      <p className="text-xs text-gray-700 leading-snug">
                        No. 123, Anna Salai, <br />
                        Chennai - 600002, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#071527] text-[#e5a83b] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        Support
                      </span>
                      <p className="text-xs font-semibold text-[#071527]">
                        24/7 Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Help */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs rounded-lg shadow-sm transition flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Col 2: Send Us a Message Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-bold text-[#071527] mb-1">Send Us a Message</h2>
                <p className="text-xs text-gray-500 mb-5">
                  Fill the form and our team will get back to you shortly.
                </p>

                {submitted ? (
                  <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-xl border border-emerald-200 animate-fadeIn">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h3 className="text-sm font-bold text-emerald-900">Message Sent!</h3>
                    <p className="text-xs text-emerald-700">
                      Thank you! Our customer support desk will reach out to you within an hour.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-form" className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#071527] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#071527] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#071527] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#071527] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#071527] focus:outline-none resize-none"
                      />
                    </div>
                  </form>
                )}
              </div>

              {/* Submit Button aligned with Card 1 & Card 3 footer */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  form="contact-form"
                  className="w-full py-2.5 px-4 bg-[#071527] hover:bg-[#0d223f] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#e5a83b]" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Col 3: Dynamic Interactive Google Map Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-xl font-bold text-[#071527]">City Map</h2>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Interactive location view of our central office in Chennai.
                </p>

                {/* Working Dynamic Map Container */}
                <div className="relative w-full h-[260px] sm:h-[280px] rounded-xl overflow-hidden border border-gray-200 bg-slate-100 shadow-inner">
                  <iframe
                    title="SPR Travels Head Office Google Map"
                    src="https://maps.google.com/maps?q=123+Anna+Salai,+Chennai,+Tamil+Nadu+600002&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Floating Marker Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 shadow-md flex items-center gap-2 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-bold text-[#071527] truncate">SPR Travels HQ</h4>
                      <p className="text-[10px] text-gray-600 truncate">No. 123, Anna Salai, Chennai - 600002</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Direct Directions Link - matches WhatsApp and Send Message height */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=123+Anna+Salai,+Chennai,+Tamil+Nadu+600002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#f8fafc] hover:bg-[#edf2f7] border border-gray-300 text-[#071527] font-semibold text-xs rounded-lg shadow-sm transition flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <MapPin className="w-4 h-4 text-[#d99824]" />
                  <span>Open in Google Maps / Directions</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
