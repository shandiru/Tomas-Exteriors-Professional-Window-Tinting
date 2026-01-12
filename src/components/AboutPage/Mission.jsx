import { CircleCheckBig } from "lucide-react";
import React from "react";

const MissionVision = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            Mission & Vision
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Enhancing Your Vehicle with Precision & Care
          </h2>
        </div>

        {/* MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="/a1.webp"
            alt="Our Mission"
            className="rounded-2xl w-full object-cover h-[280px] sm:h-[350px]"
          />

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 mb-6">
             At Thomas Exterior, our mission is to deliver premium window tinting and professional headlight solutions that enhance vehicle safety, comfort, and aesthetics. We are committed to exceptional service, reliable workmanship, and long-lasting results.
            </p>

            <ul className="space-y-3">
              <ListItem text="Deliver high-quality, detail-focused automotive services" />
              <ListItem text="Maintain honesty, transparency, and professionalism" />
              <ListItem text="Continuously improve through modern tools and techniques" />
            </ul>
          </div>
        </div>

        {/* VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 mb-6">
              Our vision is to become a leading automotive enhancement service provider, known for quality, trust, and innovation. We aim to set a standard for excellence in window tinting and headlight services.
            </p>

            <ul className="space-y-3">
              <ListItem text=" Embrace new technologies for better results" />
              <ListItem text="Build long-term customer relationships" />
              <ListItem text="Positively impact our local automotive community" />
            </ul>
          </div>

          <img
            src="/a1.webp"
            alt="Our Vision"
            className="rounded-2xl w-full object-cover h-[280px] sm:h-[350px]"
          />
        </div>

      </div>
    </section>
  );
};

const ListItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <CircleCheckBig />
    <p className="text-slate-600">{text}</p>
  </li>
);

export default MissionVision;
