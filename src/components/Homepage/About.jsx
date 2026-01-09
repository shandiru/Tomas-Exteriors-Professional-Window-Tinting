

import React, { useEffect } from "react";


export default function AboutFehuTuning() {


  return (
    <section className="bg-[#000000] text-white py-16 px-6 md:px-12 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — TEXT */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-4 uppercase">
            ABOUT BROADWAY REMAPPING
          </h2>

          {/* RED HIGHLIGHT LINE */}
          <div
            className="w-20 h-[3px] bg-[#D70C09] mb-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          ></div>

          {/* NEW CONTENT */}
          <p
            className="text-[#C0C0C0] leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Broadway Remapping specialises in ECU remapping and vehicle diagnostics across North Wales, Flintshire, and the wider North West. We are a family-run business based in North Wales, with over 20 years of experience in providing expert automotive services
          </p>

          <p
            className="text-[#C0C0C0] leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We rewrite the files to your ECU to increase not only the performance
            but also the fuel economy  of many vehicles. We are based near Greenfield
            in North Wales — feel free to visit us today.
          </p>

          <p
            className="text-[#868386] leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            We welcome customers from all over North Wales including Flint,
            Flintshire, Connahs Quay, Mold, Buckley, Hawarden, Prestatyn, Chester,
            The Wirral, and the wider North West We are based near Flint for you to pop by to see us. If you want a top-tier remapping
            service, Broadway Remapping is the place to be.
          </p>

          <div
            className="text-[#C0C0C0] leading-relaxed mb-8 space-y-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p>✔ Expert Technicians</p>
            <p>✔ Quality Workmanship</p>
          </div>

         <a
  href="tel:+447392791919"
  className="inline-block bg-[#D70C09] hover:bg-[#868386] text-white font-medium py-3 px-8 rounded-sm transition"
  data-aos="fade-up"
  data-aos-delay="450"
>
  Contact Us
</a>

        </div>

        {/* RIGHT SIDE — IMAGES */}
        <div className="flex flex-row gap-4 w-full">

          {/* Image 1 */}
          <div
            className="w-1/2 h-[420px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/pexels-photo-1397751-2880w.webp"
              alt="Engine tuning"
              className="w-full h-full object-cover rounded-sm"
              loading="lazy"
            />
          </div>

          {/* SILVER DIVIDER */}
          <div
            className="w-[2px] bg-[#C0C0C0]/40"
            data-aos="fade-in"
            data-aos-delay="350"
          ></div>

          {/* Image 2 */}
          <div
            className="w-1/2 h-[420px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/pexels-photo-17045319-2880w.webp"
              alt="BMW tuning"
              className="w-full h-full object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
