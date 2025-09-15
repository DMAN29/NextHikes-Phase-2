"use client";

import Image from "next/image";

export default function Expertise() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="p-[2px] rounded-xl bg-gradient-to-b from-[#67B0E1] to-[#79C9FF] shadow-md"
        >
          <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center h-full">
            <Image
              src="/icons/game.svg"
              alt="game-icon"
              width={80}
              height={80}
              className="mb-4 w-16 sm:w-20 md:w-24 h-auto"
            />
            <h3 className="capitalize font-semibold text-lg sm:text-xl mb-2">
              Mobile Game Development
            </h3>
            <p className="font-normal text-sm sm:text-base text-gray-700">
              Create highly addictive, performance-optimized games for iOS &
              Android—everything from hyper-casual titles to full RPGs with
              seamless gameplay.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
