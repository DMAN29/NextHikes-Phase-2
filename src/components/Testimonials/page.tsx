import React, { useState } from "react";
import Carousel, { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Esther Howard",
    profession: "Co-Founder of SaaSWave",
    image: "/image/testimonial.webp",
  },
  {
    id: 2,
    name: "Esther Howard",
    profession: "CTO of FinSuite",
    image: "/image/testimonial.webp",
  },
  {
    id: 3,
    name: "Esther Howard",
    profession: "Head HR at TechNify",
    image: "/image/testimonial.webp",
  },
  {
    id: 4,
    name: "Esther Howard",
    profession: "Product Manager",
    image: "/image/testimonial.webp",
  },
  {
    id: 5,
    name: "Esther Howard",
    profession: "Marketing Lead",
    image: "/image/testimonial.webp",
  },
  {
    id: 6,
    name: "Esther Howard",
    profession: "CEO at DevHub",
    image: "/image/testimonial.webp",
  },
];

const responsive = {
  largeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 900 }, items: 3 },
  tablet: { breakpoint: { max: 900, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const Testimonials: React.FC = () => {
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const handleBeforeChange = (
    nextSlide: number,
    _state: CarouselInternalState
  ) => setFirstVisibleIndex(nextSlide);
  const getActiveIndex = (idx: number) =>
    idx === (firstVisibleIndex + 1) % testimonials.length;

  return (
    <section
      style={{
        background: `
          radial-gradient(circle at top left, #fed7aa 0%, transparent 60%),
          radial-gradient(circle at bottom right, #fed7aa 0%, transparent 60%),
          #fff
        `,
      }}
      // className="py-16 w-full min-h-[500px]"
    >
      <div className="max-w-4xl mx-auto mb-7">
        <h1 className="text-2xl md:text-5xl xl:text-7xl font-semibold leading-relaxed text-center">
          Featured Testimonials
        </h1>
        <p className="lg:text-2xl gap-5 text-gray-700 text-center px-5">
          Presenting our recent feedbacks — Have a look!
        </p>
      </div>
      <div className="max-w-[1116px] mx-auto relative overflow-visible">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3500}
          beforeChange={handleBeforeChange}
          containerClass="carousel-container"
          itemClass="flex justify-center py-8"
          arrows={false}
          showDots={false}
          centerMode={false}
          customTransition="transform 500ms cubic-bezier(.77,0,.18,1)"
          slidesToSlide={1}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={getActiveIndex(idx)}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
