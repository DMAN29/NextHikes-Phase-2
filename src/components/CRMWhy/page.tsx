import React from "react";
import { FaReact } from "react-icons/fa";
const imgHex = "/image/hex.png";
const hexItems = [
  { label: "All-in-One Solution" },
  { label: "Cloud-Based & Secure" },
  { label: "Customizable & Scalable" },
  { label: "Real-Time Insights" },
  { label: "User-Friendly Interface" },
  { label: "24/7 Support & Training" },
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
            className="flex flex-col items-center group transition-transform duration-300 ease-in-out hover:scale-105
              p-4 bg-white  xl:px-10"
          >
            {/* Label above for odd indexes */}
            {i % 2 === 1 && (
              <span className="mb-2 text-center font-medium text-xs md:text-sm max-w-[110px]">
                {item.label}
              </span>
            )}
            <div className="relative w-full aspect-[1/1]">
              <img
                src={imgHex}
                alt="Hexagon"
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${brightness[i]}%)`,
                  transform: i % 2 === 1 ? "rotate(180deg)" : "rotate(0deg)",
                  transition:
                    "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                }}
              />
              <FaReact
                className={`absolute inset-x-0 mx-auto text-white opacity-90 pointer-events-none 
    ${i % 2 === 0 ? "top-[29%] lg:top-[29%] xl:top-[29%]" : ""} 
    ${i % 2 === 1 ? "bottom-[9%] lg:bottom-[12%] xl:bottom-[15%]" : ""} 
    translate-y-[-50%] 
    text-[1.5rem] md:text-[2.5rem]`}
              />
            </div>
            {/* Label below for even indexes */}
            {i % 2 === 0 && (
              <span className="mt-2 text-center font-medium text-xs md:text-sm max-w-[110px]">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
