"use client";
import { useState } from "react";
import Image from "next/image";

interface TechStackProps {
  data: { name: string; imageUrl: string }[];
}

export default function TechStack({ data }: TechStackProps) {
  const [showAll, setShowAll] = useState(false);

  // Limit to 4 if not expanded
  const visibleTechs = showAll ? data : data?.slice(0, 4);

  return (
    <section className="custom-container !py-16 text-[#363636]">
      <div className="px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Development Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {visibleTechs?.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#ED0687] to-[#FE6C0F]">
                <div className="relative w-full max-w-[250px] aspect-[251/277] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={tech.imageUrl}
                    alt={tech.name}
                    width={120}
                    height={120}
                    className="object-contain w-full p-4 sm:p-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {data?.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 cursor-pointer px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-black/80 transition"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        )}
      </div>
    </section>
  );
}
