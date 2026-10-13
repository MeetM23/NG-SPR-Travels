import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Golden Stylized Crest Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#d99824] bg-gradient-to-br from-[#0c2340] to-[#06101e] shadow-md group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7 text-[#e5a83b]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Wings / Leaves Emblem */}
          <path d="M7 23C7 15 15 10 20 10C25 10 33 15 33 23" />
          <path d="M12 25C14 19 18 16 20 16C22 16 26 19 28 25" />
          <path d="M20 10V29" strokeWidth="2.5" />
          <circle cx="20" cy="29" r="2.5" fill="#e5a83b" />
          <path d="M10 28Q20 34 30 28" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-wider text-[#e5a83b] uppercase leading-none font-sans drop-shadow-sm">
          SPR TRAVELS
        </span>
        <span className="text-[10px] tracking-widest text-[#f3d085] uppercase font-medium mt-1">
          Your Journey, Our Priority
        </span>
      </div>
    </Link>
  );
}
