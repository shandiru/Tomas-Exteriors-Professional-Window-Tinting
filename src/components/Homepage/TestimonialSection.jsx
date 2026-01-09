import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `"The team at Aquafix did a fantastic job on our bathroom remodel. Their attention to detail and craftsmanship exceeded our expectations. Will definitely use them again."`,
    name: "Vivian Guillen",
    role: "Founder & CEO, Red Pixel",
    avatar:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/677b7957f8385d9493393bbf_testimonial-client-image.svg",
  },
  {
    text: `"Aquafix did an outstanding job on our kitchen renovation! Their professionalism, attention to detail, and quality craftsmanship truly impressed us."`,
    name: "Lisa R.",
    role: "Founder & CEO, Elite Builders",
    avatar:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/678d39205e22d847d96c59c5_v1-testimonial-image-6.webp",
  },
  {
    text: `"The team at Aquafix transformed our bathroom beautifully. Their expertise and dedication to perfection made the entire process smooth and stress-free."`,
    name: "Anna B",
    role: "Founder & CEO, GreenScape",
    avatar:
      "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/678d392eaabf9b67d6a68184_V1-testimonial-image-4.webp",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative bg-[#0A3B8E] py-40 overflow-hidden text-white">
      {/* Background Quote Shape */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <svg width="420" viewBox="0 0 320 220" fill="none">
          <path
            d="M0.877441 219.699L12.0588 154.424C15.2823 135.889 22.0314 116.951 32.3062 97.6104C42.7824 78.2696 55.3741 60.037 70.0811 42.9123C84.9896 25.7877 100.503 11.4836 116.62 0L167.389 33.5441C153.085 51.2732 140.695 69.8081 130.219 89.1488C119.743 108.49 112.59 130.046 108.763 153.819L97.5812 219.699H0.877441Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative text-center">
        {/* Testimonial Text */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-16">
          {t.text}
        </h2>

        {/* Author */}
        <div className="flex items-center justify-center gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm opacity-80">{t.role}</div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-blue-800 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-blue-800 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
