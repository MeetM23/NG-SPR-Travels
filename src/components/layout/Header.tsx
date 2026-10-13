"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services",
      hasDropdown: true,
      subItems: [
        { name: "Corporate IT Employee Transportation", href: "/services/corporate-it-transport" },
        { name: "Chennai Airport Pickup & Drop", href: "/services/airport-pickup-drop" },
        { name: "Individual & Outstation Packages", href: "/services/outstation-packages" },
      ],
    },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071527] border-b border-[#142943] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href) && !link.href.includes("#"));

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative flex items-center gap-0.5" ref={dropdownRef}>
                    <Link
                      href={link.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-[#e5a83b] ${
                        isActive ? "text-[#e5a83b] border-b-2 border-[#e5a83b] pb-0.5" : "text-gray-200"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                      aria-label="Toggle services dropdown"
                      className={`p-1 text-gray-300 hover:text-[#e5a83b] transition-colors cursor-pointer focus:outline-none ${
                        servicesDropdownOpen ? "text-[#e5a83b]" : ""
                      }`}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#e5a83b]" : ""
                        }`}
                      />
                    </button>

                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 w-72 bg-[#0c2340] border border-[#1e3a5f] rounded-lg shadow-2xl py-2 z-50 animate-fadeIn">
                        {link.subItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block px-4 py-2.5 text-xs text-gray-200 hover:bg-[#15345a] hover:text-[#e5a83b] transition-colors border-b border-[#142943]/40 last:border-0"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setServicesDropdownOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[#e5a83b] ${
                    isActive ? "text-[#e5a83b] border-b-2 border-[#e5a83b] pb-0.5" : "text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#d99824] bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-semibold text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" strokeWidth={1.8} />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#12243b] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c2340] border-b border-[#1e3a5f] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <div>
                  <div className="w-full flex items-center justify-between py-2 text-base font-medium text-gray-200">
                    <Link
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                      className="hover:text-[#e5a83b] flex-1 text-left"
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                      className="p-1.5 text-gray-300 hover:text-[#e5a83b] cursor-pointer"
                      aria-label="Toggle services menu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          servicesDropdownOpen ? "rotate-180 text-[#e5a83b]" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {servicesDropdownOpen && (
                    <div className="pl-4 space-y-1 my-1 border-l border-[#1e3a5f]">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                          className="block py-1.5 text-sm text-gray-300 hover:text-[#e5a83b]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-200 hover:text-[#e5a83b]"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#d99824] hover:bg-[#e5a83b] text-[#071527] font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4" strokeWidth={1.8} />
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
