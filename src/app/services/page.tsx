import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Plane, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Services | SPR Travels Chennai",
  description: "Explore SPR Travels services: Corporate IT transport, Chennai airport pickup and drop, and outstation holiday tour packages.",
};

export default function ServicesOverviewPage() {
  const services = [
    {
      num: "01",
      title: "Corporate IT Employee Transportation",
      desc: "Dedicated transport solutions for IT companies. Monthly / contract basis with multiple pickup & drop locations across Chennai.",
      image: "/images/service-corporate.jpg",
      href: "/services/corporate-it-transport",
      icon: Building2,
      badgeColor: "bg-[#0c2340]",
    },
    {
      num: "02",
      title: "Chennai Airport Pickup & Drop",
      desc: "Hassle-free airport transfers from Chennai International Airport to anywhere in the city and surrounding districts.",
      image: "/images/service-airport.jpg",
      href: "/services/airport-pickup-drop",
      icon: Plane,
      badgeColor: "bg-[#059669]",
    },
    {
      num: "03",
      title: "Individual & Outstation Packages",
      desc: "Customized outstation trips across South India. Perfect for family trips, vacations, and business travel.",
      image: "/images/service-outstation.jpg",
      href: "/services/outstation-packages",
      icon: MapPin,
      badgeColor: "bg-[#ea580c]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#071324] via-[#0b1c34] to-[#0f2442] text-white py-16 text-center border-b border-[#142943]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Services</h1>
          <p className="text-xs text-[#e5a83b] mt-2 font-medium tracking-wide">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Services
          </p>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mt-4">
            We provide safe, reliable and comfortable travel solutions for every need.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 gap-6 group"
              >
                {/* Left text & icon */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full ${item.badgeColor} text-white flex items-center justify-center text-xs font-bold`}>
                      {item.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#d99824]" strokeWidth={1.8} />
                      <h2 className="text-xl font-bold text-[#071527]">{item.title}</h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-semibold text-xs rounded-lg shadow-sm transition group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={2} />
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-80 h-48 relative rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
