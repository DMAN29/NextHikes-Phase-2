"use client";
import React, { useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const img = "/Image/WhyUs.png";

const dummyCarouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Feature One",
    description: "Description for feature one goes here.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpgature1.jpg",
  },
  {
    id: 2,
    title: "Feature Two",
    description: "Description for feature two goes here.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
  {
    id: 3,
    title: "Feature Three",
    description: "Description for feature three goes here.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function CRMBanner() {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (carouselRef.current) carouselRef.current.previous();
  };

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next();
  };

  return (
    <section className="relative h-screen overflow-hidden text-white pt-24">
      <div className="absolute inset-0 bg-[#003049] rounded-bl-[250px] -translate-y-10 translate-x-10 -z-1"></div>
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col px-8 ">
          <h1 className="md:text-xl xl:text-4xl font-semibold leading-relaxed mt-10 w-1/2 mx-auto">
            Smart CRM & HRMS Solutions to Power Your Business
          </h1>
          <p className="w-1/2 mx-auto my-5">
            Streamline your customer relationships and workforce management with
            our intelligent, all-in-one platform designed for efficiency,
            transparency, and growth.
          </p>
          <div className="flex gap-5 mx-auto mt-10">
            <button className="flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-lg rounded-full gap-3 shadow-md hover:from-orange-500 hover:to-orange-600 transition">
              Request a Demo
              <FaArrowRight />
            </button>
            <button className="flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-lg rounded-full gap-3 shadow-md hover:from-orange-500 hover:to-orange-600 transition">
              Get Started Today
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div
          className="w-1/2
        "
        >
          <div className="bg-white rounded-tl-[200px] rounded-bl-3xl shadow-2xl p-14 w-full h-[80%] flex flex-col justify-center items-center ml-10 relative">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite={true}
              arrows={false}
              showDots={false}
              swipeable={true}
              draggable={true}
              containerClass="w-full"
              autoPlay={true}
              transitionDuration={2000}
              itemClass="flex items-center justify-center"
              afterChange={(previousSlide, { currentSlide }) =>
                setCurrentSlide(currentSlide)
              }
              customTransition="transform 500ms cubic-bezier(0.23, 1, 0.32, 1)"
            >
              {dummyCarouselItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="relative w-[400px] h-[300px] mb-4">
                    <Image
                      src={img}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center text-[#003049]">
                    {item.title}
                  </h3>
                  <p className="text-center text-lg text-[#34495e]">
                    {item.description}
                  </p>
                </div>
              ))}
            </Carousel>

            {/* Custom navigation positioned bottom-left */}
            <div className="absolute bottom-0 left-0 flex items-center justify-center bg-[#b0b0b0] text-white px-5 py-2 rounded-tr-xl rounded-bl-xl gap-5 shadow-md text-lg font-medium min-w-[180px] ">
              <button
                className="p-2 hover:opacity-70 transition rounded"
                aria-label="Previous Slide"
                onClick={handlePrev}
              >
                <FaArrowLeft />
              </button>
              <span className="mx-2">
                {(currentSlide % dummyCarouselItems.length) + 1} of{" "}
                {dummyCarouselItems.length}
              </span>
              <button
                className="p-2 hover:opacity-70 transition rounded"
                aria-label="Next Slide"
                onClick={handleNext}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
