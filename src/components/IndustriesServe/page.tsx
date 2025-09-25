"use client";
import Image from "next/image";
import PixelTransition from "../PixelTransition";

const industries = [
  { name: "Manufacturing", image: "/image/manufacturing.jpg" },
  { name: "Education", image: "/image/education.jpg" },
  { name: "Healthcare", image: "/image/Healthcare.jpg" },
  { name: "Insurance", image: "/image/insurance.jpg" },
  { name: "Media & Entertainment", image: "/image/media.jpg" },
  { name: "Agriculture", image: "/image/agriculture.jpg" },
  { name: "Automotive", image: "/image/automotive.jpg" },
  { name: "Fintech", image: "/image/fintech.jpg" },
  { name: "Communication", image: "/image/communication.jpg" },
  { name: "Life Science", image: "/image/lifescience.jpg" },
];

export default function Industries() {
  return (
    <section className="pb-12 bg-white">
      <div className="max-w-8xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Industries We Serve as a Software Development Company
        </h2>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-3 gap-y-8">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-lg mb-4"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                width={200}
                height={200}
                priority
                className="rounded-lg object-cover w-full h-32 sm:h-40 md:h-48"
              />
              <p className="mt-2 text-base md:text-lg font-bold text-gray-800">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
