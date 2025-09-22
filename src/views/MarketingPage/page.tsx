"use client";

import Image from "next/image";
import WeAre from "@/components/WeAre/page";
import IndustriesServe from "@/components/IndustriesServe/page";
import Industries from "@/app/industries/[[...slug]]/page";
import Marquee from "react-fast-marquee";

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
      {/* 🔹 Hero Section */}
      <section className="w-full  flex items-center justify-center px-4 my-40 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <Image
              src="/image/image.png"
              alt="Digital Growth Illustration"
              width={571}
              height={504}
              className="
                w-[280px]           /* default mobile */
                sm:w-[350px]        /* small screens */
                md:w-[420px]        /* tablets */
                lg:w-[480px]        /* laptops */
                xl:w-[500px]        /* desktops */
                2xl:w-[520px]       /* large screens */
                h-auto
                rounded-[30px]      /* smaller radius on mobile */
                sm:rounded-[35px] 
                lg:rounded-[39px]
                object-cover
              "
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left px-2 md:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Unlock Unstoppable Digital Growth. Trusted by Brands Across India & Beyond.
            </h1>

            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              Trusted by Brands Across India & Beyond
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              NextHike IT Solutions is your strategic partner for building powerful web, app,
              and digital marketing ecosystems that deliver measurable results and elevate
              your market presence.
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
              <div key={index} className="mx-8 sm:mx-12 md:mx-16 flex items-center">
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
              <div key={index} className="mx-8 sm:mx-12 md:mx-16 flex items-center">
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
    </main>
  );
}
