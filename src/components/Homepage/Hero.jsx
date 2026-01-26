import React from "react";
// import MarqueeSection from "../Homepage/MarqueeSection"; // Uncomment if file exists

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/fall.png"
          // Removed the style.display="none" to prevent it from hiding during minor lag
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay: Changed from solid color to semi-transparent gradient/overlay */}
        {/* bg-black/50 allows the video to show through while keeping text readable */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* CONTENT + MARQUEE STACK */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center">
        
        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-4xl">
            <h1 className="text-[48px] md:text-[72px] leading-[1.1] font-extrabold text-white mb-4">
              Premium Window Tinting & <br className="hidden md:block" />
              <span className="text-[#F21B23]">Headlight Solutions</span>
            </h1>

            <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-6">
              Precision Work. Professional Finish.
            </h2>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              At Thomas Exterior, we specialize in high-quality window tinting and professional headlight services that enhance both the look and safety of your vehicle. From expert tint installations to advanced headlight repairs and restorations, we deliver reliable results you can trust.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://wa.me/447851823807"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F21B23] hover:bg-white hover:text-black text-white font-bold px-10 py-4 rounded-full transition-all duration-300 inline-block uppercase tracking-wider text-sm"
              >
                Chat with Us on WhatsApp
              </a>
              
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-4 rounded-full transition-all duration-300 inline-block uppercase tracking-wider text-sm"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* MARQUEE SECTION (Positioned at bottom) */}
        {/* <div className="absolute bottom-10 w-full">
          <MarqueeSection />
        </div> 
        */}
      </div>
    </section>
  );
};

export default HeroSection;