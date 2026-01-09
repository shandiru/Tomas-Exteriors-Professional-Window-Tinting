import React from "react";
import MarqueeSection from "../Homepage/MarqueeSection";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2000"
          alt="Plumber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
      </div>

      {/* CONTENT + MARQUEE STACK */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center gap-14">
        
        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="text-[48px] md:text-[64px] leading-tight font-extrabold text-white mb-6">
              Top-Notch Plumbing <br />
              & Repair Solutions, <br />
              Quality Work.
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed max-w-xl mb-10">
              We take pride in providing exceptional plumbing services with a focus
              on quality and reliability. From routine maintenance to emergency
              repairs and comprehensive installations, we've got you covered.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#quote"
                className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-10 py-4 rounded-full transition"
              >
                Get A Quote
              </a>

              <a
                href="#services"
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900 font-semibold px-10 py-4 rounded-full transition"
              >
                See All Services
              </a>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <MarqueeSection />
      </div>
    </section>
  );
};

export default HeroSection;
