import React from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#404143] text-white">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND */}
          <div className="flex flex-col flex-1">
            <span className="text-2xl font-bold mb-4">
              Tomas Exteriors Professional Window Tinting
            </span>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
              Tomas Exteriors is dedicated to enhancing vehicles and properties with premium window tinting solutions, delivering superior quality, style, and lasting protection for every customer.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-auto">
              <a href="https://www.instagram.com/window_tint911/" className="hover:text-pink-500 transition text-2xl">
                <Instagram />
              </a>
              <a href="https://web.facebook.com/windowtint911?_rdc=1&_rdr#" className="hover:text-blue-500 transition text-2xl">
                <Facebook />
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div className="flex flex-col flex-1 md:items-center">
            <h4 className="text-lg font-semibold mb-6">Pages</h4>
            <ul className="space-y-4 text-gray-300 md:text-center">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/service" className="hover:text-white transition">Service</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* OPENING HOURS - NEW SECTION */}
          <div className="flex flex-col flex-1 md:items-center">
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300 md:text-center text-sm">
              <li>Mon - Thu: 9 AM – 10 PM</li>
              <li>Friday: 9 AM – 10 PM</li>
              <li>Saturday: 9 AM – 6 PM</li>
              <li>Sunday: 9 AM – 6 PM</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col flex-1 md:items-end items-start">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300 md:text-right">
              <li>(62) 1829017</li>
              <li>thomasexteriors@gmail.com</li>
              <li>
                Unit 16 Croft St, Bury<br />
                BL9 7BG, United Kingdom
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Tomas Exteriors Professional Window Tinting. All rights reserved.
        </div>

        <div>Powered by <a href="https://www.ansely.co.uk/" className="hover:underline hover:text-[#F21B23]">Ansely</a></div>

        <div className="flex gap-6">
          <a href="/privacy-policy" className="underline hover:text-white transition">Privacy Policy</a>
          <a href="/terms-conditions" className="underline hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;