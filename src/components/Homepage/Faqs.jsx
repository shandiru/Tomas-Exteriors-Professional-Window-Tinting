import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does window tinting take?",
    a: " Most window tinting services are completed within a few hours, depending on the vehicle type and tint selection.",
  },
  {
    q: "Can headlights be restored instead of replaced?",
    a: "Yes. Headlight restoration is often effective unless the lens is severely damaged or cracked.",
  },
  {
    q: "Do you offer headlight crack repair?",
    a: "Yes. We provide professional headlight crack repair to prevent moisture buildup and further damage.",
  },
  {
    q: "What causes headlight condensation?",
    a: "Condensation is usually caused by seal damage or temperature changes. We offer targeted condensation repair solutions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-12">
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
