import React, { useState } from "react";
import Carousel, { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "title 1",
    title: "Co-Founder of SaaSWave",
    image: "/images/testimonial1.jpg",
    feedback: "Amazing experience, truly professional service.",
  },
  {
    id: 2,
    name: "title 2",
    title: "CTO of FinSuite",
    image: "/images/testimonial2.jpg",
    feedback: "Their work ethics are remarkable and results-driven.",
  },
  {
    id: 3,
    name: "title 3",
    title: "Head HR at TechNify",
    image: "/images/testimonial3.jpg",
    feedback: "Highly recommended for anyone seeking top talent.",
  },
  {
    id: 4,
    name: "title 4",
    title: "Product Manager",
    image: "/images/testimonial4.jpg",
    feedback: "They exceeded our expectations in every way.",
  },
  {
    id: 5,
    name: "title 5",
    title: "Marketing Lead",
    image: "/images/testimonial5.jpg",
    feedback: "Creative team with a commitment to excellence.",
  },
  {
    id: 6,
    name: "title 6",
    title: "CEO at DevHub",
    image: "/images/testimonial6.jpg",
    feedback: "A seamless collaboration from start to finish.",
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
