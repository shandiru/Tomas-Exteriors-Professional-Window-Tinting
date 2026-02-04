import React from 'react';

const ServiceHeader = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Header / Breadcrumbs */}
      <header className="px-6 py-4 max-w-7xl mt-30 mx-auto flex justify-between items-center">
        <nav className="text-xs md:text-sm text-[#404143]">
          Home / <span>Service</span> / <span className="text-black font-medium">Headlight Services</span>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title and CTA Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-black">
              Headlight Services
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Keep your vehicle’s headlights bright, clear, and fully functional with professional headlight services from Tomas Exterior. We specialize in restoring, repairing, and replacing headlights to improve safety, visibility, and overall vehicle appearance.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://wa.me/447851823807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F21B23] hover:bg-[#404143] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Get a Quote via WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src="/s4.jpg"
            alt="Plumber fixing a faucet"
            className="w-full h-[300px] md:h-[600px] object-cover"
          />
          {/* Optional Overlay to match lighting if needed */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </main>
    </div>
  );
};

export default ServiceHeader;