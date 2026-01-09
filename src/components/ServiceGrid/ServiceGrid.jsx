
import React from "react";

const services = [
  {
    title: "Faucet & leak repairs",
    desc:
      "Restore your plumbing fixtures to optimal condition. Our precise and efficient repairs help conserve water and enhance the functionality of your plumbing system.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a338ece187c197f5f376aa_service-featured-image-1.webp",
  },
  {
    title: "Remodeling Service",
    desc:
      "We work closely with you to design and install plumbing systems that meet your aesthetic and functional needs, your spaces into modern, efficient areas.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a339039ffc0931e5a38309_service-featured-image-2.webp",
  },
  {
    title: "Sewer Repair & Cleaning",
    desc:
      "Our team is available 24/7 to tackle leaks, burst pipes, and other critical plumbing problems, ensuring your home or business.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a33917dabb037e8c968c4e_service-featured-image-3.webp",
  },
  {
    title: "Drain Cleaning & Repairs",
    desc:
      "Using advanced tools and techniques, we remove blockages and buildup from your pipes, restoring proper flow and preventing future issues.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a33925fcf151fa551417b1_service-featured-image-4.webp",
  },
  {
    title: "Water Line Repair",
    desc:
      "Our technicians ensure your water heater operates efficiently, providing reliable hot water including installation, repair, and maintenance.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a339331bcd1e4e120e9d0e_service-featured-image-5.webp",
  },
  {
    title: "Gas Line Services",
    desc:
      "We ensure your gas lines are safely and efficiently installed or serviced, offering reliable performance for gas-powered appliances.",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a3394017c7a3cc91bfc8da_service-featured-image-6.webp",
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-white py-44">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-gray-400 mb-2">Home / Service</p>
            <h2 className="text-4xl font-bold text-[#0D1B3F]">
              Our Service
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            We offer experienced technicians quickly identify the source of
            leaks and provide effective solutions to restore your plumbing system.
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
