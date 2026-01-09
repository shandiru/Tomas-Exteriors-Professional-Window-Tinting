import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0F3D] to-[#060B2E] text-white">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-lime-400" />
              <span className="text-2xl font-bold">Aquafix</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-sm">
              © Aquafix is dedicated to revolutionizing the plumbing service.
              Through innovation and excellence.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-5 mb-10">
              <a href="#" className="hover:text-lime-400 transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                <Twitter />
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                <Linkedin />
              </a>
            </div>

            {/* BUTTON */}
            <a
              href="#"
              className="inline-block bg-lime-400 text-[#0A0F3D] font-semibold px-10 py-4 rounded-full hover:bg-lime-300 transition"
            >
              Buy Template
            </a>
          </div>

          {/* PAGES */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Pages</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Home V2</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* TEMPLATE */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Template</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white">Style Guide</a></li>
              <li><a href="#" className="hover:text-white">Licenses</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">404</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300">
              <li>(62) 1829017</li>
              <li>hello@aquafix.com</li>
              <li>
                2912 Meadowbrook Road,<br />
                Los Angeles, CA 90017
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-300">
        <div>
          © All rights reserved.{" "}
          <a href="#" className="underline hover:text-white">
            Flowfye
          </a>
          . Powered by{" "}
          <a href="#" className="underline hover:text-white">
            Webflow
          </a>
          .
        </div>

        <a href="#" className="underline hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
