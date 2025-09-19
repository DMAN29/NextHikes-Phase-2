import React from "react";
import Image from "next/image";

const ChallengeSolution = () => {
  const challengesData = [
    {
      id: 1,
      text: '"My Website Isn\'t Converting."',
    },
    {
      id: 2,
      text: '"My Business Needs an App, But Where Do I Start?"',
    },
    {
      id: 3,
      text: '"I\'m Invisible Online, Despite Great Products."',
    },
    {
      id: 4,
      text: "Juggling Multiple Vendors might be a Headache.",
    },
  ];

  const solutionsData = [
    {
      id: 1,
      text: "Strategic websites and online stores that are fast, secure, and designed to maximize sales and user engagement.",
    },
    {
      id: 2,
      text: "Connect directly with your audience through intuitive iOS, Android, or cross-platform apps built for performance and user loyalty.",
    },
    {
      id: 3,
      text: "Amplify your brand, generate qualified leads, and achieve measurable ROI with expert SEO, SMM, PPC, and Content strategies.",
    },
    {
      id: 4,
      text: "The complete package from concept to market impact unify your brand, platforms, and marketing for a powerful debut.",
    },
  ];

  return (
    <div className="py-9">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Challenges Section */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center">
              <div className="relative w-20 h-20 flex items-center justify-center mr-6">
                {/* 🔹 Background Circle Image */}
                <Image
                  src="/image/Ellipse 1202.png"
                  alt="Circle Icon"
                  fill
                  className="object-contain"
                />

                {/* 🔹 Challenge Image on Top */}
                <Image
                  src="/image/challenge.png"
                  alt="Challenge Icon"
                  width={40}
                  height={40}
                  className="absolute z-10"
                />
              </div>

              <div className="relative w-52 h-52">
                {" "}
                {/* width=160px, height=160px */}
                {/* 🔹 Image */}
                <Image
                  src="/image/arrow.png"
                  alt="arrow Icon"
                  fill
                  className="object-contain h-200px w-100px"
                />
                {/* 🔹 Heading on Image */}
                <h2 className="absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold text-black">
                  Challenges
                </h2>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative ml-10">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-900"></div>

              {challengesData.map((challenge, index) => (
                <div key={challenge.id} className="relative mb-12">
                  {/* Circle */}
                  <div className="absolute -left-4 w-8 h-8 bg-indigo-900 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-8">
                    <div className=" p- ">
                      <p className="text-gray-800 font-medium text-lg leading-relaxed">
                        {challenge.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
            {/* ================= SOLUTIONS SECTION ================= */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center ">
              <div className="relative w-20 h-20 flex items-center justify-center mr-6">
                {/* Background Circle */}
                <Image src="/image/Ellipse 1205.png" alt="Circle Icon" fill className="object-contain" />
                {/* Solution Icon */}
                <Image src="/image/success.png" alt="Solution Icon" width={40} height={40} className="absolute z-10" />
              </div>

              <div className="relative w-52 h-52">
                <Image src="/image/arrow.png" alt="arrow Icon" fill className="object-contain" />
                <h2 className="absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold text-black">
                  Solutions
                </h2>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative ml-10">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-400"></div>

              {solutionsData.map((solution, index) => (
                <div key={solution.id} className="relative mb-12">
                  {/* Circle */}
                  <div className="absolute -left-4 w-8 h-8 bg-pink-400 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-8">
                    <div className=" ">
                      <p className="text-gray-800 text-base leading-tight">
                        {solution.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSolution;
