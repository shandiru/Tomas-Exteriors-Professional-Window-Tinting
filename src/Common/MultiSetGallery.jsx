import React, { useState, useRef } from "react";
import { ShieldCheck } from "lucide-react";

// ── Video Card ──────────────────────────────────────────────────────────────
const VideoCard = ({ item, index }) => {
    const [isAfter, setIsAfter] = useState(false);
    const videoRef = useRef(null);

    return (
        <div className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full">
            {/* Media Section */}
            <div className="relative w-full h-[300px] overflow-hidden bg-black">

                {/* Before: Video */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${!isAfter ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <video
                        ref={videoRef}
                        src={item.beforeVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* After: Image */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isAfter ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <video
                        ref={videoRef}
                        src={item.afterVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Status Badge */}
                <div className="absolute top-5 left-5 z-20">
                    <span className={`px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"}`}>
                        {isAfter ? "After" : "Before"}
                    </span>
                </div>

                {/* Card Number + Video badge */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                    {!isAfter && (
                        <span className="px-2.5 py-1 rounded-full bg-black/40 text-white text-[10px] font-black tracking-widest backdrop-blur-sm uppercase">
                            Video
                        </span>
                    )}
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-black backdrop-blur-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between flex-1">
                {/* <div>
                    <div className="flex items-center gap-2 text-[#F21B23] mb-3">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-black tracking-widest uppercase">Premium Protection</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.description}</p>
                </div> */}

                <div className="grid grid-cols-2 gap-2 p-1.5 bg-gray-200 rounded-2xl">
                    <button
                        onClick={() => { setIsAfter(false); if (videoRef.current) { videoRef.current.play(); } }}
                        className={`py-3 rounded-xl text-xs font-black transition-all duration-300 ${!isAfter ? "bg-white text-black shadow-lg scale-[1.02]" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        BEFORE
                    </button>
                    <button
                        onClick={() => { setIsAfter(true); if (videoRef.current) { videoRef.current.pause(); } }}
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
            {/* Media Section */}
            <div className="relative w-full h-[300px] overflow-hidden">
                <img src={item.before} alt="Before Tinting" className="w-full h-full object-cover" />

                <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isAfter ? "opacity-100" : "opacity-0"}`}>
                    <img src={item.after} alt="After Tinting" className="w-full h-full object-cover" />
                </div>

                {/* Status Badge */}
                <div className="absolute top-5 left-5">
                    <span className={`px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"}`}>
                        {isAfter ? "After" : "Before"}
                    </span>
                </div>

                {/* Card Number */}
                <div className="absolute top-5 right-5">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-black backdrop-blur-sm">
                        0{index + 1}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between flex-1">
                {/* <div>
                    <div className="flex items-center gap-2 text-[#F21B23] mb-3">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-black tracking-widest uppercase">Premium Protection</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.description}</p>
                </div> */}

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
        title: "Tesla Model 3 Ceramic",
        description:
            "Experience the ultimate heat rejection and privacy. Our ceramic series blocks 99% of harmful UV rays while maintaining crystal clear visibility.",
    };

    const image = imageData || {
        before: "/Crack1-b.jpeg",
        after: "/Crack1-a .jpeg",
        title: "BMW 5 Series Carbon",
        description:
            "Carbon-infused film delivers superior glare reduction and a bold aesthetic upgrade. The perfect balance of performance and sleek style.",
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