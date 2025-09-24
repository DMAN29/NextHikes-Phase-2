"use client";
import React from "react";
import Image from "next/image";
import Package from "@/components/Package/page";
import Poojas from "@/components/Poojas/page";
import Astrosteps from "@/components/AstroSteps/page";
import AstroPayment from "@/components/AstroPayment/page";
export default function FeaturesSection() {
  return (
    <div>
    <div className="w-full lg:px-20 pt-26 bg-gradient-to-b from-purple-500 to-pink-400">
</div>
    <section className=" py-19 px-6 md:px-12">
        
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Unlock Your Destiny: <br />
            Personalized Vedic Astrology and Sacred Poojas for a Life of
            Abundance and Purpose.
          </h2>
          <p className=" text-base text-gray-500  md:text-lg leading-relaxed mb-9">
            Are you seeking to overcome obstacles, attract wealth and
            prosperity, and find deeper meaning in your life? At Nexthikes, we
            bridge the gap between ancient Vedic wisdom and modern-day
            challenges. Our personalized astrological reports and powerful,
            sacred poojas, led by the renowned Experts, are designed to help you
            unlock your true potential and manifest the life you’ve always
            desired.
          </p>
          <button className=" bg-gradient-to-r from-purple-900 to-pink-400 text-white  px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
            Get Free Quote
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/image/astro2.webp"
            alt="Astrology wheel"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 mt-25">
        {/* Left Image */}
        <div className="flex-1 relative">
          <div className="absolute -bottom-3 right-2 w-full h-full "></div>
          <Image
            src="/image/astro1.webp"
            alt="Astrology book"
            width={500}
            height={350}
            className="relative z-10 rounded-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Experience the Transformative Power of Ancient Wisdom. Your Journey
            to a Brighter Future Starts Here.
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
            Don’t Just Dream of a Better Life. Manifest It with Nexthikes
            Divine Guidance.
          </p>
          <button className="bg-gradient-to-r from-purple-900 to-pink-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
    <Package/>
    <Poojas />
    <Astrosteps />
    <AstroPayment />
    </div>
  );
}
