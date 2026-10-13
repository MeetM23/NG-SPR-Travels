import React from "react";
import Image from "next/image";
import { Award, UserCheck, Car, IndianRupee, Briefcase, Users, Clock } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: Award,
      title: "10+ Years of Experience",
      desc: "Serving corporates and individuals with excellence.",
    },
    {
      icon: UserCheck,
      title: "Professional Drivers",
      desc: "Verified, experienced & customer-friendly.",
    },
    {
      icon: Car,
      title: "Wide Fleet of Cars",
      desc: "Sedan, SUV, Innova, Tempo Traveller & more.",
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      desc: "Best service at competitive rates.",
    },
  ];

  return (
    <section id="why-choose" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading and 4 Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071527] tracking-tight mb-2">
                Why Choose SPR Travels?
              </h2>
              <div className="w-12 h-1 bg-[#d99824] rounded mb-6" />
            </div>

            <div className="space-y-6">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#071527] text-[#e5a83b] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#071527]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Fleet Showcase + Dark Counter Bar (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-[#f8fafc]">
              
              {/* Fleet Image */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/fleet-cars.jpg"
                  alt="SPR Travels Fleet of White Cars - Innova Crysta, Sedans"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              {/* Dark Navy Counter Strip */}
              <div className="bg-[#071527] text-white p-5 border-t border-[#132c4b]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  
                  {/* Metric 1 */}
                  <div className="flex flex-col items-center justify-center p-2 border-r border-[#15345a] last:border-0 sm:border-r">
                    <div className="flex items-center gap-1.5 text-[#e5a83b] mb-1">
                      <Award className="w-4 h-4" strokeWidth={1.8} />
                      <span className="text-xl font-extrabold tracking-tight">10+</span>
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Years Experience</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col items-center justify-center p-2 border-r border-[#15345a] last:border-0 sm:border-r">
                    <div className="flex items-center gap-1.5 text-[#e5a83b] mb-1">
                      <Briefcase className="w-4 h-4" strokeWidth={1.8} />
                      <span className="text-xl font-extrabold tracking-tight">500+</span>
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Corporate Clients</span>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex flex-col items-center justify-center p-2 border-r border-[#15345a] last:border-0 sm:border-r">
                    <div className="flex items-center gap-1.5 text-[#e5a83b] mb-1">
                      <Users className="w-4 h-4" strokeWidth={1.8} />
                      <span className="text-xl font-extrabold tracking-tight">10000+</span>
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Happy Customers</span>
                  </div>

                  {/* Metric 4 */}
                  <div className="flex flex-col items-center justify-center p-2">
                    <div className="flex items-center gap-1.5 text-[#e5a83b] mb-1">
                      <Clock className="w-4 h-4" strokeWidth={1.8} />
                      <span className="text-xl font-extrabold tracking-tight">24/7</span>
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Support</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
