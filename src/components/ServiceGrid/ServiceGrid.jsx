
import { ArrowRight } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Window Tinting",
    desc:
      "Enhance your vehicle’s style, comfort, and privacy with our professional window tinting services. We use premium films to reduce heat, block UV rays, and prevent interior fading while giving your car a sleek, modern look.",
    image:
      "https://your-cdn.com/images/window-tinting.webp",
  },
  {
    title: "Headlight Restoration",
    desc:
      "Bring clarity back to your headlights with our advanced restoration services. We remove oxidation, yellowing, and scratches to improve nighttime visibility and restore headlights to near-new condition.",
    image:
      "https://your-cdn.com/images/headlight-restoration.webp",
  },
  {
    title: "Headlight Crack Repair",
    desc:
      "Avoid unnecessary replacements with our expert headlight crack repair services. We fix cracks to prevent moisture ingress, stop further damage, and extend headlight lifespan.",
    image:
      "https://your-cdn.com/images/headlight-crack-repair.webp",
  },
  {
    title: "Headlight Condensation Repair",
    desc:
      "Moisture inside headlights can reduce visibility and damage electrical components. Our condensation repair services restore clarity and prevent future fogging for safer driving.",
    image:
      "https://your-cdn.com/images/headlight-condensation-repair.webp",
  },
  {
    title: "Headlight Lens Replacement",
    desc:
      "When restoration isn’t enough, we provide professional headlight lens replacement services. Our high-quality replacements ensure optimal light output, improved safety, and a refreshed vehicle appearance.",
    image:
      "https://your-cdn.com/images/headlight-lens-replacement.webp",
  },
  {
    title: "Exterior Enhancement Services",
    desc:
      "From window tinting to headlight maintenance, our exterior vehicle services enhance aesthetics, safety, and functionality. Every project is completed with precision, care, and premium materials.",
    image:
      "https://your-cdn.com/images/exterior-enhancement.webp",
  },
];


const ServiceGrid = () => {
  return (
    <section className="bg-white mt-20 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-gray-400 mb-2">Home / Service</p>
            <h2 className="text-4xl font-bold text-[#0D1B3F]">
              Our Service Overview
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            At Thomas Exterior, we offer professional automotive services designed to enhance your vehicle’s aesthetics, safety, and performance. Our experienced technicians provide precise solutions for window tinting and headlight maintenance, ensuring long-lasting results and customer satisfaction.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block bg-[#F6F7FB] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative overflow-hidden rounded-xl m-5">
                
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[230px]
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* BLUE OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-[#0A3B8E]/0
                    group-hover:bg-[#0A3B8E]/70
                    transition-all
                    duration-500
                  "
                />

                {/* FLOATING BUTTON */}
                <div
                  className="
                    absolute
                    left-6
                    bottom-6
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    scale-0
                    translate-x-[-10px]
                    group-hover:scale-100
                    group-hover:translate-x-0
                    transition-all
                    duration-500
                    ease-out
                  "
                >
                  <img
                    src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/677a33436e1febb44726de55_work-portfolio-icon.webp"
                    alt="View Service"
                    className="w-6 h-6"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-6">
                <h3 className="text-lg font-semibold text-[#0D1B3F] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    font-semibold
                    text-[#0A3B8E]
                    hover:text-white
                    bg-white
                    hover:bg-[#0A3B8E]
                    px-4
                    py-2
                    rounded-full
                    transition
                    duration-300
                    w-fit
                  "
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
