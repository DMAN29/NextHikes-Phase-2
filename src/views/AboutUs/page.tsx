"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdThumbsUp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import WhyUsSlider from "@/components/WhyUsSlider/page";
import CustomerReviewCard from "@/components/CustomerReviewCard/page";

interface AboutUsProps {
  project: any[];
  reviews: any[];
  data: any;
}

const AboutUs = ({ project, reviews, data }: AboutUsProps) => {
  return (
<>            
      <section
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${data?.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 w-full max-w-[894px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Your Partner in Digital Excellence
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 max-w-[90%] sm:max-w-[80%]">
            At NextHikes, we provide intelligent IT solutions that empower
            businesses—from startups to enterprises—to stand out, scale, and
            succeed in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"/"}>
              <button className="px-4 py-2 sm:px-6 sm:py-2 bg-[#FB9326] text-white rounded-lg hover:text-black transition text-sm sm:text-base cursor-pointer">
                Explore Services
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="px-4 py-2 sm:px-6 sm:py-2 bg-[#FB9326] text-white rounded-lg hover:text-black transition text-sm sm:text-base cursor-pointer">
                Request a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Black Section (Heading + Subtitle) */}
      <section className="w-full bg-black flex  justify-center h-70">
        <div className="custom-container !mt-10 w-full px-4 sm:px-6 md:px-10">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              What We Do - Our Expertise
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              We offer a comprehensive suite of services designed to support
              your business journey:
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white flex justify-center relative">
        <div className="custom-container w-full px-4 sm:px-6 md:px-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 
                    -mt-24"
          >
            {" "}
            {(data?.aboutUsContent?.ourExpertise ?? [])?.map(
              (item: any, index: any) => (
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg group h-70"
                  key={index}
                >
                  <Image
                    src={item?.imageUrl}
                    alt={item?.title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      {item?.title}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section>
        <WhyUsSlider data={data?.aboutUsContent?.whyUs} />
      </section>

      <section className="custom-container !my-20">
        <div className="flex items-center mb-5">
          <div className="p-2 bg-[#F37021] rounded-full flex justify-center items-center w-10 h-10 mr-3">
            <IoMdThumbsUp className="text-white" size={22} />
          </div>
          <h4 className="text-[#F37021] font-bold text-xl">Testimonials</h4>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          slidesPerView={1} 
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {(data?.aboutUsContent?.testimonials ?? [])?.map((item: any, idx: any) => (
            <SwiperSlide key={idx}>
              <CustomerReviewCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default AboutUs;
