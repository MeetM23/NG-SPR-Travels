import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#071527] text-gray-300 border-t border-[#142943] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <Logo />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mt-3">
              We provide reliable corporate transport, airport transfers and outstation taxi services across South India.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#11243b] flex items-center justify-center text-gray-300 hover:text-[#e5a83b] hover:bg-[#193556] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#11243b] flex items-center justify-center text-gray-300 hover:text-[#e5a83b] hover:bg-[#193556] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#11243b] flex items-center justify-center text-gray-300 hover:text-[#e5a83b] hover:bg-[#193556] transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link
                  href="/services/corporate-it-transport"
                  className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Corporate IT Transportation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/airport-pickup-drop"
                  className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Airport Pickup &amp; Drop</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/outstation-packages"
                  className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Outstation Packages</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#e5a83b] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#e5a83b] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
                  <span>Local City Travel</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e5a83b] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                <span>No. 123, Anna Salai, Chennai - 600002, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e5a83b] flex-shrink-0" strokeWidth={1.8} />
                <a href="tel:+919876543210" className="hover:text-[#e5a83b] transition-colors font-medium">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e5a83b] flex-shrink-0" strokeWidth={1.8} />
                <a href="mailto:info@sprtravels.com" className="hover:text-[#e5a83b] transition-colors">
                  info@sprtravels.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e5a83b] flex-shrink-0" strokeWidth={1.8} />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#142943] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2024 SPR Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
