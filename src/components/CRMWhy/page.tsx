import React from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";

const imgHex = "/image/hex.png";

const hexItems = [
  {
    label: "All-in-One Solution",
    description: "Manage customers and employees in one platform",
  },
  {
    label: "Cloud-Based & Secure",
    description: "Access from anywhere with top-level data protection",
  },
  {
    label: "Customizable & Scalable",
    description: "Tailor the system to your workflow",
  },
  {
    label: "Real-Time Insights",
    description: "Make informed decisions with real-time insights",
  },
  {
    label: "User-Friendly Interface",
    description: "Easy-to-use and intuitive for everyone",
  },
  {
    label: "24/7 Support & Training",
    description: "Access comprehensive support and training anytime",
  },
];

const brightness = [100, 180, 260, 340, 420, 500];

export default function CRMWhy() {
  return (
    <div className="w-11/12 mx-auto py-8">
      {/* Centered Heading and Gradient Border */}
      <div className="w-full flex flex-col items-center mb-10">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-relaxed text-center bg-white rounded px-4">
          Why Choose Our CRM & HRMS?
        </h1>
        <div className="w-60 md:w-96 h-1 bg-gradient-to-r from-[#003049] to-[#00F0FF] rounded mt-2" />
      </div>

      {/* Hex Grid using CSS Grid with padding and separation */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {hexItems.map((item, i) => (
          <div
            key={item.label}
            className="flex flex-col items-center group transition-transform duration-300 ease-in-out hover:scale-105 p-4 bg-white xl:px-10"
          >
            {/* Label and description above for odd indexes */}
            {i % 2 === 1 && (
              <div className="mb-2 text-center max-w-[110px]">
                <h1
                  className="font-semibold text-xs md:text-sm"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.label}
                </h1>

                <p
                  className="text-xs md:text-[13px] mt-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
              </div>
            )}
            <div className="relative w-full aspect-[1/2]">
              <Image
                src={imgHex}
                alt="Hexagon"
                fill
                style={{
                  filter: `brightness(${brightness[i]}%)`,
                  transform: i % 2 === 1 ? "rotate(180deg)" : "rotate(0deg)",
                  transition:
                    "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 33vw"
                priority
              />
              <FaReact
                className={`absolute inset-x-0 mx-auto text-white opacity-90 pointer-events-none 
      ${i % 2 === 0 ? "top-[29%] lg:top-[29%] xl:top-[29%]" : ""} 
      ${i % 2 === 1 ? "bottom-[9%] lg:bottom-[12%] xl:bottom-[15%]" : ""} 
      translate-y-[-50%] 
      text-[1.5rem] md:text-[2.5rem]`}
              />
            </div>

            {/* Label and description below for even indexes */}
            {i % 2 === 0 && (
              <div className="mt-2 text-center max-w-[110px]">
                <h1
                  className="font-semibold text-xs md:text-sm"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.label}
                </h1>

                <p
                  className="text-xs md:text-[13px] mt-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
