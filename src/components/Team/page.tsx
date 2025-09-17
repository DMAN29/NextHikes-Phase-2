"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const icons: Record<string, JSX.Element> = {
  linkedin: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 
       0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 
       0c0 29.7-24.1 54.3-53.79 
       54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 
       0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 
       42.69-48.3 87.88-48.3 94 0 111.28 61.9 
       111.28 142.3V448z"
      ></path>
    </svg>
  ),
  twitter: <FaXTwitter />,
  facebook: <FaFacebook />,
  github: <FaGithub />,
  instagram: <FaInstagram className=" text-pink-500" />,
};

interface SocialLink {
  url: string;
  platform: "linkedin" | "twitter" | "facebook" | "github" | "instagram";
}
export interface Member {
  name: string;
  designation: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px] rounded-2xl overflow-hidden border-4 border-[#f37021] bg-[#111] group select-none shadow-lg transition-shadow duration-300">
      {/* Profile Image */}
      <Image
        src={member.imageUrl}
        alt={member.name}
        fill
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        draggable={false}
      />

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent text-white">
        <div className="font-bold text-lg sm:text-xl truncate">
          {member.name}
        </div>
        <div className="text-sm sm:text-base opacity-85 truncate">
          {member.designation}
        </div>
      </div>

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
        {member.socialLinks.map((link, linkIdx) => {
          if (!icons[link.platform]) return null;
          return (
            <Link
              key={linkIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f37021] text-3xl transition-transform transform hover:scale-110"
            >
              {icons[link.platform]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const teamMembers: Member[] = [
  {
    name: "Javi A. Torres",
    designation: "Software Engineer",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/javicodes" },
      { platform: "github", url: "https://github.com/javicodes" },
      { platform: "twitter", url: "https://twitter.com/javicodes" },
    ],
  },
  {
    name: "Aisha R. Khan",
    designation: "Product Designer",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/aishadesigns" },
      { platform: "instagram", url: "https://instagram.com/aishadesigns" },
    ],
  },
  {
    name: "Leo Chen",
    designation: "Data Scientist",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/leodatasci" },
      { platform: "twitter", url: "https://twitter.com/leodatasci" },
    ],
  },
  {
    name: "Maria B. Lopez",
    designation: "UI/UX Designer",
    imageUrl: "/image/team-1.webp",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/marialopez" },
      { platform: "facebook", url: "https://facebook.com/marialopez" },
      { platform: "instagram", url: "https://instagram.com/marialopez" },
    ],
  },
];

export default function Team() {
  return (
    <section className="custom-container min-h-screen flex flex-col !mt-20 !mb-20 md:!mb-0">
      {/* <div className="flex flex-col"> */}
      <h3 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  mb-3">
        meet our team at <span className="text-[#F37021] font-semibold">next hikes</span>
      </h3>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
        Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet
        arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis
        turpis malesuada, eu luctus elit dignissim.
      </p>

      <p className="text-[#363636] font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl capitalize my-6 sm:my-8 md:my-9 tracking-[3px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] xl:tracking-[7.56px]">
        core members
      </p>

      {/* </div> */}

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="mySwiper w-full py-8"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center py-4">
              <MemberCard member={member} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
