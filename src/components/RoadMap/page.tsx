"use client";
import React from "react";
import Image from "next/image";

export default function RoadmapStep() {
  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-29">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Your Growth, Our Guarantee. Start With Confidence.
          </h1>
          <p className="text-xl text-gray-600">
            Focus on reducing perceived risk and building trust.
          </p>
        </div>

        {/* Steps Wrapper */}
        <div className="flex justify-center items-start gap-4 flex-wrap ">
          {/* Step 1 */}
          <section className="flex flex-col items-center text-center w-[220px] mt-17">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Free Initial Consultation
            </h3>
             <div className="w-1 h-20 bg-gray-800"></div>
            <Image
              src="/image/vector.png"
              alt="Step 1"
              width={200}
              height={100}
              className="object-contain md:w-[240px] md:h-[190px]"
            />
           <div className="w-1 h-20 bg-gray-800"></div>

            <p className="text-sm md:text-base text-gray-600 mt-2 max-w-[200px] leading-relaxed">
              Not sure where to begin? Schedule a free, no-obligation strategy
              session. We'll assess your needs and outline a clear path forward—
              no commitment required.
            </p>
          </section>

          {/* Step 2 */}
          <section className="flex flex-col items-center text-center w-[220px]">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Transparent Pricing & Milestones
            </h3>
             <div className="w-1 h-20 bg-gray-800"></div>
            <Image
              src="/image/vector (1).png"
              alt="Step 2"
              width={200}
              height={100}
              className="object-contain md:w-[260px] md:h-[130px]"
            />
             <div className="w-1 h-20 bg-gray-800"></div>
            <p className="text-sm md:text-base text-gray-600 mt-2 max-w-[200px] leading-relaxed">
              Schedule a free, no-obligation strategy session. We'll assess your
              needs and outline a clear path forward—no commitment required.
            </p>
          </section>

          {/* Step 3 */}
    <section className="flex flex-col items-center text-center w-[220px] -mt-12 md:-mt-12 mt-8">
     
  <h3 className="text-lg md:text-xl font-semibold mb-2">
    Dedicated Project Manager
  </h3>
  <div className="w-1 h-20  bg-gray-800"></div>
  <Image
    src="/image/vector (2).png"
    alt="Step 3"
    width={220}
    height={110}
    className="object-contain md:w-[280px] md:h-[140px]"
  />
  <div className="w-1 h-20 bg-gray-800"></div>
  <p className="text-sm md:text-base text-gray-600 mt-2 max-w-[200px] leading-relaxed">
    You'll have a single point of contact, ensuring seamless
    communication and that your project stays on track and within
    budget.
  </p>
</section>


        </div>
      </div>
    </div>
  );
}
