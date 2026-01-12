import React, { useState, useEffect, useRef } from "react";

const HeadlightServiceSection = () => {
    const [isVisible, setIsVisible] = useState({});
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                }
            });
        }, { threshold: 0.1 });

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const workProcessSteps = [
        {
            id: "01",
            title: "Booking & Inspection",
            description:
                "Schedule a convenient appointment. Our technicians inspect your headlights and discuss the best solution for your vehicle.",
            icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6784be8fff32052b65a2197a_counter-card-1.svg",
        },
        {
            id: "02",
            title: "Work Planning",
            description:
                "We plan the service process, select materials, and prepare equipment for a smooth workflow.",
            icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6784be8f9d5a3853e104e73b_counter-card-2.svg",
        },
        {
            id: "03",
            title: "Fix and Repair / Installation",
            description:
                "Our experts restore, repair, or replace headlights with exacting precision, ensuring clarity, functionality, and safety.",
            icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6784be8fa2234583257ba0ac_counter-card-3.svg",
        },
        {
            id: "04",
            title: "Works Completed",
            description:
                "We conduct final checks and quality assurance, ensuring your headlights are fully functional and visually appealing.",
            icon: "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c50/6784be8fc5d913fb35fdf7e0_counter-card-4.svg",
        },
    ];

    const headlightServices = [
        {
            title: "Headlight Restoration",
            description: "Remove haze, yellowing, and oxidation to restore brightness and clarity."
        },
        {
            title: "Headlight Crack Repair",
            description: "Fix cracks to prevent moisture and damage without full replacement."
        },
        {
            title: "Headlight Condensation Repair",
            description: "Eliminate fogging inside the lens for clear, safe illumination."
        },
        {
            title: "Headlight Lens Replacement",
            description: "Replace severely damaged or worn lenses to restore optimal performance."
        }
    ];


    return (
        <div className="bg-white font-['Poppins'] text-[#0f172a]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

                    {/* LEFT SIDE: SCROLLABLE CONTENT */}
                    <div className="space-y-24">

                        {/* 1. About Service Section */}
                        <section id="about-service" ref={el => sectionRefs.current['about-service'] = el} className="space-y-6">
                            <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest">
                                Service Details
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black">About this Service</h2>
                            <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                                <p>
                                    Our headlight services are designed to solve all common headlight issues, ensuring your vehicle remains safe and stylish. Using advanced techniques and premium materials, we handle:
                                </p>

                                <ul className="list-disc list-inside space-y-2">
                                    {headlightServices.map((service, index) => (
                                        <li key={index}>
                                            <span className="font-bold">{service.title}:</span> {service.description}
                                        </li>
                                    ))}
                                </ul>

                                <p>
                                    Each service is delivered with precision, professionalism, and attention to detail.
                                </p>
                            </div>
                            <h3 className="text-2xl font-bold pt-4">What is included?</h3>
                            <p className="text-gray-600">When you choose our headlight services, you get:</p>
                            <ul className="space-y-4">
                                {[
                                    "Full inspection and assessment of your headlights",
                                    "Professional cleaning, restoration, or repair",
                                    "Replacement using high-quality OEM or aftermarket lenses when required",
                                    "Detailed post-service care instructions to prolong headlight life",
                                    "Assurance of improved night-time visibility and vehicle safety"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        <p className="text-gray-700">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 2. How We Work Section */}
                        <section id="how-we-work" ref={el => sectionRefs.current['how-we-work'] = el} className="space-y-8">
                            <div>
                                <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                                    Working Process
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-4">How We Work</h2>
                                <p className="text-gray-600 text-lg">We follow a simple, structured workflow to ensure every headlight service is efficient, precise, and reliable.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {workProcessSteps.map((step) => (
                                    <div key={step.id} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                            <img src={step.icon} alt="Icon" className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. Service Benefits Section */}
                        <section id="benefits" ref={el => sectionRefs.current['benefits'] = el} className="space-y-8">
                            <div>
                                <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                                    Benefits
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black">Service Benefits</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Choosing Thomas Exterior for headlight services provides:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Clear, bright headlights for safer driving at night",
                                    "Cost-effective crack repair and restoration alternatives to full replacement",
                                    "Long-lasting results using premium materials and professional techniques",
                                    "Elimination of condensation or fogging that can impair visibility",
                                    "Improved vehicle aesthetics and resale value"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        <p className="text-gray-700">{benefit}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="rounded-3xl overflow-hidden shadow-2xl mt-10">
                                <img
                                    src="https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/676d35dac3c6cfd3a560ceaa_676d35102352943a7b885e7b_service-details-image.webp"
                                    alt="Plumbing work"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </section>
                    </div>

                    {/* RIGHT SIDE: STICKY CONTACT FORM */}
                    <aside className="lg:sticky lg:top-10">
                        <div className="bg-[#f8fafc] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl">
                            <h3 className="text-3xl font-black mb-8">Get In Touch</h3>
                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold mb-2">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Phone</label>
                                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Select A Service</label>
                                    <select className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                                        <option>Remodelling Service</option>
                                        <option>Faucet & Leak Repairs</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Short Note</label>
                                    <textarea rows="4" placeholder="How can we help?" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full bg-[#1e40af] text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all transform active:scale-95 shadow-lg shadow-blue-200">
                                     Book Your Headlight Service Today
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default HeadlightServiceSection;