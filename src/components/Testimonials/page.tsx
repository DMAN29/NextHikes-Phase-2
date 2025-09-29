"use client";

import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Williams",
    profession: "UX Designer at GlobalTech",
    image: "/video/video1.mp4",
  },
  {
    id: 2,
    name: "Alexander Smith",
    profession: "CTO at NextGen Solutions",
    image: "/video/video2.mp4",
  },
  {
    id: 3,
    name: "Isabella Martinez",
    profession: "Marketing Manager at BrightWave",
    image: "/video/video3.mp4",
  },
  {
    id: 4,
    name: "Vikas",
    profession: "Owner of Square Feet Home",
    image: "/video/video4.mp4",
  },
  {
    id: 5,
    name: "David Johnson",
    profession: "Senior Product Manager at InnovateTech",
    image: "/video/video5.mp4",
  },
  {
    id: 6,
    name: "Manish Rana",
    profession: "Head of Product Development at TechSphere Innovations",
    image: "/video/video6.mp4",
  },
];

interface TestimonialProps{
  testimonials: any
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      style={{
        background: `
          radial-gradient(circle at top left, #fed7aa 0%, transparent 60%),
          radial-gradient(circle at bottom right, #fed7aa 0%, transparent 60%),
          #fff
        `,
      }}
    >
      <div className="max-w-4xl mx-auto mb-7">
        <h1 className="text-2xl md:text-5xl xl:text-7xl font-semibold leading-relaxed text-center">
          Featured Testimonials
        </h1>
        <p className="lg:text-2xl gap-5 text-gray-700 text-center px-5">
          Presenting our recent feedbacks — Have a look!
        </p>
      </div>

      <div className="max-w-[1116px] h-[100%] mx-auto relative overflow-visible">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            "0": { slidesPerView: 1.5, spaceBetween: 10 },
            "480": { slidesPerView: 2.5, spaceBetween: 20 },
            "768": { slidesPerView: 3, spaceBetween: 50 },
            "1024": { slidesPerView: 3, spaceBetween: 20 },
            "1280": { slidesPerView: 3, spaceBetween: 20 },
          }}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard
                testimonial={testimonial}
                isActive={idx === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
