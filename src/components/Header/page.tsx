"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  const [isFixed, setIsFixed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("");

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
    {
      url: "/industries/healthcare",
      name: "Healthcare",
    },
  ];

  const serviceMenus = [
    {
      url: "/services/web-dev",
      name: "Web Development",
    },
    {
      url: "/services/app-dev",
      name: "App Development",
    },
    {
      url: "/services/platform-dev",
      name: "Platform Development",
    },
    {
      url: "/services/digital-marketing",
      name: "Digital Marketing",
    },
    {
      url: "/services/ai",
      name: "Artificial Inteligence",
    },
  ];

  const menuItems = [
    {
      title: "Services",
      submenu: serviceMenus,
    },
    {
      title: "Industries",
      submenu: menus,
    },
    {
      title: "About Us",
      url: "",
    },
    {
      title: "Blog",
      url: "",
    },
    {
      title: "Online Payment",
      url: "/online-payment",
    },
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
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.submenu && setDropdownMenu(item.title)}
              onMouseLeave={() => item.submenu && setDropdownMenu("")}
            >
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 cursor-pointer">
                    {item.title}{" "}
                    <FaAngleDown
                      className={`transform transition-transform ${
                        dropdownMenu === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownMenu === item.title && (
                    <div className="absolute scrollbar-hide top-full left-0 w-56 bg-white shadow-lg rounded-xl text-gray-800 flex flex-col py-2 overflow-y-auto max-h-60 transition-all duration-300 opacity-100 scale-100 origin-top z-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-lg font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.url}>{item.title}</Link>
              )}
            </div>
          ))}
        </div>

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
          className="md:hidden flex items-center justify-center text-3xl text-white focus:outline-none bg-[#C2C2C2] rounded-full w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose size={20} />
          ) : (
            <RiMenu3Line color={textColor || "#fff"} size={20} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 text-white">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {item.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setDropdownMenu(
                        dropdownMenu === item.title ? "" : item.title
                      )
                    }
                    className="flex items-center justify-between w-full"
                  >
                    {item.title}
                    <FaAngleDown
                      className={`transition-transform ${
                        dropdownMenu === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownMenu === item.title && (
                    <div className="flex flex-col mt-2 space-y-1 text-black bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-300">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          onClick={() => setMenuOpen(false)}
                          className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-base font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.url}
                  onClick={() => setMenuOpen(false)}
                  className=" py-2"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          <button className="ml-4 rounded-full flex gap-2 items-center bg-white/20 px-4 py-2 text-white backdrop-blur-md text-sm hover:bg-white/30 transition">
            Contact Us <FaAngleRight />
          </button>
        </div>
      </div>
    </header>
  );
}
