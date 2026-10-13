import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Plane, MapPin } from "lucide-react";

export default function ThreeWaysSection() {
  const cards = [
    {
      step: "01",
      badgeBg: "bg-[#0c2340]",
      bulletBg: "bg-[#0c2340]",
      buttonColor: "bg-[#0c2340] hover:bg-[#14325a] text-white",
      buttonText: "Explore Corporate Service →",
      href: "/services/corporate-it-transport",
      image: "/images/service-corporate.jpg",
      icon: Building2,
      title: "Corporate IT Employee Transportation",
      bullets: [
        "Dedicated transport for IT companies",
        "Pickup & Drop across Chennai areas",
        "Safe, comfortable & on-time service",
        "Monthly / Contract basis",
      ],
    },
    {
      step: "02",
      badgeBg: "bg-[#059669]",
      bulletBg: "bg-[#059669]",
      buttonColor: "bg-[#059669] hover:bg-[#047857] text-white",
      buttonText: "Book Airport Transfer →",
      href: "/services/airport-pickup-drop",
      image: "/images/service-airport.jpg",
      icon: Plane,
      title: "Chennai Airport Pickup & Drop",
      bullets: [
        "Pickup from Chennai Airport",
        "Drop to your desired location",
        "Real-time distance & route info",
        "Hassle-free airport transfers",
      ],
    },
    {
      step: "03",
      badgeBg: "bg-[#ea580c]",
      bulletBg: "bg-[#ea580c]",
      buttonColor: "bg-[#ea580c] hover:bg-[#c2410c] text-white",
      buttonText: "Plan Your Trip →",
      href: "/services/outstation-packages",
      image: "/images/service-outstation.jpg",
      icon: MapPin,
      title: "Individual & Outstation Packages",
      bullets: [
        "Customized trips for individuals & families",
        "Pickup & drop anywhere in South India",
        "Calculate distance & plan your trip",
        "Ideal for 1-3 day packages & more",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071527] tracking-tight">
            Three Ways We Make Your Journey Easy
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-8 h-0.5 bg-[#d99824]" />
            <span className="w-2 h-2 rounded-full bg-[#d99824]" />
            <span className="w-8 h-0.5 bg-[#d99824]" />
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.step}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative h-full"
              >
                {/* Number Badge (top-left) */}
                <div
                  className={`absolute top-4 left-4 z-20 w-8 h-8 rounded-full ${card.badgeBg} text-white flex items-center justify-center font-bold text-xs shadow-md`}
                >
                  {card.step}
                </div>

                {/* Card Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating Icon Badge */}
                <div className="relative px-6 -mt-6 z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${card.badgeBg} text-white flex items-center justify-center shadow-md border-2 border-white`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#071527] mb-4 min-h-[3.2rem]">
                      {card.title}
                    </h3>

                    {/* Clean Bullet Points matching reference */}
                    <ul className="space-y-2.5 mb-6 text-xs text-gray-600">
                      {card.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${card.bulletBg}`} />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Link
                    href={card.href}
                    className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs text-center transition-all shadow-sm block ${card.buttonColor}`}
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
