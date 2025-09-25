"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaPause,
  FaPlay,
} from "react-icons/fa6";
import { useRef, useState } from "react";

interface WhyUsProps {
  data: any;
}

export default function WhyUsSlider({ data }: WhyUsProps) {
  const swiperRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <section className="custom-container !mt-10 rounded-2xl w-full bg-black py-12">
      <div className="flex justify-between items-center pt-7 px-4 sm:px-6 md:px-10">
        <h3 className="text-[#F37021] font-medium text-2xl">Why Us?</h3>
        <div className="flex items-center text-white gap-5">
          <button className="cursor-pointer" onClick={handlePlayPause}>
            {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
          </button>
          <button
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeftLong size={20} />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRightLong size={20} />
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="rounded-xl overflow-hidden my-6"
        >
          {data?.map((slide: any, i: any) => (
            <SwiperSlide key={i}>
              <div className="grid md:grid-cols-[2fr_2fr] gap-6 mb-7">
                <div>
                  <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-70 rounded-lg overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
