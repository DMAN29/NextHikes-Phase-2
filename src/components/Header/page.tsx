"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoMenuSharp, IoClose } from "react-icons/io5";

export default function Header() {
  const [isFixed, setIsFixed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const { textColor } = useHeaderColor();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(textColor);

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isFixed ? "fixed bg-transparent" : "absolute"
      }`}
    >
      <div
        className="relative mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
        style={{ color: textColor || "#fff" }}
      >
        <div className="flex items-center gap-2 font-semibold tracking-wide cursor-pointer">
          {textColor === "#fff" ? (
            <Link href={"/"}>
              <Image
                src="/image/nexthikes.webp"
                alt="nexthikes-logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image
                src="/image/nexthikes-black.webp"
                alt="nexthikes-logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5 font-semibold text-xl">
          <Link href="">Services</Link>
          <Link href="">Industries</Link>
          <Link href="">About Us</Link>
          <Link href="">Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button
            className={`${
              textColor === "#fff"
                ? "text-white bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
                : "text-black bg-white"
            } rounded-full flex gap-2 items-center px-4 py-2`}
          >
            Contact Us <FaAngleRight />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenuSharp />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 text-white">
          <Link href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="#industries" onClick={() => setMenuOpen(false)}>
            Industries
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <button className="ml-4 rounded-full flex gap-2 items-center bg-white/20 px-4 py-2 text-white backdrop-blur-md text-sm hover:bg-white/30 transition">
            Contact Us <FaAngleRight />
          </button>
        </div>
      </div>
    </header>
  );
}
