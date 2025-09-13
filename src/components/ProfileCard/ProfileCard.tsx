"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

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
interface Member {
  name: string;
  designation: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  let socialLinks: { platform: string; url: string }[] = [];
  try {
    socialLinks =
      typeof member.socialLinks === "string"
        ? JSON.parse(member.socialLinks)
        : member.socialLinks || [];
  } catch (e) {
    socialLinks = [];
  }

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px] rounded-2xl overflow-hidden border-4 border-[#f37021] bg-[#111] group select-none shadow-lg  transition-shadow duration-300">
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
        {socialLinks.map((link, linkIdx) => {
          if (!link || !link.platform || !icons[link.platform]) return null;
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

export default function Horizontal({ data }: { data: Member[] }) {
  return (
    <div className="w-full mx-auto py-8">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {data.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center py-4">
              <MemberCard member={member} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
