import React from 'react';
import { Mail, MapPin, PhoneCall, CheckSquare } from 'lucide-react';

const ContactSection = () => {
  const contactData = [
    {
      icon: <CheckSquare className="w-8 h-8 text-[#F21B23]" />,
      title: "Chat to Sales",
      description: "Email us for scheduling",
      linkText: "Tomasexteriors@gmail.com",
      linkHref: "mailto:Tomasexteriors@gmail.com",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#F21B23]" />,
      title: "Visit Our Office",
      description: "Visit us for scheduling",
      linkText: "Unit 16 Croft St, Bury BL9 7BG, United Kingdom",
      linkHref: "https://www.google.com/maps/place/Tomas+Exteriors+professional+window+tinting/@53.5937989,-2.286031,492m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487ba55ab7c86bb1:0x2d01d70333586c78!8m2!3d53.5937989!4d-2.286031!16s%2Fg%2F11h_bwbnh5?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D",
      iconBg: "transparent",
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-[#F21B23]" />,
      title: "Contact Us",
      description: "Call us for scheduling",
      linkText: "+44 7851 823807",
      linkHref: "tel:+447851823807",
      iconBg: "transparent",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start transition-transform hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className={`mb-6 p-1 rounded-lg `}>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-black mb-2">
                {item.title}
              </h3>
              
              <p className="text-[#404143] mb-6 font-medium">
                {item.description}
              </p>

              <a 
                href={item.linkHref} 
                className="text-black font-bold text-lg hover:text-[#F21B23]"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;