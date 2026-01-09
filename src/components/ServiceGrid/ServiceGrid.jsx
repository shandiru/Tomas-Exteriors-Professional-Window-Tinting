import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Faucet & leak repairs",
    desc:
      "Restore your plumbing fixtures to optimal condition. Our precise and efficient repairs help conserve water and enhance functionality.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a338ece187c197f5f376aa_service-featured-image-1.webp",
    link: "/service/faucet-leak-repairs",
  },
  {
    title: "Remodeling Service",
    desc:
      "We design and install plumbing systems that meet your aesthetic and functional needs, transforming spaces into modern areas.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a339039ffc0931e5a38309_service-featured-image-2.webp",
    link: "/service/remodeling-service",
  },
  {
    title: "Sewer Repair & Cleaning",
    desc:
      "Available 24/7 to handle leaks, burst pipes, and other critical plumbing problems for homes and businesses.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a33917dabb037e8c968c4e_service-featured-image-3.webp",
    link: "/service/sewer-repair-cleaning",
  },
  {
    title: "Drain Cleaning & Repairs",
    desc:
      "Using advanced tools, we remove blockages and buildup to restore proper flow and prevent future issues.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a33925fcf151fa551417b1_service-featured-image-4.webp",
    link: "/service/drain-cleaning-repairs",
  },
  {
    title: "Water Line Repair",
    desc:
      "Ensure reliable water supply with expert water line installation, repair, and maintenance services.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a339331bcd1e4e120e9d0e_service-featured-image-5.webp",
    link: "/service/water-line-repair",
  },
  {
    title: "Gas Line Services",
    desc:
      "Safe and efficient gas line installation and servicing for reliable appliance performance.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a3394017c7a3cc91bfc8da_service-featured-image-6.webp",
    link: "/service/gas-line-services",
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* BLUE HOVER OVERLAY */}
                <div className="absolute inset-0 bg-[#0A3B8E]/0 group-hover:bg-[#0A3B8E]/70 transition-all duration-500"></div>

                {/* HOVER ARROW */}
                <div className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-white text-[#0A3B8E] flex items-center justify-center
                                scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0D1B3F] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
