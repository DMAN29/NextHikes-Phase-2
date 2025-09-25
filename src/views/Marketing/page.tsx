"use client";

import Image from "next/image";
import WeAre from "@/components/WeAre/page";
import IndustriesServe from "@/components/IndustriesServe/page";
import ChallengesSolution from "@/components/ChallengesSolution/page";
import Industries from "@/app/industries/[[...slug]]/page";
import Marquee from "react-fast-marquee";
import ChooseNexthikesPage from "@/components/ChooseNexthikes/page";
import RoadMap from "@/components/RoadMap/page";

import ServiceForm from "@/components/ServiceForm/page";
export default function MarketingPage() {
  const icons = [
    "/icons/ibm.webp",
    "/icons/infosys.webp",
    "/icons/jp-morgan.webp",
    "/icons/splunk.webp",
    "/icons/stripe.webp",
    "/icons/johnson.svg",
  ];

  return (
    <main className="w-full min-h-screen">
      <div className="w-full lg:px-20 pt-27 bg-gradient-to-b from-purple-500 to-pink-400"></div>
      {/* 🔹 Hero Section */}
      <section className="w-full flex items-center justify-center px-4 my-30 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <Image
              src="/image/image.png"
              alt="Digital Growth Illustration"
              width={400} // choti kiya
              height={350} // choti kiya
              className="
                w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[420px]
                h-auto
                rounded-[25px] sm:rounded-[30px] lg:rounded-[35px]
                object-cover
              "
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 px-2 md:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Unlock Unstoppable Digital Growth. Trusted by Brands Across India
              & Beyond.
            </h1>

            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              Trusted by Brands Across India & Beyond
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              NextHike IT Solutions is your strategic partner for building
              powerful web, app, and digital marketing ecosystems that deliver
              measurable results and elevate your market presence.
            </p>

            <button className="w-fit px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-950 to-pink-400 hover:opacity-90 transition mx-auto md:mx-0">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 Marquee Section */}
      <section className="my-1 sm:my-8">
        <div className="flex flex-col gap-8 sm:gap-12">
          <Marquee speed={50} gradient={false} autoFill direction="left">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="mx-8 sm:mx-12 md:mx-16 flex items-center"
              >
                <Image
                  src={icon}
                  alt={`icon-${index}`}
                  width={80}
                  height={80}
                  className="object-contain sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
                />
              </div>
            ))}
          </Marquee>

          <Marquee speed={50} gradient={false} autoFill direction="right">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="mx-8 sm:mx-12 md:mx-16 flex items-center"
              >
                <Image
                  src={icon}
                  alt={`icon-${index}`}
                  width={80}
                  height={80}
                  className="object-contain sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 🔹 Other Components */}
      <IndustriesServe />
      <ChallengesSolution />
      <RoadMap />
      <ChooseNexthikesPage />
      <ServiceForm backgroundColor="#452A7C1A" />
    </main>
  );
}
