import React from "react";
import { Droplet } from "lucide-react";

const MarqueeSection = () => {
  const services = [
    "Drain cleaning & repairs",
    "Sewer repair & cleaning",
    "Faucet & leak repairs",
    "Remodeling service",
  ];

  return (
    <div className="w-full z-20 overflow-hidden">
      <div className="bg-lime-400 py-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-20 px-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Droplet className="w-8 h-8 text-[#F21B23] fill-[#F21B23]" />
                  <span className="text-2xl font-bold text-gray-900">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeSection;
