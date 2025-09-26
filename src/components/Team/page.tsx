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

const MemberCard: React.FC<{ member: Member }> = ({ member }: any) => {
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
        {member.socialLinks.map((link: any, linkIdx: any) => {
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
    name: "Yunush",
    designation: "Software Developer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/3460fdb5-f859-4cc2-bb47-370bbd5c1796.png",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/yunushansari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/yunush_17?igsh=dm03bjU5NjJvOWp6",
      },
    ],
  },
  {
    name: "Aman Saini",
    designation: "Software Developer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/0fb9a3e3-6877-4302-9049-93cabae16c92.jpeg",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/aman-saini" },
    ],
  },
  {
    name: "Shubham Bangwal",
    designation: "Frontend developer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/816c782f-9b68-4e61-bae0-e47d1e7c5947.jpg",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com/bangwals2" },
      {
        platform: "linkedin",
        url: "https://www.instagram.com/shubhu_bangwal/",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/shubhu_bangwal/",
      },
    ],
  },
  {
    name: "Abhijeet Kumar",
    designation: "Unity Developer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/513f67bd-f6d8-43ad-9750-135da85d6ed8.jpg",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/abhijeet-kumar-accurate?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      { platform: "twitter", url: "https://x.com/abhijeetk2606?s=21" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/_abhi___jeet___?igsh=MWVrYjQ5MmdsNWMwaQ%3D%3D&utm_source=qr",
      },
    ],
  },
  {
    name: "Ashish Sharma",
    designation: "UI/UX Designer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/1ad9dc00-9a12-4c17-b0dc-ca5ffc609c6e.jpg",
    socialLinks: [
      { platform: "instagram", url: "https://www.instagram.com/aashuux" },
      { platform: "twitter", url: "https://x.com/aashuux" },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/syncwithashish/",
      },
    ],
  },
  {
    name: "Yash Jha",
    designation: "Senior Manager",
    imageUrl:
      "http://35.208.89.220:5500/uploads/1c9e2760-ad03-4140-9344-a3237bda2e7b.jpg",
    socialLinks: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/official_yashjha?igsh=MXdsemc3aGdxdTN5ZA==",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/yash-jha-94a0aa26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    name: "Mayank Singh",
    designation: "Senior Software Engineer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/22d1bbb9-6cfd-4fb0-9915-234bd20b3bf1.jpeg",
    socialLinks: [],
  },
  {
    name: "Tannu Malik",
    designation: "HR Executive",
    imageUrl:
      "http://api.nexthikes.in/uploads/af3f7591-ea74-4d2c-a1b8-f24a7c944885.jpeg",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/tannu-malik-7a1968321/",
      },
    ],
  },
  {
    name: "Annu Malik",
    designation: "Software Developer",
    imageUrl:
      "http://35.208.89.220:5500/uploads/a9104bf1-e3c4-4ebf-a76f-b5309bebbc57.jpeg",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/annu-malik-79821931a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apphttps://www.linkedin.com/in/annu-malik-79821931a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    name: "Harshit Chauhan",
    designation: "Software Developer ",
    imageUrl:
      "http://35.208.89.220:5500/uploads/aaf55258-9146-4354-ae03-f814904f94f8.png",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/harshit-chauhan-4785ba1b8/",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/__haarsh_it__/",
      },
    ],
  },
  {
    name: "Pranjul Sharma",
    designation: "Product Manager",
    imageUrl:
      "http://35.208.89.220:5500/uploads/80a04a96-4770-4b71-8cf8-9c06deeec6c5.jpeg",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/pranjulsharma95325/",
      },
    ],
  },
];

export default function Team() {
  return (
    <section className="custom-container min-h-screen flex flex-col !mt-20 !mb-20 md:!mb-0">
      <h3 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  mb-3">
        meet our team at{" "}
        <span className="text-[#F37021] font-semibold">next hikes</span>
      </h3>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
        Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet
        arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis
        turpis malesuada, eu luctus elit dignissim.
      </p>

      <p className="text-[#363636] font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl capitalize my-6 sm:my-8 md:my-9 tracking-[3px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] xl:tracking-[7.56px]">
        core members
      </p>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "0": { slidesPerView: 1.5, spaceBetween: 10 },
          "480": { slidesPerView: 2.5, spaceBetween: 15 },
          "768": { slidesPerView: 3, spaceBetween: 20 },
          "1024": { slidesPerView: 4, spaceBetween: 30 },
          "1280": { slidesPerView: 5, spaceBetween: 40 },
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
