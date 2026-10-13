import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Headphones, MessageCircle, Star, Check, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#071527] text-white overflow-hidden border-b border-[#142943]">
      
      {/* ========================================================= */}
      {/* MOBILE UNIQUE HERO (Matches user reference design)        */}
      {/* ========================================================= */}
      <div className="block lg:hidden pt-8 pb-10 px-5 relative z-10">
        {/* Top Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f1a826]" />
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            Chennai Chauffeur Service
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-0.5 mb-3">
          <h1 className="text-[38px] font-extrabold tracking-tight leading-[1.08] text-white">
            <span className="block">Reliable.</span>
            <span className="block">Comfortable.</span>
            <span className="block text-[#f1a826]">Always with you.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[13px] text-gray-300 font-normal leading-snug mb-3">
          Corporate travel. Airport transfers.<br />
          Outstation escapes. All taken care of.
        </p>

        {/* Rating line */}
        <div className="flex items-center gap-1.5 text-xs text-white mb-2">
          <Star className="w-3.5 h-3.5 text-[#f1a826] fill-[#f1a826]" />
          <span className="font-bold">4.9</span>
          <span className="text-gray-400">/ 5</span>
          <span className="text-gray-500 mx-0.5">•</span>
          <span className="text-gray-400 text-[11px]">10,000+ happy journeys</span>
        </div>

        {/* Car Image (Seamlessly integrated into dark navy background) */}
        <div className="relative -mx-5 h-64 sm:h-72 my-1 overflow-hidden">
          <Image
            src="/images/hero-car.jpg"
            alt="Toyota Innova Crysta - SPR Travels"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Top fade into navy text area */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#071527] to-transparent pointer-events-none" />
          
          {/* Bottom fade into navy features & buttons area */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071527] via-[#071527]/75 to-transparent pointer-events-none" />

          {/* Left badge overlay on car */}
          <div className="absolute bottom-4 left-5 border-l-2 border-[#f1a826] pl-2 z-10">
            <p className="text-[11px] font-bold text-white leading-tight">
              Comfort, wherever you go.
            </p>
            <p className="text-[10px] text-gray-300 leading-tight">
              Innova Crysta &amp; sedans
            </p>
          </div>

          {/* Right badge overlay on car */}
          <div className="absolute bottom-4 right-5 flex items-center gap-1 z-10">
            <Check className="w-3.5 h-3.5 text-[#f1a826]" strokeWidth={2.5} />
            <span className="text-[10px] text-gray-300 font-medium">Sanitized fleet</span>
          </div>
        </div>

        {/* Micro-Features Strip */}
        <div className="flex items-center justify-between text-[11px] text-gray-300 px-1 py-3 mb-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f1a826]" strokeWidth={1.8} />
            <span>Safe drivers</span>
          </div>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#f1a826]" strokeWidth={1.8} />
            <span>Always on time</span>
          </div>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-[#f1a826]" strokeWidth={1.8} />
            <span>24/7 support</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/services"
            className="py-3 px-3 bg-[#f1a826] hover:bg-[#e0981e] text-[#071527] font-bold text-xs rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>Explore services</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#071527]" strokeWidth={2.2} />
          </Link>
          <a
            href="https://wa.me/919876543210?text=Hi%20SPR%20Travels,%20I%20would%20like%20to%20book%20a%20ride."
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-3 bg-[#0a1b2e] hover:bg-[#102742] border border-[#1e3c66] text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25d366]" strokeWidth={2} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP HERO (Preserved exactly for lg screens and above) */}
      {/* ========================================================= */}
      <div className="hidden lg:block relative py-24">
        {/* Hero Background Image on Right - Seamlessly blended into dark navy */}
        <div className="absolute top-0 right-0 bottom-0 w-[58%] z-0 pointer-events-none">
          <Image
            src="/images/hero-car.jpg"
            alt="SPR Travels Luxury Innova Crysta on scenic highway"
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
          {/* Soft gradient blend on the left seam of the image */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#071527] to-transparent" />
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
      </div>
    </section>
  );
}
