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
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { textColor } = useHeaderColor();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      url: "/industries/astrology",
      name: "Astrology",
    },
    {
      url: "/industries/e-commerce",
      name: "E-Commerce",
    },
    {
      url: "/industries/gaming",
      name: "Gaming",
    },
    {
      url: "/industries/crm",
      name: "CRM & ERP",
    },
  ];

  const serviceMenus = [
    {
      url: "/services/web-dev",
      name: "Web Development",
    },
    // {
    //   url: "/industries/e-commerce",
    //   name: "E-Commerce",
    // },
    // {
    //   url: "/industries/gaming",
    //   name: "Gaming",
    // },
    // {
    //   url: "/industries/crm",
    //   name: "CRM & ERP",
    // },
  ];

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
        <div className="flex items-center gap-2 font-medium tracking-wide cursor-pointer">
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

        <div className="hidden md:flex gap-8 font-medium text-xl relative">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              Services{" "}
              <FaAngleDown
                className={`transform transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-xl text-gray-800 flex flex-col py-2 overflow-hidden transition-all duration-300 opacity-100 scale-100 origin-top z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceMenus.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
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
                className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-xl text-gray-800 flex flex-col py-2 overflow-hidden transition-all duration-300 opacity-100 scale-100 origin-top z-50"
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                {menus.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
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
            } rounded-full font-medium text-lg flex gap-2 items-center px-4 py-2 cursor-pointer`}
          >
            Contact Us <FaAngleRight />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenuSharp color={textColor || "fff"} />}
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
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              Services{" "}
              <FaAngleDown
                className={`transform transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-xl text-gray-800 flex flex-col py-2 overflow-hidden transition-all duration-300 opacity-100 scale-100 origin-top z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceMenus.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Industries Dropdown */}
          <div>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center justify-between w-full"
            >
              Industries{" "}
              <FaAngleDown
                className={`transition-transform ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {industriesOpen && (
              <div className="flex flex-col pl-4 mt-2 space-y-1">
                {menus.map((item, index) => (
                  <Link key={index} href={item.url} className="px-4 py-2 hover:bg-gray-100">
                    {item.name}
                  </Link>
                ))}
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
