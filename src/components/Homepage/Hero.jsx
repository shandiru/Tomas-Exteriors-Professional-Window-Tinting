import React from "react";
import MarqueeSection from "../Homepage/MarqueeSection";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          //src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2000"
          alt="Plumber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#404143]"></div>
      </div>

      {/* CONTENT + MARQUEE STACK */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center gap-14">
        
        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="text-[48px] md:text-[64px] leading-tight font-extrabold text-white mb-6">
              Premium Window Tinting & Headlight Solutions
              
            </h1>

            <p className="text-[48px] leading-tight font-extrabold text-white mb-6">Precision Work. Professional Finish.</p>

            <p className="text-gray-200 text-lg leading-relaxed max-w-xl mb-10">    
               At Thomas Exterior, we specialize in high-quality window tinting and professional headlight services that enhance both the look and safety of your vehicle. From expert tint installations to advanced headlight repairs and restorations, we deliver reliable results you can trust.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#quote"
                className="bg-[#F21B23] hover:bg-[#404143] text-black font-semibold px-10 py-4 rounded-full transition"
              >
                 Chat with Us on WhatsApp
              </a>

              {/* <a
                href="#services"
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900 font-semibold px-10 py-4 rounded-full transition"
              >
                See All Services
              </a> */}
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        {/* <MarqueeSection /> */}
      </div>
    </section>
  );
};

export default HeroSection;
