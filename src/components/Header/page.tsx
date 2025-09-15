"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMenuSharp, IoClose } from "react-icons/io5";

export default function Header() {
  const [isFixed, setIsFixed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false); // dropdown state

  const { textColor } = useHeaderColor();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href={"/"}>
            <Image
              src={
                textColor === "#fff"
                  ? "/image/nexthikes.webp"
                  : "/image/nexthikes-black.webp"
              }
              alt="nexthikes-logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-semibold text-xl relative">
          <Link href="">Services</Link>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            // onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              Industries{" "}
              <FaAngleDown
                className={`transform transition-transform ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {industriesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-black flex flex-col"
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <Link
                  href="/industries/astrology"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Astrology
                </Link>
                {/* <Link
                  href="/industries/e-commerce"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  E-Commerce
                </Link> */}
                {/* <Link
                  href="/industries/education"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Education
                </Link> */}
              </div>
            )}
          </div>

          <Link href="">About Us</Link>
          <Link href="">Blog</Link>
        </div>

        {/* Contact Button */}
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

          {/* Mobile Industries Dropdown */}
          <div>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center justify-between w-full"
            >
              Industries{" "}
              <FaAngleUp
                className={`transition-transform ${
                  industriesOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {industriesOpen && (
              <div className="flex flex-col pl-4 mt-2 space-y-1">
                <Link
                  href="/industries/astrology"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Astrology
                </Link>
                {/* <Link
                  href="/industries/healthcare"
                  onClick={() => setMenuOpen(false)}
                >
                  Healthcare
                </Link>
                <Link
                  href="/industries/education"
                  onClick={() => setMenuOpen(false)}
                >
                  Education
                </Link> */}
              </div>
            )}
          </div>

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
