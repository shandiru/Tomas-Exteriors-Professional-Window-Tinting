import React, { useState, useRef, useEffect } from "react";

// ── Video Card ──────────────────────────────────────────────────────────────
const VideoCard = ({ item, index }) => {
    const [isAfter, setIsAfter] = useState(false);
    const beforeRef = useRef(null);
    const afterRef = useRef(null);

    useEffect(() => {
        if (isAfter) {
            afterRef.current?.play().catch(() => {});
            beforeRef.current?.pause();
        } else {
            beforeRef.current?.play().catch(() => {});
            afterRef.current?.pause();
        }
    }, [isAfter]);

    return (
        <div className="bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full">
            {/* Media Section - Height adjusted for mobile */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden bg-black">

                {/* Before: Video */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${!isAfter ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <video
                        ref={beforeRef}
                        src={item.beforeVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* After: Video */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isAfter ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <video
                        ref={afterRef}
                        src={item.afterVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 md:top-5 md:left-5 z-20">
                    <span className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"}`}>
                        {isAfter ? "After" : "Before"}
                    </span>
                </div>

                {/* Card Number */}
                <div className="absolute top-3 right-3 md:top-5 md:right-5 z-20">
                    <span className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-[10px] md:text-xs font-black backdrop-blur-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            {/* Content / Controls */}
            <div className="p-4 md:p-8 flex flex-col justify-between flex-1">
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-200 rounded-xl md:rounded-2xl">
                    <button
                        onClick={() => setIsAfter(false)}
                        className={`py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black transition-all duration-300 ${!isAfter ? "bg-white text-black shadow-md scale-[1.01]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        BEFORE
                    </button>
                    <button
                        onClick={() => setIsAfter(true)}
                        className={`py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black transition-all duration-300 ${isAfter ? "bg-[#F21B23] text-white shadow-md scale-[1.01]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        AFTER
                    </button>
                </div>
            </div>
        </div>
    );
};

// ── Image Card ───────────────────────────────────────────────────────────────
const ImageCard = ({ item, index }) => {
    const [isAfter, setIsAfter] = useState(false);

    return (
        <div className="bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden bg-gray-200">
                <img src={item.before} alt="Before" className="w-full h-full object-cover" />

                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isAfter ? "opacity-100" : "opacity-0"}`}>
                    <img src={item.after} alt="After" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-3 left-3 md:top-5 md:left-5">
                    <span className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"}`}>
                        {isAfter ? "After" : "Before"}
                    </span>
                </div>

                <div className="absolute top-3 right-3 md:top-5 md:right-5">
                    <span className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-[10px] md:text-xs font-black backdrop-blur-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            <div className="p-4 md:p-8 flex flex-col justify-between flex-1">
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-200 rounded-xl md:rounded-2xl">
                    <button
                        onClick={() => setIsAfter(false)}
                        className={`py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black transition-all duration-300 ${!isAfter ? "bg-white text-black shadow-md scale-[1.01]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        BEFORE
                    </button>
                    <button
                        onClick={() => setIsAfter(true)}
                        className={`py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black transition-all duration-300 ${isAfter ? "bg-[#F21B23] text-white shadow-md scale-[1.01]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        AFTER
                    </button>
                </div>
            </div>
        </div>
    );
};

// ── Main Section ─────────────────────────────────────────────────────────────
const DualTransformation = ({ videoData, imageData }) => {
    const video = videoData || {
        beforeVideo: "/lense-b.mp4",
        afterVideo: "/lense-a.mp4",
    };

    const image = imageData || {
        before: "/Crack1-b.jpeg",
        after: "/Crack1-a .jpeg",
    };

    return (
        <div className=" bg-white py-8 px-4 sm:px-6 md:py-24 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header - Responsively Sized */}
                <div className="text-center mb-10 md:mb-16 space-y-3">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
                        THE <br className="block sm:hidden" /> 
                        <span className="text-[#F21B23]">TRANSFORMATION</span>
                    </h2>
                    <p className="text-gray-500 font-bold text-xs md:text-sm tracking-[0.3em] uppercase">
                        Real results, Professional finish
                    </p>
                </div>

                {/* Two Cards - Stack on mobile, side-by-side on md and up */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <VideoCard item={video} index={0} />
                    <ImageCard item={image} index={1} />
                </div>
            </div>
        </div>
    );
};

export default DualTransformation;