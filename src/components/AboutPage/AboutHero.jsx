import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* --- TOP HEADER: Title & Description --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 flex flex-col md:flex-row md:items-end mt-25 justify-between gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight max-w-2xl">
         Quality Automotive Enhancement & Reliable Service
        </h1>
        <p className="text-[#404143] text-sm md:text-base max-w-sm mb-2">
          Experience premium window tinting and professional headlight solutions delivered with precision and care. Our commitment to quality craftsmanship ensures your vehicle looks better, performs safer, and lasts longer.
        </p>
      </div>

      {/* --- IMAGE & BLUE OVERLAP SECTION --- */}
      <div className="relative">
        {/* The Blue Background starts halfway down the image */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#404143]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="a1.jpg"
              alt="Plumbing"
              className="w-full h-[350px] md:h-[550px] object-cover"
            />
          </div>

          {/* --- FLOATING STATS CARD --- */}
          <div 
            className="relative -bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 w-[95%] lg:w-[85%] bg-white rounded-2xl shadow-2xl py-10 px-6 z-20"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-0 md:divide-x divide-gray-100">
              <div className="text-center">
                <h3 className="text-3xl md:text-5xl font-bold text-black">18<span className="text-[#F21B23]">+</span></h3>
                <p className="text-[#404143] text-xs md:text-sm font-medium mt-2">Year Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-5xl font-bold text-black">4.3<span className="text-[#F21B23]">k</span></h3>
                <p className="text-[#404143] text-xs md:text-sm font-medium mt-2">Happy clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-5xl font-bold text-black">25<span className="text-[#F21B23]">+</span></h3>
                <p className="text-[#404143] text-xs md:text-sm font-medium mt-2">Qualified experts</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-5xl font-bold text-black">08<span className="text-[#F21B23]">+</span></h3>
                <p className="text-[#404143] text-xs md:text-sm font-medium mt-2">Award Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;