import React from 'react';

const ServiceHeader = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header / Breadcrumbs */}
      <header className="px-6 py-4 max-w-7xl mt-30 mx-auto flex justify-between items-center">
        <nav className="text-xs md:text-sm text-gray-500">
          Home / <span className="hover:underline cursor-pointer">Service</span> / <span className="text-slate-900 font-medium">Window Tinting</span>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title and CTA Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#0a1d47]">
              Window Tinting
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Enhance your vehicle’s comfort, privacy, and style with professional window tinting services. Our precision installations reduce heat, block harmful UV rays, and protect your interior while giving your vehicle a sleek, modern look.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <button className="bg-[#003da5] hover:bg-[#002d7a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
              Get a Quote via WhatsApp
            </button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
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