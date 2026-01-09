
import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaTools, FaUser } from "react-icons/fa";


const HeroSection = () => {


  const stats = [
    { title: "20+ Years Experience", icon: <FaClock className="h-6 w-6 text-red-500" /> },
    { title: "1000+ Customers", icon: <FaUser className="h-6 w-6 text-red-500" /> },
    { title: "Specified Viezu Dealer", icon: <FaMapMarkerAlt className="h-6 w-6 text-red-500" /> },
    { title: "Bespoke Custom Remapping", icon: <FaTools className="h-6 w-6 text-red-500" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-black" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-black leading-tight text-white mt-10 md:mt-0">
              <span className="text-red-500">Broadway Remapping</span>
            </h1>

            <p className="text-xl text-gray-300">
              Professional ECU Remapping & Vehicle Tuning
            </p>

            <p className="text-lg text-gray-300 max-w-lg">
              Boost performance, improve fuel efficiency, and get expert tuning services across North Wales and the North West.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
              <a
                href="tel:+447392791919"
                className="inline-flex items-center justify-center gap-2 text-sm bg-red-600 text-white shadow h-10 rounded-md px-6 font-semibold transition-all duration-300 hover:bg-red-700"
              >
                <FaPhone className="h-4 w-4" />
                Call Now
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm border border-gray-500 text-gray-200 h-10 rounded-md px-6 font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                View Services
              </a>

              <a
                href="https://viezu.com/dealer?id=eaa32c96f620053cf442ad32258076b9"
                className="inline-flex items-center justify-center gap-2 text-sm border border-gray-500 text-gray-200 h-10 rounded-md px-6 font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                Vehicle Look Up
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-start" data-aos="zoom-in">
              <div className="flex items-start gap-3 p-2 rounded transition hover:bg-red-900/20 hover:shadow-[0_4px_15px_rgba(220,38,38,0.25)]">
                <FaMapMarkerAlt className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-sm text-gray-400">
                    Que Sera, Pentre Hill, Flint, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full" data-aos="fade-left">
            <div className="aspect-video sm:aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(220,38,38,0.4)]">
              <img
                src="/newhero.jpg"
                alt="Dyno Remapping"
                className="object-cover absolute inset-0 h-full w-full"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM STATS BOXES - CENTERED */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-4xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-md p-6 rounded-lg shadow hover:shadow-[0_8px_20px_rgba(220,38,38,0.4)] transition-all duration-300 min-h-[120px]"
              >
                <div className="flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <p className="text-white font-bold text-lg">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
