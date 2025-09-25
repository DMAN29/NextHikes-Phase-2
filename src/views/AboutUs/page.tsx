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
import ProfileCard from "@/components/ProfileCard/ProfileCard";

interface AboutUsProps {
  data: any;
}

const AboutUs = ({ data }: AboutUsProps) => {
  return (
<>            
      <section
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${
            data?.bannerImage || "/image/about-banner.jpg"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full max-w-[894px] h-auto min-h-[200px] sm:min-h-[250px] flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {data?.title}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 max-w-[90%] sm:max-w-[80%]">
            {data?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {data?.buttons?.map((item: any, index: any) => (
              <Link href={item.url} key={index}>
                <button className="px-4 py-2 sm:px-6 sm:py-2 bg-[#FB9326] text-white rounded-lg hover:text-black transition text-sm sm:text-base cursor-pointer">
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {data?.ourExpertise && (
        <>
          <section className="w-full bg-black flex  justify-center h-70">
            <div className="custom-container !mt-10 w-full px-4 sm:px-6 md:px-10">
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                  {data?.ourExpertise?.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  {data?.ourExpertise?.subtitle}
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
                {(data?.ourExpertise?.blocks ?? [])?.map(
                  (item: any, index: any) => (
                    <div
                      className="relative rounded-xl overflow-hidden shadow-lg group h-70"
                      key={index}
                    >
                      <Image
                        src={item?.image}
                        alt={item?.name}
                        fill
                        className="object-cover"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <h3 className="text-white font-medium text-sm sm:text-base">
                          {item?.name}
                        </h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {data?.meetOurFounders && (
        <section className="custom-container !my-20 md:min-h-screen md:!my-12">
          <div className="flex flex-col items-center justify-between md:max-w-4xl mx-auto">
            <h3 className="uppercase font-medium text-xl md:text-7xl">
              {data?.meetOurFounders?.title}
            </h3>
            <p className="capitalize text-lg font-normal text-center">
              {data?.meetOurFounders?.subtitle}
            </p>
            <div className="border-2 max-w-3xs w-full border-black my-3"></div>
          </div>
          {data?.meetOurFounders?.founders?.map((item: any, index: any) => (
            <ProfileCard
              avatarUrl={item.image}
              name={item.name}
              title={item.designation}
              key={index}
            />
          ))}
        </section>
      )}

      {data?.whyUs && <WhyUsSlider data={data?.whyUs} />}

      {data?.testimonials && (
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
            {(data?.testimonials ?? [])?.map((item: any, idx: any) => (
              <SwiperSlide key={idx}>
                <CustomerReviewCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  );
};

export default AboutUs;
