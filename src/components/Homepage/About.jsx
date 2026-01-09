import React from "react";

const features = [
  {
    icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6777d26eba311c55a8d24b08_homev2-about-icon.webp",
    text: "Over 18 years of experience serving our community with pride.",
  },
  {
    icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6777d3a52b2dde7075dfc0ba_homev2-about-icon-2.webp",
    text: "Offering a wide range of plumbing services for residential need.",
  },
  {
    icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6777d3a6c7bf5e57b986fb3b_homev2-about-icon-3.webp",
    text: "Vivamus eu nunc sodales, porta ligula at fermentum interdum.",
  },
  {
    icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6777d3a5f05594f7a81f4d48_homev2-about-icon-4.webp",
    text: "Fringilla urna sed hendrerit ac eros et ullamcorper proin tempus.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6777cfc468f496952445571d_homev2-about-image.webp"
              alt="About us"
              className="w-full max-w-[580px] rounded-3xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Caption */}
            <span className="block mb-5 text-blue-600 font-semibold">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Trusted Plumbing Experts Since 1996
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-12 max-w-xl">
              Building client trust through consistently exceptional service and a
              proven track record of plumbing challenges with expertise.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <p className="text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Call Button */}
            <a
              href="tel:+1578365379"
              className="inline-flex items-center justify-center bg-blue-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Call +(1)578-365-379
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
