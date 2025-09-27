"use client";

import React, { useEffect, useRef, useState } from "react";
import { Testimonial } from "./page";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.muted = false; // UNMUTE active card
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true; // keep inactive muted
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative my-17 transition-transform duration-500 origin-bottom
        w-[220px] sm:w-[270px] md:w-[280px]
        h-[330px] sm:h-[370px] md:h-[450px]
        rounded-2xl
        ${
          isActive
            ? "md:scale-110 md:shadow-md scale-100 z-10 p-[2px] bg-[linear-gradient(163.17deg,#AEFF93_-1.22%,rgba(168,252,140,0.1)_70.61%,rgba(166,251,137,0)_98.61%)]"
            : "scale-100 opacity-80 z-10 bg-transparent"
        }`}
      style={{ minHeight: 160, transformOrigin: "bottom center" }}
    >
      <div className="relative w-full h-full rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-end">
        <video
          ref={videoRef}
          src={testimonial.image}
          muted={!isActive} // only active card has sound
          loop
          playsInline
          className="object-cover w-full h-full"
        />

        {isActive && (
          <>
            <div
              className="absolute bottom-0 left-0 w-full text-white p-4"
              style={{
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <h5 className="font-semibold text-lg">{testimonial.name}</h5>
              <p className="text-[#D4D4D8] text-sm font-normal">
                {testimonial.profession}
              </p>
            </div>

            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 text-[#F37021] text-2xl p-2 bg-black/50 rounded-xl border border-[#F37021]"
            >
              {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
