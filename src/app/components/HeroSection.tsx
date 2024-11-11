"use client"
import { useEffect, useRef } from 'react';

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.45; // Adjust the playback rate to slow down the video
        }
    }, []);

    return (
        <div className="relative h-[90vh] text-white flex items-center justify-center overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover object-[center_right] md:object-[center_right] z-0"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 md:opacity-50 z-1"></div>
            <div className="relative z-10 text-center p-6 bg-grey bg-opacity-30 md:bg-opacity-20 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Learn <span className='animate-color-change'>AI</span> with Us</h1>
                <p className="text-xl md:text-xl inline-block mb-2 text-white bg-gray-800 bg-opacity-70 rounded-xl py-2 px-5">
                    By Student. To Student.
                </p>
            </div>
        </div>
    );
}

export default HeroSection;