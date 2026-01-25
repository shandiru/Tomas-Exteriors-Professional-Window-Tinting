import React from "react";

const works = [
  {
    title: "Professional Window Tinting",
    image: "/s1.jpg",
    description:
      "Precision-installed window tints that enhance privacy, reduce heat, block UV rays, and elevate the overall appearance of your vehicle.",
    link: "/window-tinting",
  },
  {
    title: "Headlight Restoration",
    image: "/s2.jpg",
    description:
      "Restoring faded and oxidized headlights to like-new clarity, improving nighttime visibility and vehicle safety.",
    link: "/Headlight",
  },
  {
    title: "Headlight Crack Repair",
    image: "s3.jpg",
    description:
      "Advanced repair solutions for cracked headlights, extending their lifespan and restoring functionality without full replacement.",
    link: "/Headlight",
  },
  {
    title: "Headlight Lens Replacement",
    image: "s4.jpg",
    description:
      "Professional headlight lens replacement for severely damaged or worn lenses, ensuring optimal light output and road safety.",
    link: "/Headlight",
  },
];


const FeaturedWorks = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="block mb-4 text-[#F21B23] font-semibold">
              Work Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">
              Featured Completed Works
            </h2>
          </div>

          <div>
            <p className="text-[#404143] mb-6 max-w-lg">
              Explore our portfolio to see the high-quality vehicle enhancement projects we’ve completed. From crystal-clear window tints to fully restored headlights, our work reflects our commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>

        {/* WORK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* IMAGE */}
              <img
                src={work.image ? work.image : "/logo.jpeg"}
                alt={work.title}
                className="w-full h-[340px] object-cover transform group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {work.title}
                </h3>

                <div className="overflow-hidden">
                  <p className="text-sm text-gray-200 max-h-0 group-hover:max-h-40 transition-all duration-500 mb-6">
                    {work.description}
                  </p>

                  <a
                    href={work.link}
                    className="inline-block opacity-0 group-hover:opacity-100 transition duration-500 px-6 py-2 border-2 border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWorks;
