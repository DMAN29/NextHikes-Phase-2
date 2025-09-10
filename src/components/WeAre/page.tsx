"use client";

import { FaArrowRight } from "react-icons/fa6";
import StarBorder from "../StarBorder";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function WhoWeAre() {
  const icons = [
    "/icons/ibm.webp",
    "/icons/infosys.webp",
    "/icons/jp-morgan.webp",
    "/icons/splunk.webp",
    "/icons/stripe.webp",
    "/icons/johnson.svg",
  ];
  return (
    <section className="py-20">
      <div className="custom-container flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
        <h4 className="font-semibold text-2xl uppercase tracking-wide text-gray-700">
          Who We Are
        </h4>
        <p className="font-medium text-lg md:text-4xl leading-relaxed text-black px-5">
          Nexthikes is a digital solution for a product agency that relates
          people relations with products, story development, and other services.
        </p>

        <StarBorder
  as="button"
  color="cyan"
  speed="5s"
  className="bg-[linear-gradient(90deg,#F6DDE5_0%,#F37021_51.05%,#F6DDE5_94.71%)] 
             text-black py-4 px-8 text-lg font-medium capitalize 
             cursor-pointer shadow-md hover:scale-105 transition-transform"
>
  Get a free consultation <FaArrowRight />
</StarBorder>

      </div>
      <div className="my-16 flex flex-col gap-10">
        <Marquee speed={50} gradient={false} autoFill direction="left">
          {icons?.map((icon, index) => (
            <div key={index} className="mx-20 flex items-center">
              <Image
                src={icon}
                alt={`icon-${index}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
        <Marquee speed={50} gradient={false} autoFill direction="right">
          {icons?.map((icon, index) => (
            <div key={index} className="mx-20 flex items-center">
              <Image
                src={icon}
                alt={`icon-${index}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
