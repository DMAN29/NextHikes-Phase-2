"use client";
import React from "react";
import Image from "next/image";

interface PoojaService {
  id: string;
  title: string;
  price: string;
  icon: string; // Now path to image
  iconBg: string;
  benefits: string[];
}

const poojaServices: PoojaService[] = [
  {
    id: "1",
    title: "Dhana Lakshmi Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon1.png",
    iconBg: "bg-pink-100",
    benefits: [
      "Attract steady wealth and financial prosperity.",
      "Remove obstacles to career growth and income.",
    ],
  },
  {
    id: "2",
    title: "Avahayami Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon2.png",
    iconBg: "bg-purple-100",
    benefits: [
      "Invoke divine blessings for peace and harmony.",
      "Enhance spiritual energy and positive vibrations.",
    ],
  },
  {
    id: "3",
    title: "Bandham Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon3.png",
    iconBg: "bg-purple-100",
    benefits: [
      "Heal emotional wounds and restore relationships.",
      "Strengthen bonds with family and loved ones.",
    ],
  },
  {
    id: "4",
    title: "Sarva Karya Sampoorna Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon4.png",
    iconBg: "bg-purple-100",
    benefits: [
      "Ensure success in personal and professional projects.",
      "Overcome challenges and achieve desired goals.",
    ],
  },
  {
    id: "5",
    title: "Dhana Sampatti Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon5.png",
    iconBg: "bg-pink-100",
    benefits: [
      "Attract steady wealth and financial prosperity.",
      "Remove obstacles to career growth and income.",
    ],
  },
  {
    id: "6",
    title: "Vidyapeetha Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon6.png",
    iconBg: "bg-purple-100",
    benefits: [
      "Improve long-term financial stability and security.",
      "Attract profitable opportunities and investments.",
    ],
  },
  {
    id: "7",
    title: "Bruhat Aarogya Yagna Sampradayini Pooja",
    price: "₹15,000",
    icon: "/image/icon7.png",
    iconBg: "bg-purple-100",
    benefits: [
      "Boost concentration and academic performance.",
      "Support career advancement and intellectual growth.",
    ],
  },
  {
    id: "8",
    title: "Vijayam Prapti Yagna Pooja",
    price: "₹15,000",
    icon: "/image/icon8.png",
    iconBg: "bg-purple-100",
    benefits: [
      "Gain favorable outcomes in legal or property disputes.",
      "Strengthen confidence and leadership in competitive situations.",
    ],
  },
];

const PoojaCard = ({ s }: { s: PoojaService }) => (
  <div className="bg-white p-6 shadow-lg hover:shadow-xl transition hover:scale-105 border group cursor-pointer w-full h-[340px] flex flex-col justify-between">
    <div>
      <h3 className="font-manrope font-extrabold text-[20px] leading-6 tracking-[-0.015em] mb-4">
        {s.title}
      </h3>

      <div className="flex items-start justify-between mb-6">
        <h1 className="flex items-center font-semibold space-x-2 text-xl text-purple-900">
          <span>{s.price}</span>

          {/* Image replaces icon */}
          <div className={`w-10 h-10 flex items-center justify-center ${s.iconBg} rounded-full`}>
            <Image src={s.icon} alt={s.title} width={24} height={24} className="object-contain" />
          </div>
        </h1>
      </div>

      <ul className="space-y-3">
        {s.benefits.map((b, i) => (
          <li
            key={i}
            className="flex items-start space-x-2 text-gray-600 text-sm group-hover:text-gray-800"
          >
            <span className="text-yellow-500">✔</span>
            <span className="max-w-[200px]">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function AstrologyPoojas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ">
          Astrology Poojas You'll Receive
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our Spiritual consultant will call and guide you through the process.
        </p>
      </div>

      {/* Pooja Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {poojaServices.map((s) => (
          <PoojaCard key={s.id} s={s} />
        ))}
      </div>
    </div>
  );
}
