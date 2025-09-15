import React from "react";
import { Testimonial } from "./page";

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => (
  <div
    className={`
      flex flex-col items-center justify-end
      rounded-2xl bg-white
      mt-4 
      transition-transform duration-500
      origin-bottom
      ${
        isActive
          ? "scale-110 z-20 border-2 border-orange-300 shadow-md"
          : "scale-90 opacity-80 z-10 border border-transparent"
      }
    `}
    style={{
      minHeight: 410,
      maxWidth: 340,
      minWidth: 250,
      height: 450,
      transformOrigin: "bottom center",
    }}
  >
    <div className="flex flex-col items-center justify-end h-full px-6 py-8">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-32 h-32 object-cover rounded-xl mb-4"
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
