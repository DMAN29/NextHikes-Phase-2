"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import { useMobileMenu } from "@/app/context/MobileMenuContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import Icon from "../Icon/page";

interface HeaderProps {
  menuItems: any;
  links: any;
}

export default function Header({ menuItems, links }: HeaderProps) {
  const [isFixed, setIsFixed] = useState(true);
  const { menuOpen, setMenuOpen } = useMobileMenu();
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

  const menuItemss = [
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
      url: `/${menuItems?.slug}`,
    },
    {
      title: "Blog",
      url: "",
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

  const linkss = [
    {
      platform: "facebook",
      url: "https://www.facebook.com/nexthikes",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/next_hikes/?igsh=MThydTFxYTg2ZGt6MQ%3D%3D#",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/next-hikes/",
    },
    {
      platform: "twitter",
      url: "https://x.com/i/flow/login?redirect_after_login=%2FNexthikes",
    },
  ];

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
                : "text-black bg-black/10 backdrop-blur-md hover:bg-black/30 transition"
            } rounded-full font-medium text-lg flex gap-2 items-center px-4 py-2 cursor-pointer`}
          >
            Contact Us <FaAngleRight />
          </button>
        </div>

        <button
          className="md:hidden flex items-center justify-center text-3xl text-white focus:outline-none bg-[#C2C2C2] rounded-full w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {<RiMenu3Line color={textColor || "#fff"} size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`md:hidden w-full fixed top-0 right-0 h-full bg-black/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-60 overflow-hidden ${
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
                  className="py-2"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <div className="flex justify-center gap-4 mb-4">
            {linkss?.map((item: any, index: any) => (
              <Link
                href={item?.url}
                target="_blank"
                className={`text-xl p-2 border border-black aspect-square rounded-full cursor-pointer`}
                key={index}
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
