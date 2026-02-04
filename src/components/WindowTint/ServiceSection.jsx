import React, { useState, useEffect, useRef } from "react";

const ServiceWorkflowSection = () => {
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
                "Schedule a convenient appointment. Our technicians inspect your vehicle, discuss tint options, and recommend the best solution for your needs.",
        },
        {
            id: "02",
            title: "Work Planning",
            description:
                "We prepare the film and plan the installation process for a smooth, efficient workflow tailored to your vehicle.",
        },
        {
            id: "03",
            title: "Fix And Install",
            description:
                "Our experts carefully install the tint, ensuring perfect alignment, no bubbles, and a professional finish.",
        },
        {
            id: "04",
            title: "Works Completed",
            description:
                "We finalize the job with quality checks and provide post-installation advice to maintain the longevity of your tint.",
        },
    ];


    return (
        <div className="bg-white font-['Poppins'] text-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

                    {/* LEFT SIDE: SCROLLABLE CONTENT */}
                    <div className="space-y-24">

                        {/* 1. About Service Section */}
                        <section id="about-service" ref={el => sectionRefs.current['about-service'] = el} className="space-y-6">
                            <div className="inline-block bg-[#F21B23]/20 px-4 py-1 rounded-full text-[#F21B23] font-bold text-xs uppercase tracking-widest">
                                Service Details
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black">About this Service</h2>
                            <div className="text-[#404143] space-y-4 text-lg leading-relaxed">
                                <p>
                                    At Tomas Exterior, we provide premium automotive window tinting tailored to your vehicle and personal preferences. Using top-quality films and expert installation techniques, we ensure:
                                </p>

                                <ul className="list-disc list-inside space-y-2">
                                    <li>Heat reduction and glare control</li>
                                    <li>UV ray protection for interior surfaces</li>
                                    <li>Enhanced privacy for you and your passengers</li>
                                    <li>A modern, stylish finish that elevates your vehicle’s appearance</li>
                                </ul>

                                <p>
                                    Our team handles every detail with precision, from measurement to installation, ensuring a smooth, bubble-free finish that lasts for years.
                                </p>
                            </div>
                            <h3 className="text-2xl font-bold pt-4">What is included?</h3>
                            <p className="text-[#404143]">Our window tinting service includes:</p>
                            <ul className="space-y-4">
                                {[
                                    "Professional assessment of your vehicle’s windows",
                                    "High-quality film selection for optimal heat and UV reduction",
                                    "Precise measurement and cutting of tint film",
                                    "Expert installation with a flawless, long-lasting finish",
                                    "Post-installation care advice and support"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F21B23] text-white flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        <p className="text-[#404143]">{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#404143]">We focus on precision, quality, and customer satisfaction in every project.</p>
                        </section>

                        {/* 2. How We Work Section */}
                        <section id="how-we-work" ref={el => sectionRefs.current['how-we-work'] = el} className="space-y-8">
                            <div>
                                <div className="inline-block bg-[#F21B23]/20 px-4 py-1 rounded-full text-[#F21B23] font-bold text-xs uppercase tracking-widest mb-4">
                                    Working Process
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-4">How We Work</h2>
                                <p className="text-[#404143] text-lg">Our streamlined process ensures a hassle-free experience while delivering high-quality results for every vehicle.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {workProcessSteps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                                    >
                                        {/* NUMBER CIRCLE */}
                                        <div className="w-14 h-14 bg-[#F21B23]/20 rounded-xl flex items-center justify-center mb-6 text-[#F21B23] font-bold text-lg">
                                            {index + 1}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-[#404143] text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. Service Benefits Section */}
                        <section ref={el => sectionRefs.current['benefits'] = el} className="space-y-8">
                            <div>
                                <div className="inline-block bg-[#F21B23]/20 px-4 py-1 rounded-full text-[#F21B23] font-bold text-xs uppercase tracking-widest mb-4">
                                    Benefits
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black">Service Benefits</h2>
                            </div>
                            <p className="text-[#404143] text-lg leading-relaxed">
                                Choosing Tomas Exterior for window tinting gives you:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Improved driving comfort with reduced heat and glare",
                                    "Protection against UV damage to your interior and skin",
                                    "Enhanced vehicle privacy and security",
                                    "Sleek, stylish appearance that elevates your car’s look",
                                    "Long-lasting results from high-quality materials and professional installation"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F21B23]/20 text-[#F21B23] flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        <p className="text-[#404143]">{benefit}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#404143] text-lg leading-relaxed">We prioritize precision, reliability, and customer satisfaction, delivering a tint that looks great and performs even better.</p>

                            <div className="rounded-3xl overflow-hidden shadow-2xl mt-10">
                                <img
                                    src="a3.jpg"
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
                                    <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Phone</label>
                                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Select A Service</label>
                                    <select className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all bg-white">
                                        <option>Remodelling Service</option>
                                        <option>Faucet & Leak Repairs</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Short Note</label>
                                    <textarea rows="4" placeholder="How can we help?" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full bg-[#F21B23] text-white font-bold py-4 rounded-xl hover:bg-[#404143] transition-all transform active:scale-95 shadow-lg shadow-[#F21B23]/30">
                                    Get Your Vehicle Tinted Today
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ServiceWorkflowSection;