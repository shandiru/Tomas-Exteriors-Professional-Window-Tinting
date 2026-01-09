import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TimelineSection = () => {
    const [lineHeight, setLineHeight] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });

        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // The scroll starts "filling" when the top of the section is 200px above the viewport center
                // This prevents the first circle from being active the moment the page loads
                const startOffset = windowHeight / 2; 
                const start = rect.top - startOffset;
                const totalHeight = rect.height;
                
                // Calculate progress
                const progress = Math.min(Math.max(-start / (totalHeight * 0.9), 0), 1);
                
                setLineHeight(progress * 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const timelineData = [
        {
            year: "1998",
            title: "Company Establishment",
            desc: "Aquafix started as a small local plumbing business and has grown into a trusted name in the industry.",
            img: "a1.webp",
        },
        {
            year: "2005",
            title: "Our Journey",
            desc: "Over the years, we've built a strong reputation for reliability, quality, and customer satisfaction.",
            img: "a1.webp",
        },
        {
            year: "2012",
            title: "Our Story",
            desc: "From humble beginnings, Aquafix has evolved into a respected plumbing service provider.",
            img: "a1.webp",
        },
        {
            year: "2024",
            title: "Aquafix Overview",
            desc: "Our focus on quality, reliability, and customer satisfaction has made us a trusted name.",
            img: "a1.webp",
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#06328d] pt-20 pb-40 relative z-0 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <p className="text-[#a3ff00] font-semibold text-sm uppercase tracking-widest">Our Story</p>
                    <h2 className="text-white text-4xl md:text-6xl font-bold mt-2">Know More About Us</h2>
                </div>

                <div className="relative">
                    {/* --- THE DYNAMIC SCROLL LINE --- */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-white/20">
                        <div 
                            className="w-full bg-[#a3ff00] transition-all duration-300 ease-out shadow-[0_0_15px_#a3ff00]"
                            style={{ height: `${lineHeight}%` }}
                        ></div>
                    </div>

                    <div className="space-y-24 lg:space-y-32">
                        {timelineData.map((item, index) => {
                            // IMPROVED LOGIC: 
                            // We set manual thresholds so the first circle (index 0) 
                            // only activates once the line has actually moved down (e.g., 5% filled)
                            const thresholds = [5, 35, 65, 95]; 
                            const isActive = lineHeight >= thresholds[index];

                            return (
                                <div key={index} className={`flex flex-col lg:flex-row items-center w-full ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    
                                    {/* Image Half */}
                                    <div className="w-full lg:w-1/2 px-4 lg:px-16">
                                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                            <img src={item.img} alt={item.title} className="w-full h-72 md:h-96 object-cover" />
                                        </div>
                                    </div>

                                    {/* Center Circle (Year) */}
                                    <div className="relative z-10 my-8 lg:my-0">
                                        <div 
                                            className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all duration-500 ease-in-out ${
                                                isActive 
                                                ? "bg-[#a3ff00] text-[#06328d] border-[#a3ff00] shadow-[0_0_20px_#a3ff00]" 
                                                : "bg-white text-[#06328d] border-white"
                                            }`}
                                        >
                                            {item.year}
                                        </div>
                                    </div>

                                    {/* Text Half */}
                                    <div className={`w-full lg:w-1/2 px-4 lg:px-16 text-center ${index % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                            <h3 className="text-white text-3xl font-bold mb-4">{item.title}</h3>
                                            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;