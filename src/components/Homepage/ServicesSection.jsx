import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Faucet & leak repairs",
    desc: "Restore your plumbing fixtures to optimal condition. Our precise and efficient repairs help conserve water and enhance system performance.",
    link: "/service/faucet-leak-repairs",
  },
  {
    number: "02",
    title: "Remodeling Service",
    desc: "We design and install plumbing systems that meet your aesthetic and functional needs, transforming spaces into modern areas.",
    link: "/service/remodeling-service",
  },
  {
    number: "03",
    title: "Sewer Repair & Cleaning",
    desc: "Available 24/7 to tackle leaks, burst pipes, and other critical plumbing problems for home or business.",
    link: "/service/sewer-repair-cleaning",
  },
  {
    number: "04",
    title: "Drain Cleaning & Repairs",
    desc: "Using advanced tools, we remove blockages and buildup from your pipes, restoring proper flow.",
    link: "/service/drain-cleaning-repairs",
  },
  {
    number: "05",
    title: "Water Line Repair",
    desc: "Ensure your water systems operate efficiently with expert installation, repair, and maintenance services.",
    link: "/service/water-line-repair",
  },
  {
    number: "06",
    title: "Gas Line Services",
    desc: "Safe and efficient gas line installation and servicing for reliable appliance performance.",
    link: "/service/gas-line-services",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#043B8D] py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header */}
        <span className="block text-lime-400 font-semibold mb-4">
          Our Services
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-20">
          Ensuring Reliable Plumbing <br /> Solutions
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group relative bg-white rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Number */}
              <div className="w-10 h-10 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center font-semibold mb-6">
                {service.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Icon */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Button */}
        <a
          href="/service"
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-lime-400 text-lime-400 rounded-full font-semibold hover:bg-lime-400 hover:text-[#043B8D] transition"
        >
          See All Services
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
