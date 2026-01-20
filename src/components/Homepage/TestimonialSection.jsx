import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Tomas is an absolute professional! From window tinting to custom stickers, his attention to detail and precision are unmatched. No matter the project, the results are always outstanding.",
    name: "Piotr S.",
    role: "Local Guide",
  },
  {
    text: "Amazing service. Great communication and informative advice with pictures of past work to support the process. He takes real pride in his work—the car looks amazing!",
    name: "Nick Wilde",
    role: "Tesla Model 3 Owner",
  },
  {
    text: "Great job on my Civic Type R. He went the extra mile to sand down scratches that were already on the car. His professionalism is A+ and he treats your car as if it's his own.",
    name: "Waks",
    role: "Local Guide",
  },
  {
    text: "He delivered amazing standards and kept me updated with pics. He even advised me against a service to save me money because he cares about the look of the car. Refreshing!",
    name: "Gregg Hilton",
    role: "Verified Customer",
  }
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="relative bg-[#1A1B1C] py-24 md:py-32 overflow-hidden text-white font-sans">
      {/* Aesthetic Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Quote size={400} strokeWidth={1} />
      </div>

      <div className="max-w-4xl mx-auto px-8 relative">
        <div className="relative min-h-[300px] flex flex-col items-center justify-center text-center">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="w-full"
            >
              {/* Star Rating (Optional but adds trust) */}
              <div className="flex justify-center gap-1 mb-8 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Quote */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed text-gray-100 mb-10">
                {t.text}
              </h2>

              {/* Author Container */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-xl font-bold text-white shadow-2xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight">{t.name}</div>
                 
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? "w-10 bg-white" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;