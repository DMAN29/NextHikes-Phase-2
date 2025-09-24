"use client";
import Image from "next/image";

const industries = [
  { name: "Manufacturing", image: "/image/manufacturing.jpg" },
  { name: "Education", image: "/image/education.jpg" },
  { name: "Healthcare", image: "/image/healthcare.jpg" },
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
    <section className="py-12 bg-white">
      {/* 🔹 Container aur wide aur px kam */}
      <div className="max-w-8xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-15">
          Industries We Serve as a Software Development Company
        </h2>

        {/* 🔹 Gap kam kar diya taki width barh jaye */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-3 gap-y-8">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-3 rounded-xl mb-4"
            >
              <div className="relative w-full h-28 sm:h-32 md:h-36 lg:h-40 mb-3">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <p className="font-semibold text-xs sm:text-sm md:text-base w-full">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
