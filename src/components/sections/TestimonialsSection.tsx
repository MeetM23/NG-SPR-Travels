import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
}

export default function TestimonialsSection({
  title = "What Our Customers Say",
  subtitle = "We value the trust our customers place in us.",
  showAll = false,
}: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "IT Lead, CTS Chennai",
      avatar: "/images/avatar-1.jpg",
      rating: 5,
      content:
        "Very professional service and well maintained cars. Our daily employee transport is smooth and hassle-free. The drivers are polite, punctual, and well trained.",
    },
    {
      name: "Ramesh Kumar",
      role: "IT Manager, OMR Tech Park",
      avatar: "/images/avatar-2.jpg",
      rating: 5,
      content:
        "SPR Travels has been our trusted transport partner for over 5 years. Their service is punctual and professional. We manage 100+ daily employee shifts effortlessly.",
    },
    {
      name: "Karthik R.",
      role: "Business Traveler",
      avatar: "/images/avatar-1.jpg",
      rating: 5,
      content:
        "Excellent airport transfer experience. Driver was on time, car was pristine, and hassle-free booking process. Perfect for early morning flight arrivals.",
    },
    {
      name: "Sridha M.",
      role: "HR Director",
      avatar: "/images/avatar-1.jpg",
      rating: 5,
      content:
        "Very good service for our office employees. Drivers are polite and vehicles are well maintained. Billing and monthly reporting are completely transparent.",
    },
    {
      name: "Arun Balaji",
      role: "Chennai Resident",
      avatar: "/images/avatar-2.jpg",
      rating: 5,
      content:
        "We booked an outstation trip to Ooty and Coorg. Great experience with safe driving and comfortable cars. Ideal for family vacation road trips.",
    },
    {
      name: "Nandhini R.",
      role: "Corporate Executive",
      avatar: "/images/avatar-1.jpg",
      rating: 5,
      content:
        "Used their airport pickup service multiple times. Always reliable and highly recommended. Smooth communication over WhatsApp with timely live tracking.",
    },
  ];

  const displayedList = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071527] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1.5">{subtitle}</p>
          )}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-8 h-0.5 bg-[#d99824]" />
            <span className="w-2 h-2 rounded-full bg-[#d99824]" />
            <span className="w-8 h-0.5 bg-[#d99824]" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group h-full"
            >
              <div className="flex-1 flex flex-col justify-start">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#f59e0b] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" strokeWidth={1.5} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200/80">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#071527]">{item.name}</h4>
                  <p className="text-[11px] text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
