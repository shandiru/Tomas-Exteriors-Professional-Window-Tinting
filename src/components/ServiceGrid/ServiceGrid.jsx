
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Window Tinting",
    desc:
      "Enhance your vehicle’s style, comfort, and privacy with our professional window tinting services. We use premium films to reduce heat, block UV rays, and prevent interior fading while giving your car a sleek, modern look.",
    image:
      "a1.jpg",
    link: "/Window-Tinting"
  },
  {
    title: "Headlight Restoration",
    desc:
      "Bring clarity back to your headlights with our advanced restoration services. We remove oxidation, yellowing, and scratches to improve nighttime visibility and restore headlights to near-new condition.",
    image:
      "a2.jpg",
    link: "/Headlight"
  },
  {
    title: "Headlight Crack Repair",
    desc:
      "Avoid unnecessary replacements with our expert headlight crack repair services. We fix cracks to prevent moisture ingress, stop further damage, and extend headlight lifespan.",
    image:
      "s4.jpg",
    link: "/Headlight"
  },
  {
    title: "Headlight Condensation Repair",
    desc:
      "Moisture inside headlights can reduce visibility and damage electrical components. Our condensation repair services restore clarity and prevent future fogging for safer driving.",
    image:
      "a4.jpg",
    link: "/Headlight"
  },
  {
    title: "Headlight Lens Replacement",
    desc:
      "When restoration isn’t enough, we provide professional headlight lens replacement services. Our high-quality replacements ensure optimal light output, improved safety, and a refreshed vehicle appearance.",
    image:
      "s3.jpg",
    link: "/Headlight"
  },
  {
    title: "Exterior Enhancement Services",
    desc:
      "From window tinting to headlight maintenance, our exterior vehicle services enhance aesthetics, safety, and functionality. Every project is completed with precision, care, and premium materials.",
    image:
      "a3.jpg",
    link: "/Headlight"
  },
  {
    title: "Building Window Tinting",
    desc: "Home, Office & Bespoke Privacy Tinting. Upgrade comfort, privacy, and heat protection with professional building window tinting for homes, offices, terraces, and custom spaces. Reduce glare, block UV rays, and create a clean modern finish without losing natural light.",
    image: "a1.jpg", // Replace with your image filename
    link: "/Building-Window-Tinting"
  },
  {
    title: "Intelligent Ambient Light Installation",
    desc: "Modern Lighting for Comfort & Style. Transform your vehicle or space with intelligent ambient lighting. We install clean, safe, and professionally wired lighting solutions that improve visibility, enhance mood, and add a premium look with custom colours and settings.",
    image: "a4.jpg", // Replace with your image filename
    link: "/Intelligent-Ambient-Light-Installation"
  },
  {
    title: "Interior Trims Restoration / Wrapping",
    desc: "Refresh, Repair & Upgrade Interior Finishes. Bring your interior back to life with trim restoration and wrapping. We repair worn or faded trims and apply high-quality wraps for a fresh, modern look—perfect for upgrading panels, trim pieces, and interior detailing.",
    image: "s4.jpg", // Replace with your image filename
    link: "/Interior-Trims-Restoration"
  }
];


const ServiceGrid = () => {
  return (
    <section className="bg-white mt-20 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-[#404143] mb-2">Home / Service</p>
            <h2 className="text-4xl font-bold text-black">
              Our Service Overview
            </h2>
          </div>

          <p className="text-[#404143] leading-relaxed max-w-lg">
            At Tomas Exterior, we offer professional automotive services designed to enhance your vehicle’s aesthetics, safety, and performance. Our experienced technicians provide precise solutions for window tinting and headlight maintenance, ensuring long-lasting results and customer satisfaction.
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
                    group-hover:bg-[#404143]/70
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="px-6 pb-6">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#404143] leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    font-semibold
                    text-[#F21B23]
                    hover:text-white
                    bg-white
                    hover:bg-[#404143]
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
                </Link>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
