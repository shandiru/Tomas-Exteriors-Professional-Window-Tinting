import React from "react";

const works = [
  {
    title: "Bathroom Repair",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-1.webp",
    description:
      "High-quality bathroom repair services ensuring durability and modern finishes.",
    link: "/work/bathroom-repair",
  },
  {
    title: "Kitchen Repair",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777ec64a7158f3d906c19_homev2-work-card-image-3.webp",
    description:
      "Professional kitchen plumbing repairs designed for efficiency and longevity.",
    link: "/work/kitchen-repair",
  },
  {
    title: "Plumbing Installation",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677778028265c996c6d40701_homev2-work-card-image-2.webp",
    description:
      "Complete plumbing installations delivered with precision and expertise.",
    link: "/work/plumbing-installation",
  },
  {
    title: "Sewer Cleaning",
    image:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/67a358567c3099a48ea1d657_work-thumbnail-image-1.webp",
    description:
      "Advanced sewer cleaning solutions to keep your system flowing smoothly.",
    link: "/work/sewer-cleaning",
  },
];

const FeaturedWorks = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="block mb-4 text-blue-600 font-semibold">
              Work Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Featured Completed Works
            </h2>
          </div>

          <div>
            <p className="text-gray-600 mb-6 max-w-lg">
              Explore our portfolio to see the high-quality plumbing projects
              we've completed. From emergency repairs to full-scale installations,
              our work demonstrates our commitment to excellence.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Get a Quote
            </a>
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
                src={work.image}
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
