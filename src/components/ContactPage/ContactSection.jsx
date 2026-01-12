import React from 'react';
import { Mail, MapPin, PhoneCall, CheckSquare } from 'lucide-react';

const ContactSection = () => {
  const contactData = [
    {
      icon: <CheckSquare className="w-8 h-8 text-[#F21B23]" />,
      title: "Chat To Sale",
      description: "Email us for scheduling",
      linkText: "thomasexteriors@gmail.com",
      linkHref: "mailto:thomasexteriors@gmail.com",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#F21B23]" />,
      title: "Visit Our Office",
      description: "Visit us for scheduling",
      linkText: "100 Smart Street VIC 3066 AU",
      linkHref: "#",
      iconBg: "transparent",
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-[#F21B23]" />,
      title: "Contact Us",
      description: "Call us for scheduling",
      linkText: "+(1)578-365-379",
      linkHref: "tel:+1578365379",
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