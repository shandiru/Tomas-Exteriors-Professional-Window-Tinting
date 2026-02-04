import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

const GalleryCarousel = ({ data }) => {
  const scrollRef = useRef(null);
  const [activeView, setActiveView] = useState({});

  useEffect(() => {
    const initState = {};
    data.forEach((item) => {
      initState[item.id] = "before";
    });
    setActiveView(initState);
  }, [data]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const refreshGallery = () => {
    const resetState = {};
    data.forEach((item) => {
      resetState[item.id] = "before";
    });
    setActiveView(resetState);
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">
              THE <span className="text-[#B62025] dark:text-[#FF4B4B]">TRANSFORMATION</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-medium uppercase tracking-widest">
              Window Tinting Excellence
            </p>
          </div>
          
          <button
            onClick={refreshGallery}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#B62025] dark:border-[#FF4B4B] text-[#B62025] dark:text-[#FF4B4B] font-bold hover:bg-[#B62025] dark:hover:bg-[#FF4B4B] hover:text-white transition-all duration-300"
          >
            <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            RESET VIEW
          </button>
        </div>

        {/* Gallery Section */}
        <div className="relative group">
          <div
            className="flex gap-8 overflow-x-auto scroll-smooth pb-10 px-4 scrollbar-hide"
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.map((item) => {
              const isAfter = activeView[item.id] === "after";
              return (
                <div
                  key={item.id}
                  className="min-w-[320px] md:min-w-[400px] group/card bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={isAfter ? item.after : item.before}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg ${
                        isAfter 
                        ? "bg-[#B62025] dark:text-[#FF4B4B] text-white" 
                        : "bg-white/90 text-black"
                      }`}>
                        {isAfter ? "After " : "Before "}
                      </span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 truncate">
                      {item.title || "Vehicle Transformation"}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-200 dark:bg-zinc-800 rounded-xl">
                      <button
                        onClick={() => setActiveView(prev => ({ ...prev, [item.id]: "before" }))}
                        className={`py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                          !isAfter 
                          ? "bg-white dark:bg-zinc-700 text-black dark:text-white shadow-md" 
                          : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        }`}
                      >
                        BEFORE
                      </button>
                      <button
                        onClick={() => setActiveView(prev => ({ ...prev, [item.id]: "after" }))}
                        className={`py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                          isAfter 
                          ? "bg-[#B62025] dark:bg-[#FF4B4B] text-white shadow-md" 
                          : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        }`}
                      >
                        AFTER
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Arrows - Only visible on hover */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white dark:bg-zinc-800 p-4 rounded-full shadow-2xl border border-gray-100 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block"
          >
            <ChevronLeft size={28} className="text-[#B62025] dark:text-[#FF4B4B]" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white dark:bg-zinc-800 p-4 rounded-full shadow-2xl border border-gray-100 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block"
          >
            <ChevronRight size={28} className="text-[#B62025] dark:text-[#FF4B4B]" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default GalleryCarousel;