"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import Icon from "../Icon/page";
import { ArrowRight } from "lucide-react";
import { useHeaderColor } from "@/app/context/HeaderColorContext";

interface HeaderProps {
  menuItems?: {
    industry?: Array<{ name: string; slug: string }>;
    services?: Array<{ name: string; slug: string }>;
    about?: { slug?: string };
  };
  links?: Array<{ platform?: string; url?: string }>;
}

export default function Header({ menuItems, links }: HeaderProps) {
  const [isFixed, setIsFixed] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("");
  const { textColor } = useHeaderColor();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY === 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build menu arrays
  const industryMenus =
    menuItems?.industry?.map((item) => ({
      name: item.name,
      url: `/industries/${item.slug}`,
    })) || [];

  const serviceMenus =
    menuItems?.services?.map((item) => ({
      name: item.name,
      url: `/services/${item.slug}`,
    })) || [];

  const menuItemss = [
    {
      title: "Services",
      submenu: serviceMenus,
    },
    {
      title: "Industries",
      submenu: industryMenus,
    },
    {
      title: "About Us",
      url: `/${menuItems?.about?.slug || ""}`,
    },
    {
      title: "Blog",
      url: "/blogs",
    },
    {
      title: "Marketing",
      url: "/marketing",
    },
    {
      title: "Online Payment",
      url: "/online-payment",
    },
  ];

  // Typed Framer Motion variants (TypeScript-safe)
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.98,
      y: -10,
      transition: { type: "spring" as const, damping: 20, stiffness: 300 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isFixed ? "fixed bg-transparent" : "absolute"
      }`}
    >
      <div
        className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between"
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

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 font-medium text-xl relative">
          {menuItemss.map((item, index) => (
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

                  <AnimatePresence>
                    {dropdownMenu === item.title && (
                      <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute w-80 h-60 scrollbar-hide top-full left-0 mt-2 origin-top-left
                 bg-white/70 backdrop-blur-lg border border-slate-200/50
                 shadow-2xl shadow-blue-500/10 rounded-xl z-50 overflow-y-auto"
                      >
                        <div className="flex flex-col">
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div key={subIndex} variants={itemVariants}>
                              <Link
                                href={subItem.url}
                                className="group flex items-center justify-between gap-4 px-4 py-3 
                         text-black hover:text-slate-900 
                         transition-colors duration-200"
                              >
                                <div className="flex items-center gap-4">
                                  {/* <div
                                    className="p-2 bg-slate-100/80 rounded-lg text-blue-600 
                                group-hover:bg-blue-100 transition-all duration-200"
                                  >
                                  </div> */}
                                  <span className="font-medium   text-lg">
                                    {subItem.name}
                                  </span>
                                </div>

                                <ArrowRight
                                  className="w-5 h-5 text-black opacity-0 
                                     group-hover:opacity-100 group-hover:translate-x-1 
                                     transition-all duration-300 ease-in-out"
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.url || "/"}>{item.title}</Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href={"/contact-us"}>
            <button
              className={`${
                textColor === "#fff"
                  ? "text-white bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
                  : "text-black bg-black/10 backdrop-blur-md hover:bg-black/30 transition"
              } rounded-full font-medium text-lg flex gap-2 items-center px-4 py-2 cursor-pointer`}
            >
              Contact Us <FaAngleRight />
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center text-3xl text-white focus:outline-none bg-[#C2C2C2] rounded-full w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <RiMenu3Line color={textColor || "#fff"} size={20} />
        </button>
      </div>

      {/* overlay when mobile menu open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden w-full fixed top-0 right-0 h-full bg-black/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-50 overflow-hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundImage: "url('/image/header-back.webp')" }}
      >
        <div className="flex justify-between items-center gap-3 px-5 py-3">
          <Image
            src={"/image/nexthikes-black.webp"}
            alt="nexthikes-logo"
            width={170}
            height={90}
            priority
          />
          <div className="bg-[#C2C2C2] w-10 h-10 rounded-full flex justify-center items-center">
            <button
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <IoClose size={24} color="white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col px-6 pt-3 pb-13 space-y-6 text-[#363636] font-semibold overflow-y-auto max-h-[calc(100%-4rem)]">
          {menuItemss.map((item, index) => (
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
                    <div className="flex flex-col scrollbar-hide mt-2 space-y-2 max-h-60 text-black bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-y-auto transition-all duration-300">
                      {item.submenu.map((subItem: any, subIndex: any) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          onClick={() => {
                            setMenuOpen(false);
                            setDropdownMenu("");
                          }}
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
                  href={item.url || "/"}
                  onClick={() => setMenuOpen(false)}
                  className="py-2"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* social links / icons */}
          <div className="flex justify-center gap-4 mb-4">
            {links?.map((item: any, index: any) => (
              <Link
                href={item?.url || "#"}
                target="_blank"
                className="text-xl p-2 border border-black aspect-square rounded-full cursor-pointer"
                key={index}
                onClick={() => setMenuOpen(false)}
              >
                <Icon name={item?.platform} color="#000" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
