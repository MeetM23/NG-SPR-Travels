import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ThreeWaysSection from "@/components/sections/ThreeWaysSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingEnquirySection from "@/components/sections/BookingEnquirySection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: Three Ways We Make Your Journey Easy */}
      <ThreeWaysSection />

      {/* 03: Why Choose SPR Travels & Fleet Counters */}
      <WhyChooseSection />

      {/* 04: What Our Customers Say Testimonials */}
      <TestimonialsSection
        title="What Our Customers Say"
        subtitle="Trusted by corporate professionals and travelers across South India."
      />

      {/* 05: Booking Form & WhatsApp Card */}
      <BookingEnquirySection />
    </main>
  );
}
