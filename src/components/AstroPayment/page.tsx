"use client";
import React from "react";
import Image from "next/image";

export default function AstroPayment() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-pink-100 py-12 sm:py-16 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 gap-4 sm:gap-6 relative">
          {/* Left Side Content */}
          <div className="max-w-lg text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
              Subscribe to our newsletter
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          {/* Right Side Box (Overlap Effect) */}
          <div className="relative w-full sm:w-80">
            <div className="bg-pink-300 shadow-lg rounded-lg p-4 w-full flex items-center justify-between">
              <span className="text-black font-medium text-sm sm:text-base">
                Your Email
              </span>

              <button
                type="button"
                className="bg-white text-black font-semibold px-3 sm:px-4 py-2 rounded-lg -ml-2 hover:scale-105 transition-transform duration-200 cursor-pointer text-sm sm:text-base"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <section className="relative flex flex-col items-center justify-center py-19 sm:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 w-full h-60 sm:h-72">
          <Image
            src="/image/Header.png"
            alt="Payment Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full px-4 sm:px-6 mt-20">
          {/* Left Image */}
          <div className="hidden md:flex flex-1 justify-center">
            <Image
              src="/image/Illustration.png"
              alt="Left Visual"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="flex-1 w-full max-w-lg text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-5 sm:mb-7">
              Seamless, Secure & Simple Payment
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-5">
              Powered by Razorpay
            </p>
            <p className="text-gray-900 text-sm sm:text-base mb-12 sm:mb-8 leading-relaxed">
              Pay Instantly via PhonePe / GPay / UPI - No Login Required,
              <br /> Just pay & Start your Journey
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex flex-1 justify-center">
            <Image
              src="/image/Illustration.png"
              alt="Right Visual"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        <div className=" flex justify-center">
          <button
            className="

  px-4 sm:px-12
  py-2 sm:py-4
  bg-gradient-to-r from-purple-900 to-pink-500
  text-base sm:text-2xl
  text-white
  font-semibold
  rounded-full
  shadow-md
  cursor-pointer
  transform transition-transform duration-300
  hover:scale-105
"
          >
            Book Now – Begin your Astrology Journey
          </button>
        </div>
      </section>
    </div>
  );
}
