"use client";
import Image from "next/image";

export default function Astrosteps() {
  const steps = [
    {
      id: 1,
      icon: "/image/frame3.png",
      title: "Unlock & Pay",
      desc: "Enter your phone number to unlock the deal and complete payment via the Razorpay checkout page.",
      connector: "/image/Arc-2.png",
    },
    {
      id: 2,
      icon: "/image/TableList.png",
      title: "Share Details",
      desc: "Submit your Name, Phone, and Date/Time/Place of Birth after payment.",
      connector: "/image/Arc -1.png",
    },
    {
      id: 3,
      icon: "/image/frame2.png",
      title: "Receive Reports",
      desc: "Get all branded reports by email and a call from our spiritual team to schedule the pooja.",
      connector: "/image/Arc-2.png",
    },
    {
      id: 4,
      icon: "/image/frame1.png",
      title: "Enjoy Perks",
      desc: "Receive your gifts at your address and a community group invite..",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:py-16 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-12">
          How We Work In 4 Steps
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 lg:space-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center md:flex-row flex-col">
              {/* Step Box */}
              <div className="flex flex-col items-center text-center space-y-4 md:max-w-[220px]">
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h2 className="font-semibold text-lg sm:text-xl text-[#D162A9]">
                  {step.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
              </div>

              {/* Connector (only on desktop) */}
              {step.connector && index !== steps.length - 1 && (
                <div className="hidden md:flex items-center mx-2">
                  <Image
                    src={step.connector}
                    alt="connector"
                    width={120}
                    height={120}
                    className="object-contain h-19"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button className="w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-900 to-pink-500 text-lg sm:text-2xl text-white font-semibold rounded-full shadow-md cursor-pointer hover:scale-90 transition">
            Book Now - Begin your Astrology Journey
          </button>
        </div>
      </div>
    </section>
  );
}
