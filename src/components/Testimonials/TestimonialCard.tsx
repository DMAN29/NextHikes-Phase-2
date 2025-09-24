import React from "react";
import { Testimonial } from "./page";
import Image from "next/image";

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => (
  <div
    className={`
      relative my-17 transition-transform duration-500 origin-bottom
      w-[220px] sm:w-[270px] md:w-[280px]
      h-[330px] sm:h-[370px] md:h-[450px]
      rounded-2xl
      ${
        isActive
          ? "md:scale-110 md:shadow-md scale-100 z-10 p-[2px] bg-[linear-gradient(163.17deg,#AEFF93_-1.22%,rgba(168,252,140,0.1)_70.61%,rgba(166,251,137,0)_98.61%)] "
          : "scale-100 opacity-80 z-10 bg-transparent"
      }
    `}
    style={{
      minHeight: 160,
      transformOrigin: "bottom center",
    }}
  >
    {/* Inner Card */}
    <div className="relative w-full h-full rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-end">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className="object-cover"
      />

      {isActive && (
        <div
          className="absolute bottom-0 left-0 w-full text-white p-4"
          style={{
            background:
              "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h5 className="font-semibold text-lg">{testimonial.name}</h5>
          <p className="text-[#D4D4D8] text-sm font-normal">{testimonial.profession}</p>
        </div>
      )}
    </div>
  </div>
);

export default TestimonialCard;
