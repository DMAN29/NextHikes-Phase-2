import React from "react";
import { FaReact } from "react-icons/fa";
const imgHex = "./image/hex.png";
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
      {/* Hex Grid */}
      <div className="flex justify-between gap-3">
        {hexItems.map((item, i) => (
          <div
            key={item.label}
            className="flex flex-col items-center group transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {/* Label above for odd indexes */}
            {i % 2 === 1 && (
              <span className="mb-4 text-center font-medium text-sm max-w-[110px]">
                {item.label}
              </span>
            )}
            <div className="relative w-40">
              <img
                src={imgHex}
                alt="Hexagon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: `brightness(${brightness[i]}%)`,
                  transform: i % 2 === 1 ? "rotate(180deg)" : "rotate(0deg)",
                  transition:
                    "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                }}
              />
              <FaReact
                className="absolute inset-x-0 mx-auto text-white opacity-90"
                style={{
                  fontSize: "2.5rem",
                  pointerEvents: "none",
                  top: i % 2 === 0 ? "72px" : undefined,
                  bottom: i % 2 === 1 ? "72px" : undefined,
                }}
              />
            </div>
            {/* Label below for even indexes */}
            {i % 2 === 0 && (
              <span className="mt-4 text-center font-medium text-sm max-w-[110px]">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
