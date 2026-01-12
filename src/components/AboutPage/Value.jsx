import React from 'react';
import {
  Users,
  Zap,
  Clock,
  ShieldCheck,
  Settings,
  HardHat,
} from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Highly Skilled Expertise",
      description:
        "Our services are delivered by experienced professionals who bring technical expertise and precision to every window tinting and headlight service.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Efficient Process",
      description:
        "We value your time. Our streamlined service process ensures quick turnaround times without compromising quality.",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Anytime Support",
      description:
        "We prioritize flexibility and responsiveness, making it easy for customers to reach us and get professional guidance when needed.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "Strong Commitment",
      description:
        "Customer satisfaction is at the core of everything we do. We are committed to delivering results that meet and exceed expectations.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      title: "Responsibility",
      description:
        "We operate with integrity, use industry-approved materials, and follow best practices to ensure safe and responsible service delivery.",
      icon: <Settings className="w-6 h-6 text-white" />,
    },
    {
      title: "Safety First",
      description:
        "We prioritize vehicle safety by using proper techniques, quality products, and proven methods that protect both the vehicle and its owner.",
      icon: <HardHat className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div className="md:w-1/2">
          <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Values</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-2">
            Our Core Values
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-500 leading-relaxed text-lg">
            We believe excellence comes from precision, responsibility, and customer trust. Our work is driven by attention to detail and a commitment to delivering reliable automotive enhancement services.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-start"
          >
            {/* Icon Circle */}
            <div className="bg-blue-900 p-4 rounded-full mb-6 flex items-center justify-center">
              {value.icon}
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              {value.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;