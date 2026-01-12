import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Window Tinting",
    desc: "High-quality automotive window tinting using premium films to reduce heat, glare, and UV exposure while enhancing comfort and style.",
    link: "/service/window-tinting",
  },
  {
    number: "02",
    title: "Headlight Restoration",
    desc: "Remove oxidation, yellowing, and haze from headlights to restore clarity, brightness, and improved night-time visibility.",
    link: "/service/headlight-restoration",
  },
  {
    number: "03",
    title: "Headlight Crack Repair",
    desc: "Cost-effective solutions for repairing cracked headlights, preventing moisture buildup and further damage.",
    link: "/service/headlight-crack-repair",
  },
  {
    number: "04",
    title: "Headlight Condensation Repair",
    desc: "Eliminate moisture and fog buildup inside headlights, restoring clear illumination and preventing electrical issues.",
    link: "/service/headlight-condensation-repair",
  },
  {
    number: "05",
    title: "Headlight Lens Replacement",
    desc: "Complete lens replacement services for headlights that are beyond restoration, ensuring safety and compliance.",
    link: "/service/headlight-lens-replacement",
  },
  {
    number: "06",
    title: "Exterior Enhancement Services",
    desc: "Professional exterior detailing solutions focused on improving visibility, safety, and the overall aesthetic of your vehicle.",
    link: "/service/exterior-enhancement-services",
  },
];


const ServicesSection = () => {
  return (
    <section className="bg-[#404143] py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header */}
        <span className="block text-[#F21B23] font-semibold mb-4">
          Our Services
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-20">
          Ensuring Premium Vehicle Enhancement Solutions
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group relative bg-white rounded-2xl p-8 text-left flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Number */}
              <div className="w-10 h-10 rounded-full border border-[#F21B23] text-[#F21B23] flex items-center justify-center font-semibold mb-6">
                {service.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#F21B23] mb-4">
                {service.title}
              </h3>

              <p className="text-[#404143] leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              {/* View Service Button */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2   font-semibold group-hover:text-[#F21B23] transition">
                  View Service
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
