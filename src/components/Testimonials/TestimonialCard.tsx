import React from "react";
import { Testimonial } from "./page";

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => (
  <div
    className={`
      flex flex-col items-center justify-end
      rounded-2xl bg-white mt-4
      transition-transform duration-500 origin-bottom
      w-[220px] sm:w-[270px] md:w-[330px] xl:w-[350px]
      h-[330px] sm:h-[370px] md:h-[450px] xl:h-[450px]
      ${
        // Active look only on md and up
        isActive
          ? "md:scale-110 md:z-20 md:border-2 md:border-orange-300 md:shadow-md scale-100 z-10 border border-transparent shadow-none"
          : "scale-90 opacity-80 z-10 border border-transparent"
      }
    `}
    style={{
      minHeight: 160,
      transformOrigin: "bottom center",
    }}
  >
    <div className="flex flex-col items-center justify-end h-full px-6 py-8">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-xl mb-4"
        draggable={false}
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/150";
        }}
      />
      <div className="font-bold text-lg">{testimonial.name}</div>
      <div className="text-sm text-gray-500 mb-2">{testimonial.title}</div>
      <div className="text-gray-700 text-center text-base">
        {testimonial.feedback}
      </div>
    </div>
  </div>
);

export default TestimonialCard;
