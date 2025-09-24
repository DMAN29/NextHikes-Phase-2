"use client";

import Image from "next/image";
import ShapeBlur from "../ShapeBlur";
import { useEffect, useState } from "react";

export default function OurService() {
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPixelRatio(window.devicePixelRatio || 1);
    }
  }, []);
  const points = [
    {
      icon: "/icons/web.svg",
      title: "Web Design and Development",
      description: "Product agency that relates people relations",
    },
    {
      icon: "/icons/strategy.svg",
      title: "Strategy and Planning",
      description: "Product agency that relates people relations",
    },
    {
      icon: "/icons/marketing.svg",
      title: "Digital Marketing",
      description: "Product agency that relates people relations",
    },
    {
      icon: "/icons/mobile.svg",
      title: "Branded Mobile Apps",
      description: "Product agency that relates people relations",
    },
    {
      icon: "/icons/photography.svg",
      title: "Photography and Video",
      description: "Product agency that relates people relations",
    },
    {
      icon: "/icons/3d-animation.svg",
      title: "AR and 3D Animation",
      description: "Product agency that relates people relations",
    },
  ];

  return (
    <section className="relative bg-black/75 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="custom-container px-4 sm:px-6 lg:px-8 relative z-10">
        <h4 className="text-white text-center uppercase text-sm sm:text-base md:text-lg font-medium tracking-wide">
          Our Best Services
        </h4>
        <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-4 font-bold leading-snug">
          We provide end-to-end solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-10 mt-10 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div className="flex items-start gap-3 sm:gap-4" key={index}>
              <Image
                src={point.icon}
                alt={point.title}
                width={36}
                height={36}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <ShapeBlur
        className="w-1/2 h-[300px]"
        variation={0}
        pixelRatioProp={pixelRatio}
        shapeSize={0.5}
        roundness={0.5}
        borderSize={0.05}
        circleSize={1.5}
        circleEdge={1}
      /> */}
    </section>
  );
}
