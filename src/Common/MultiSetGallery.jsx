import React, { useState, useRef, useEffect } from "react";

// ── Video Card ──────────────────────────────────────────────────────────────
const VideoCard = ({ item, index }) => {
    const [isAfter, setIsAfter] = useState(false);
    
    // We use two separate refs because React can't map one ref to two different elements
    const beforeRef = useRef(null);
    const afterRef = useRef(null);

    // Sync playback when the user toggles
    useEffect(() => {
        if (isAfter) {
            afterRef.current?.play().catch(() => {}); // Play after video
            beforeRef.current?.pause();               // Pause before video to save resources
        } else {
            beforeRef.current?.play().catch(() => {}); // Play before video
            afterRef.current?.pause();                // Pause after video
        }
    }, [isAfter]);

    return (
        <div className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full">
            {/* Media Section */}
            <div className="relative w-full h-[300px] overflow-hidden bg-black">

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
                <div className="absolute top-5 left-5 z-20">
                    <span className={`px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"}`}>
                        {isAfter ? "After" : "Before"}
                    </span>
                </div>

                {/* Card Number */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-black backdrop-blur-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            {/* Content / Controls */}
            <div className="p-8 flex flex-col justify-between flex-1">
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-gray-200 rounded-2xl">
                    <button
                        onClick={() => setIsAfter(false)}
                        className={`py-3 rounded-xl text-xs font-black transition-all duration-300 ${!isAfter ? "bg-white text-black shadow-lg scale-[1.02]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        BEFORE
                    </button>
                    <button
                        onClick={() => setIsAfter(true)}
                        className={`py-3 rounded-xl text-xs font-black transition-all duration-300 ${isAfter ? "bg-[#F21B23] text-white shadow-lg scale-[1.02]" : "text-gray-500 hover:text-gray-700"}`}
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
        <div className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full">
            <div className="relative w-full h-[300px] overflow-hidden">
                <img src={item.before} alt="Before" className="w-full h-full object-cover" />

                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isAfter ? "opacity-100" : "opacity-0"}`}>
                    <img src={item.after} alt="After" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-5 left-5">
                    <span className={`px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"}`}>
                        {isAfter ? "After" : "Before"}
                    </span>
                </div>

                <div className="absolute top-5 right-5">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-black backdrop-blur-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-1">
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-gray-200 rounded-2xl">
                    <button
                        onClick={() => setIsAfter(false)}
                        className={`py-3 rounded-xl text-xs font-black transition-all duration-300 ${!isAfter ? "bg-white text-black shadow-lg scale-[1.02]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        BEFORE
                    </button>
                    <button
                        onClick={() => setIsAfter(true)}
                        className={`py-3 rounded-xl text-xs font-black transition-all duration-300 ${isAfter ? "bg-[#F21B23] text-white shadow-lg scale-[1.02]" : "text-gray-500 hover:text-gray-700"}`}
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
        after: "/Crack1-a.jpeg",
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 md:py-24 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14 space-y-3">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-none">
                        THE <span className="text-[#F21B23]">TRANSFORMATION</span>
                    </h2>
                </div>

                {/* Two Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    <VideoCard item={video} index={0} />
                    <ImageCard item={image} index={1} />
                </div>
            </div>
        </div>
    );
};

export default DualTransformation;