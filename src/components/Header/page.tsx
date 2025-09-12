"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoMenuSharp, IoClose } from "react-icons/io5";

export default function Header() {
  const [isFixed, setIsFixed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header
      className={`${
        isFixed ? "fixed" : "relative"
      } top-0 left-0 right-0 z-50 transition ease-in-out duration-500 `}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-white/90">
        <div className="flex items-center gap-2 font-semibold tracking-wide">
          <Image
            src="/image/nexthikes.png"
            alt="nexthikes-logo"
            width={150}
            height={50}
            priority
          />
        </div>
        <div className="hidden md:flex gap-5">
          <Link href="" className="hover:text-white">
            Services
          </Link>
          <Link href="" className="hover:text-white">
            Industries
          </Link>
          <Link href="" className="hover:text-white">
            About Us
          </Link>
          <Link href="" className="hover:text-white">
            Blog
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button className="ml-4 rounded-full flex gap-2 items-center bg-[#FFFFFF3D] px-4 py-2 text-white backdrop-blur-md text-sm">
            Contact Us <FaAngleRight />
          </button>
        </div>

        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenuSharp />}
        </button>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Nav (Drawer) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 text-white">
          <Link
            href="#services"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#industries"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="#about"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#blog"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <button
            className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/30 hover:bg-white/25"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us →
          </button>
        </div>
      </div>
    </header>
  );
}
