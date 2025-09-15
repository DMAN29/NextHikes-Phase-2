import React from "react";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    title: string;
    image: string;
    feedback: string;
  };
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => (
  <div
    className={`
      flex flex-col items-center justify-center rounded-2xl
      shadow-xl bg-white m-4 px-6 py-8 transition-transform duration-500
      ${
        isActive
          ? "scale-110 z-20 shadow-2xl border-2 border-orange-200"
          : "scale-90 opacity-80 z-10"
      }
    `}
    style={{
      minHeight: 410,
      maxWidth: 340,
      minWidth: 250,
      transformOrigin: "bottom center", // grow upwards from the bottom
    }}
  >
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-32 h-32 object-cover rounded-xl mb-4"
      draggable={false}
    />
    <div className="font-bold text-lg">{testimonial.name}</div>
    <div className="text-sm text-gray-500 mb-2">{testimonial.title}</div>
    <div className="text-gray-700 text-center text-base">
      {testimonial.feedback}
    </div>
  </div>
);

export default TestimonialCard;
