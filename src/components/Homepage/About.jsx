import React from "react";
import { Award, Drill, Settings, UserCheck } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-[#F21B23]" />, // Years of experience
    text: "Years of hands-on experience delivering precision-focused automotive services.",
  },
  {
    icon: <Drill className="w-8 h-8 text-[#F21B23]" />, // Window tinting & headlight repair
    text: "Specialized in window tinting and advanced headlight repair solutions.",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#F21B23]" />, // High-quality materials & techniques
    text: "High-quality materials combined with industry-approved techniques for lasting results.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[#F21B23]" />, // Customer-focused service
    text: "Customer-focused service with careful attention to detail on every job.",
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
              src="about.jpeg"
              alt="About us"
              className="w-full max-w-[580px] rounded-3xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Caption */}
            <span className="block mb-5 text-[#F21B23] font-semibold">
              Who We Are
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              Trusted Vehicle Enhancement Experts
            </h2>

            {/* Description */}
            <p className="text-[#404143] leading-relaxed mb-12 max-w-xl">
              Building customer trust through consistent quality, professional service, and proven expertise in window tinting and headlight solutions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 text-[#43AA8B]">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Call Button */}
            {/* <a
              href="tel:+1578365379"
              className="inline-flex items-center justify-center bg-[#F21B23] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#F21B23] transition"
            >
              Call +(1)578-365-379
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
