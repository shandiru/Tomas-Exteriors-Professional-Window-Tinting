import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer residential and commercial plumbing services including repairs, installations, drain cleaning, remodeling, and emergency plumbing support.",
  },
  {
    q: "Do you handle emergency plumbing issues?",
    a: "Yes, our team is available 24/7 to respond to emergency plumbing problems quickly and efficiently.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Absolutely. All of our plumbers are fully licensed, insured, and trained to meet industry standards.",
  },
  {
    q: "How quickly can you schedule an appointment?",
    a: "In most cases, we can schedule same-day or next-day appointments depending on availability.",
  },
  {
    q: "How do you charge for services?",
    a: "We provide transparent pricing with upfront estimates before starting any work.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT */}
        <div>
          <span className="block text-blue-600 font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition"
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900">
                    {item.q}
                  </span>

                  <span
                    className={`w-9 h-9 flex items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "rotate-45 border-blue-600 text-blue-600"
                        : "border-slate-300 text-slate-600"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-slate-600">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
