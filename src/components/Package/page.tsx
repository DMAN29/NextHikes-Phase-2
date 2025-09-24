"use client";
import Image from "next/image";
import { packages, PackageItem } from "@/PackageData/page";

export default function PackageSection() {
  return (
    <section className="bg-pink-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Your Transformation Package: What You'll Receive
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-14">
          When you embark on your journey with Nexthikes, you'll receive a
          comprehensive package of spiritual tools and guidance to support your
          transformation:
        </p>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {packages.map((item: PackageItem, index: number) => (
            <div
              key={index}
              className="p-4 md:p-6 shadow-sm bg-white hover:shadow-md transition rounded-xl flex flex-col items-center text-center"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-base sm:text-sm md:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 mb-8 flex items-center justify-center">
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-900 to-pink-500 text-lg sm:text-2xl text-white font-semibold rounded-full shadow-md hover:opacity-90 transition">
            Book Now - Begin your Astrology Journey
          </button>
        </div>
      </div>
    </section>
  );
}
