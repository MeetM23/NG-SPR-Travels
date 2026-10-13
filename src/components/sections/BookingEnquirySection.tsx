"use client";

import React, { useState } from "react";
import { Send, MessageCircle, Phone, MapPin, Navigation, ChevronDown, CheckCircle } from "lucide-react";

export default function BookingEnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Corporate IT Transportation",
    pickupLocation: "",
    dropLocation: "",
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
        serviceType: "Corporate IT Transportation",
        pickupLocation: "",
        dropLocation: "",
      });
    }, 4000);
  };

  return (
    <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071527] tracking-tight">
            Book Your Ride or Get a Quick Quote
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Fill in your details below and our team will get in touch immediately
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-8 h-0.5 bg-[#d99824]" />
            <span className="w-2 h-2 rounded-full bg-[#d99824]" />
            <span className="w-8 h-0.5 bg-[#d99824]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Enquiry Form Box (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-center h-full">
            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200 animate-fadeIn my-auto">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" strokeWidth={1.75} />
                <h3 className="text-lg font-bold text-emerald-900">Enquiry Submitted Successfully!</h3>
                <p className="text-xs text-emerald-700">
                  Thank you, our reservation team is reviewing your travel requirements and will call you within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 my-auto w-full">
                {/* Top Row: Name, Phone, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d99824] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d99824] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d99824] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Bottom Row: Service Type, Pickup Location, Drop Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Service Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#d99824] focus:border-transparent transition pr-8"
                      >
                        <option value="Corporate IT Transportation">Corporate IT Transportation</option>
                        <option value="Chennai Airport Pickup & Drop">Chennai Airport Pickup & Drop</option>
                        <option value="Individual & Outstation Packages">Individual & Outstation Packages</option>
                        <option value="Local City Travel">Local City Travel</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-3 pointer-events-none" strokeWidth={1.8} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter Pickup Location"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className="w-full px-3.5 py-2.5 pl-9 rounded-lg border border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d99824] focus:border-transparent transition"
                      />
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" strokeWidth={1.8} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Drop / Destination
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter Destination"
                        value={formData.dropLocation}
                        onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                        className="w-full px-3.5 py-2.5 pl-9 rounded-lg border border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d99824] focus:border-transparent transition"
                      />
                      <Navigation className="w-4 h-4 text-gray-400 absolute left-3 top-3" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" strokeWidth={1.8} />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Need Immediate Assistance Box (4 cols) */}
          <div className="lg:col-span-4 bg-[#fef9ee] border border-[#fde68a] rounded-2xl p-6 sm:p-8 shadow-sm text-center flex flex-col items-center justify-between h-full space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#d99824]/20 text-[#d99824] flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6 text-[#b45309]" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-[#071527] tracking-tight">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                Chat with our 24/7 reservation team on WhatsApp or call us directly for instant trip booking and spot quotes.
              </p>
            </div>

            <div className="w-full space-y-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210?text=Hi%20SPR%20Travels,%20I%20need%20immediate%20cab%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-white" strokeWidth={2} />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+919876543210"
                className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 border border-gray-200 text-[#071527] hover:text-[#d99824] font-bold text-xs rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d99824]" strokeWidth={2} />
                <span>Call +91 98765 43210</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
