import React from 'react';
import { Users, Zap, Clock, ShieldCheck, Settings, HardHat } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      title: "Highly Expert Team",
      description: "Our team comprises highly skilled team who bring years of experience and expertise to every project.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Quick Process",
      description: "We understand the importance of efficiency, which is why we prioritize a streamlined process for our clients.",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Anytime Service",
      description: "Emergencies can happen at any time, which is why we offer round-the-clock service to our clients.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "Strong Commitment",
      description: "We are deeply committed to our clients' satisfaction. Our dedication to excellence is evident in our attention to detail.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      title: "Responsibility",
      description: "We adhere to the highest ethical standards, prioritize safety in all our operations, and actively engage.",
      icon: <Settings className="w-6 h-6 text-white" />,
    },
    {
      title: "Safety First",
      description: "The safety and well-being of our clients providing ongoing training, and equipping our team with the necessary tools.",
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
            We believe in the power of teamwork. Our diverse team of skilled professionals 
            collaborates seamlessly to tackle even the most complex plumbing challenges. 
            By fostering a culture of collaboration, respect.
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