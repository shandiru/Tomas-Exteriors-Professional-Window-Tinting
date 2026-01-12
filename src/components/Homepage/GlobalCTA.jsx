import React from "react";

const GlobalCTA = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT CTA CARD */}
          <div className="relative lg:col-span-2 rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/67d3e1b8879919b30bb48138_CTA%20card%20image.avif"
              alt="Plumbing Service"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A3B8E]/90 to-[#0A3B8E]/60"></div>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-center">
              <span className="text-lime-400 font-semibold mb-4">
                Looking for Professional Window Tinting or Headlight Services?
              </span>

              <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Let’s discuss your vehicle needs and provide the right solution.
              </h2>

              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-lime-400 text-[#0A3B8E] font-semibold px-8 py-4 rounded-full w-fit hover:bg-lime-300 transition"
              >
                Get a Quote via WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT AGENT CARD */}
          <div className="bg-lime-400 rounded-3xl p-10 flex flex-col justify-between">
            <div>
              {/* Agent Image */}
              <img
                src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/67739ca4c06148b3e7c2005f_agent-image.webp"
                alt="Wade Warren"
                className="w-16 h-16 rounded-full mb-6"
              />

              {/* Text */}
              <h3 className="text-[#0A3B8E] text-lg font-semibold leading-relaxed mb-8">
                This is Thomas, Founder of Thomas Exterior. <br />
                I’m here to personally answer your questions and help you choose the best window tinting or headlight solution for your vehicle.
              </h3>
            </div>

            {/* Call Button */}
            <a
              href="tel:+1578365379"
              className="inline-flex items-center justify-center bg-[#0A3B8E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#092f70] transition"
            >
              Start a WhatsApp Chat
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
