import React from "react";

const stats = [
  { value: "20", label: "Year Experience" },
  { value: "10k", label: "Happy Clients" },
  { value: "1", label: "Man Band" },
];

const SatisfactionSection = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT IMAGE - Hidden on mobile, visible on LG */}
          <div className="hidden lg:block lg:col-span-3">
            <img
              src="ambient1.jpeg"
              alt="Window Tinting Expert"
              className="w-full rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="lg:col-span-6 text-center z-10">
            <span className="inline-block mb-6 text-[#F21B23] font-bold text-sm tracking-[0.2em] uppercase border-b-2 border-[#F21B23]/20 pb-2">
              Welcome to Tomas Exterior
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-8">
              With a reputation built on quality and precision, Tomas Exterior delivers professional window tinting and headlight services with a flawless finish.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              We take pride in our OCD-driven workmanship, ensuring every tint line, edge, and final detail is completed top-top with no shortcuts.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-black text-[#F21B23] mb-2">
                    {item.value}
                  </span>
                  <span className="text-[#404143] font-medium uppercase text-xs tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES - Hidden on mobile, visible on LG */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6">
            <img
              src="about.jpeg"
              alt="Car Tinting"
              className="w-full rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <img
              src="tint-a.jpeg"
              alt="Satisfied Customer"
              className="w-full rounded-2xl shadow-xl translate-x-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SatisfactionSection;