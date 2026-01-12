import React from "react";

const stats = [
  { value: "18+", label: "Year Experience" },
  { value: "4.3k", label: "Happy Clients" },
  { value: "25+", label: "Qualified Experts" },
];

const SatisfactionSection = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* LEFT IMAGE */}
        <img
          src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/675d2e311d25b2e8c9c34146_moving-image-6.webp"
          alt=""
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[260px] rounded-2xl shadow-xl"
        />

        {/* RIGHT IMAGES */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-8">
          <img
            src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/675d2ac6f7d3f72d5ccc2773_moving-image.webp"
            alt=""
            className="w-[260px] rounded-2xl shadow-xl"
          />
          <img
            src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/67626f2443ac7f2dae799f5b_customer-satisfaction.webp"
            alt=""
            className="w-[260px] rounded-2xl shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span className="block mb-6 text-blue-600 font-semibold text-sm tracking-wide">
            Welcome to Thomas Exterior
          </span>

          <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-10">
            With years of hands-on industry experience, Thomas Exterior Professional Window Tinting delivers precision-driven services, premium materials, and flawless finishes for every vehicle we work on.
          </h2>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-10">We’re committed to enhancing vehicle aesthetics, improving visibility, and ensuring long-lasting performance through expert craftsmanship and attention to detail.</h2>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row justify-center gap-20">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-extrabold text-blue-700 mb-3">
                  {item.value}
                </div>
                <div className="text-gray-600 text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
