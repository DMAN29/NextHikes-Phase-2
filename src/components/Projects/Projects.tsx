"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const image = "/image/project-bg.jpg";

interface ProjectButton {
  label: string;
  url: string;
}

interface ProjectsData {
  title: string;
  button: ProjectButton;
  projectIds: string[];
}

interface ProjectsProps {
  data: ProjectsData;
}
const localProjects = [
  {
    id: 1,
    title: "Square Feet Home",
    imageUrl:
      "http://35.208.89.220:5500/uploads/7427f7b7-b768-4629-96f3-0101e70a77b6.png",
  },
  {
    id: 2,
    title: "Unzziptruth",
    imageUrl:
      "http://35.208.89.220:5500/uploads/7427f7b7-b768-4629-96f3-0101e70a77b6.png",
  },
  {
    id: 3,
    title: "Relation Secure",
    imageUrl:
      "http://35.208.89.220:5500/uploads/3a02a5ca-11b5-4d90-b126-48e35b9b2021.png",
  },
  {
    id: 4,
    title: "Talk To Guruji",
    imageUrl:
      "http://35.208.89.220:5500/uploads/7427f7b7-b768-4629-96f3-0101e70a77b6.png",
  },
  {
    id: 5,
    title: "Astrowala",
    imageUrl:
      "http://35.208.89.220:5500/uploads/d983a04f-371a-4be9-a23c-b4a11611e8bd.png",
  },
  {
    id: 6,
    title: "Adrustar",
    imageUrl:
      "http://35.208.89.220:5500/uploads/2d03d126-a03a-44df-bc7a-1de77eb4cc11.png",
  },
  {
    id: 7,
    title: "Astroaura",
    imageUrl:
      "http://35.208.89.220:5500/uploads/fa43b4ed-ce68-45bd-9416-51dac1e2dcba.png",
  },
  {
    id: 8,
    title: "Andar Bahar",
    imageUrl:
      "http://35.208.89.220:5500/uploads/7427f7b7-b768-4629-96f3-0101e70a77b6.png",
  },
  {
    id: 11,
    title: "Andar Bahar",
    imageUrl:
      "http://api.nexthikes.in/uploads/63ebb76c-0849-456a-bb3f-50fdaaff22d5.png",
  },
];

export default function Projects({ data }: ProjectsProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex((prev) => (prev + 1) % localProjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Project-specific background colors
  const projectBgMap: Record<string, string> = {
    "square feet home": "bg-green-900 text-white",
    "relation secure": "bg-[#fa3057] text-white",
    "talk to guruji": "bg-white text-black",
    astrowala: "bg-[#ffc300] text-black",
    astroaura: "bg-white text-white",
    "andar bahar": "bg-white text-black",
    aviator: "bg-black text-white",
    "amazing blaze": "bg-white text-black",
    "dragon tiger": "bg-black text-white",
    "ludo battle": "bg-green-500 text-white",
    "block 2048": "bg-teal-600 text-white",
    "offline ludo": "bg-gray-800 text-white",
  };

  return (
    <section className="custom-container bg-white !mt-7 !mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h2 className="text-[#262F2E] text-[25px] md:text-[30px] lg:text-[60px] leading-snug">
          Our <span className="text-[#F37021] font-bold">Projects</span>
        </h2>
        <button className="cursor-pointer bg-[#262F2E] text-white rounded-full px-5 py-2">
          Learn More
        </button>
      </div>
      <div className="my-7">
        <div
          className="
          flex w-full mx-auto my-10 gap-2
          overflow-x-auto
          md:overflow-hidden
          rounded-2xl no-scrollbar
        "
        >
          {localProjects.map((item, index) => {
            const isExpanded = index === expandedIndex;
            const titleKey = item.title.toLowerCase() || "";
            const customBg = projectBgMap[titleKey] || "bg-gray-200 text-black";

            return (
              <div
                key={index}
                onMouseEnter={() => setExpandedIndex(index)}
                className={`
                relative cursor-pointer flex-shrink-0
                h-60 md:h-80
                transition-all duration-700 ease-in-out
                overflow-hidden rounded-2xl
                group flex flex-col items-center justify-center
                ${customBg}
                ${isExpanded ? "md:w-72" : "md:w-14"}
                w-40 md:flex-grow
                
              `}
              >
                <Image
                  src={image}
                  alt={item.title}
                  draggable={false}
                  fill
                  className={`
                  object-cover
                  transition-all duration-300 ease-in-out
                  ${isExpanded && customBg ? "mix-blend-multiply" : ""}
                `}
                />

                <div
                  className={`
                  absolute inset-0 
                  ${isExpanded ? "bg-opacity-30" : "bg-opacity-10"}
                `}
                />

                <div className="relative z-10 text-center px-2 flex flex-col justify-center items-center h-full">
                  <span className="text-3xl pointer-events-none select-none">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt="logo"
                        width={200}
                        height={200}
                      />
                    ) : (
                      <span className="text-4xl">🪐</span>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
