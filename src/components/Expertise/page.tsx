"use client";

import Image from "next/image";

interface ExpertiseProps {
  cards?: any;
}

export default function Expertise({ cards }: ExpertiseProps) {
  const dummyData = [
    {
      icon: "https://api.nexthikes.com/uploads/file-1759145004255.png",
      title: "Mobile Game Development",
      description:
        "Create highly addictive, performance-optimized games for iOS & Android—everything from hyper-casual titles to full RPGs with seamless gameplay.",
    },
    {
      icon: "https://api.nexthikes.com/uploads/file-1759145037217.png",
      title: "Web-Based Games & Portals",
      description:
        "Build interactive browser games and robust gaming portals that run smoothly on any device—no downloads required.",
    },
    {
      icon: "https://api.nexthikes.com/uploads/file-1759145071526.png",
      title: "Game Design & Prototyping",
      description:
        "From concept and character design to UI/UX and rapid prototypes, we bring your game ideas to life and refine them early.",
    },
    {
      icon: "https://api.nexthikes.com/uploads/file-1759145104190.png",
      title: "Multiplayer & Social",
      description:
        "Add real-time multiplayer, leaderboards, achievements, and social-sharing features to keep players engaged and connected.",
    },
  ];

  const dataToShow = cards && cards.length > 0 ? cards : dummyData;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
      {dataToShow?.map((item: any, index: any) => (
        <div
          key={index}
          className="p-[2px] rounded-xl bg-gradient-to-b from-[#67B0E1] to-[#79C9FF] shadow-md"
        >
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center h-full">
            <Image
              src={item.icon || "/icons/game.svg"}
              alt="game-icon"
              width={80}
              height={80}
              className="mb-4 w-16 sm:w-20 md:w-24 h-auto"
            />
            <h3 className="capitalize font-semibold text-lg sm:text-xl mb-2">
              {item.title || "Mobile App Development"}
            </h3>
            <p className="font-normal text-sm sm:text-base text-gray-700">
              {item.description || "Mobile App Development"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
