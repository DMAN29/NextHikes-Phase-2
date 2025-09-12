"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(false); // remove fixed on scroll
      } else {
        setIsFixed(true); // restore fixed at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${isFixed ? "fixed" : "relative"} top-0 left-0 right-0 z-50 transition- ease-in-out duration-500`}>
      <div className="relative mx-auto max-w-6xl px-6 py-5 flex items-center gap-8 text-white/90">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold tracking-wide">
          <Image
            src={"/image/nexthikes.png"}
            alt="nexthikes-logo"
            width={150}
            height={150}
          />
        </div>

        {/* Nav */}
        <nav className="ml-auto hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-white">Services</a>
          <a className="hover:text-white">Industries</a>
          <a className="hover:text-white">About Us</a>
          <a className="hover:text-white">Blog</a>
          <button className="ml-4 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/30 hover:bg-white/25">
            Contact Us →
          </button>
        </nav>
      </div>
    </header>
  );
}
