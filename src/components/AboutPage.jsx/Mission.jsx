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
            Turning Your Plumbing <br className="hidden sm:block" />
            Needs into Reality
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
              At Aquafix, our mission is to provide top-quality plumbing services
              that ensure safety, functionality, and efficiency. We are committed
              to delivering exceptional customer service, reliable solutions,
              and expert craftsmanship.
            </p>

            <ul className="space-y-3">
              <ListItem text="Exceeding customer expectations with exceptional service and personalized care" />
              <ListItem text="Upholding honesty and transparency in all our interactions and business practices" />
              <ListItem text="Continuously adopting new technologies and methods to improve our services" />
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
              Our vision is to be the leading provider of plumbing services in
              our community, our integrity, innovation, and excellence. We aim
              to set the standard for quality and reliability in the plumbing industry.
            </p>

            <ul className="space-y-3">
              <ListItem text="Embrace new technologies and methods to enhance our service offerings" />
              <ListItem text="Build long-lasting relationships with our clients through integrity and transparency" />
              <ListItem text="Make a positive impact in the communities we serve through active engagement and support" />
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
