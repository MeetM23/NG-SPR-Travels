import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Headphones, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#071527] text-white overflow-hidden py-14 lg:py-24 border-b border-[#142943]">
      {/* Hero Background Image on Right - Seamlessly blended into dark navy */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[58%] z-0 pointer-events-none">
        <Image
          src="/images/hero-car.jpg"
          alt="SPR Travels Luxury Innova Crysta on scenic highway"
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
        {/* Soft gradient blend on the left seam of the image */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#071527] to-transparent hidden lg:block" />
        {/* Mobile overlay for text readability */}
        <div className="absolute inset-0 bg-[#071527]/75 lg:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-[55%] space-y-6">
          
          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12]">
              <span className="text-white block">Reliable. Comfortable.</span>
              <span className="text-[#f1a826] block mt-1">Always With You.</span>
            </h1>
            
            <div className="text-gray-300 text-xs sm:text-sm md:text-base font-medium space-y-0.5 pt-2">
              <p>Corporate Travel • Airport Transfers</p>
              <p>Outstation Packages Across South India</p>
            </div>
          </div>

          {/* 3 Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 items-stretch">
            {/* Badge 1: Safe & Secure */}
            <div className="bg-[#0b1f38]/90 border border-[#1e3c66]/80 rounded-lg p-3 flex items-start gap-2.5 backdrop-blur-md shadow-sm h-full">
              <div className="w-8 h-8 rounded-full bg-[#15345a] flex items-center justify-center flex-shrink-0 text-[#f1a826]">
                <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-white tracking-wide">Safe &amp; Secure</h4>
                <p className="text-[10px] text-gray-300 leading-tight mt-0.5">
                  Verified Drivers <br /> Well Maintained Cars
                </p>
              </div>
            </div>

            {/* Badge 2: On-Time */}
            <div className="bg-[#0b1f38]/90 border border-[#1e3c66]/80 rounded-lg p-3 flex items-start gap-2.5 backdrop-blur-md shadow-sm h-full">
              <div className="w-8 h-8 rounded-full bg-[#15345a] flex items-center justify-center flex-shrink-0 text-[#f1a826]">
                <Clock className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-white tracking-wide">On Time</h4>
                <p className="text-[10px] text-gray-300 leading-tight mt-0.5">
                  Punctual &amp; <br /> Reliable Service
                </p>
              </div>
            </div>

            {/* Badge 3: 24/7 Support */}
            <div className="bg-[#0b1f38]/90 border border-[#1e3c66]/80 rounded-lg p-3 flex items-start gap-2.5 backdrop-blur-md shadow-sm h-full">
              <div className="w-8 h-8 rounded-full bg-[#15345a] flex items-center justify-center flex-shrink-0 text-[#f1a826]">
                <Headphones className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-white tracking-wide">24/7 Support</h4>
                <p className="text-[10px] text-gray-300 leading-tight mt-0.5">
                  We are here for you <br /> Anytime, Anywhere
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <Link
              href="/services"
              className="px-6 py-2.5 bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-bold text-xs rounded-md shadow-md transition-all active:scale-95"
            >
              Explore Services
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20SPR%20Travels,%20I%20would%20like%20to%20book%20a%20ride."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#091b30]/90 hover:bg-[#122c4b] border border-[#234674] text-white font-medium text-xs rounded-md shadow-sm transition-all active:scale-95 group backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" strokeWidth={2} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
