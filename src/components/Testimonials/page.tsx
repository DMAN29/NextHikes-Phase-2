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
            640: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} isActive={idx === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
