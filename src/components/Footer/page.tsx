"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "../Icon/page";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { UserService } from "@/utils/Services/allApi";

interface FooterProps {
  services: any;
  industry: any;
  page: any;
  contact: any;
}

export default function Footer() {
  const router = useRouter();
  const [service, setService] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [contact, setContact] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const res = await UserService.getServices();
      // const industryRes = await UserService.getIndustry();
      // const contactRes = await UserService.getContact();
      // setService(res);
      // setIndustry(industryRes);
      // setContact(contactRes?.data);
    } catch (error) {}
  };

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

  const links = [
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
    <footer className="bg-white pt-8">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span
              className="text-orange-500 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                src={"/image/nexthikes-black.webp"}
                alt="logo"
                width={231}
                height={96}
                className="cursor-pointer"
              />
            </span>
          </div>
          <div className="flex flex-col mt-5">
            <h5 className="uppercase text-black text-xl">Email address*</h5>
            <input
              type="text"
              className="bg-white text-[#393939] w-full max-w-[320px] py-4 pl-3 px-2 mt-2 focus:outline-none border border-black"
              placeholder="Enter Your Email Address"
            />
            <button className="w-full max-w-[320px] bg-black text-white rounded-[2px] text-center border border-[#000] mt-2 py-4 cursor-pointer">
              Subscribe to our Newsletter
            </button>
          </div>
          {/* <p className="text-sm text-black mb-4 mt-3">{contact?.about}</p>
          <div className="flex md:gap-1 lg:gap-4 gap-4 mt-4">
            {contact?.socialLinks?.map((item: any, index: any) => (
              <Link
                href={item?.url}
                target="_blank"
                className={`text-xl p-2 border border-[#fff] aspect-square rounded-full cursor-pointer`}
                key={index}
              >
                <Icon name={item?.platform} color="#fff" />
              </Link>
            ))}
          </div> */}
          <p className="my-7">
            Next Hikes is a leading provider of IT solutions devoted to
            providing cutting-edge services and technology to enable businesses
            to thrive in the digital age.
          </p>
          <p className="text-black font-normal text-lg">
            *Contacts information
          </p>
          <div className="flex md:gap-1 lg:gap-4 gap-4 mt-4">
            {links?.map((item: any, index: any) => (
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

        <div>
          <h4 className="text-lg font-semibold mb-4 text-black uppercase">
            Services
          </h4>
          {/* <ul className="space-y-2 text-sm flex flex-col text-white">
            {service?.slice(0, 4)?.map((item: any, index: any) => (
              <Link href={`/services/${item.slug}`} key={index}>
                <li className="hover:text-orange-400 cursor-pointer">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul> */}
          <ul className="space-y-2 text-lg font-normal flex flex-col text-black">
            {serviceMenus?.slice(0, 4)?.map((item: any, index: any) => (
              <Link href={item.url} key={index}>
                <li className="hover:text-blue-400 cursor-pointer line-clamp-1">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-black uppercase">
            Industries
          </h4>
          {/* <ul className="space-y-2 text-sm flex flex-col text-white">
            {industry?.slice(0, 4)?.map((item: any, index: any) => (
              <Link href={`/industries/${item.slug}`} key={index}>
                <li className="hover:text-orange-400 cursor-pointer">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul> */}
          <ul className="space-y-2 text-lg font-normal flex flex-col text-black">
            {menus?.slice(0, 4)?.map((item: any, index: any) => (
              <Link href={item.url} key={index}>
                <li className="hover:text-blue-400 cursor-pointer line-clamp-1">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">Contact Us</h4>
          <ul className="space-y-4 text-lg font-normal text-black">
            <li className="flex items-center gap-2">
              <Icon name={"email"} color="#000" />
              <Link
                href={`mailto:${contact?.officialEmail}`}
                className="hover:underline"
              >
                {contact?.officialEmail || "info@nexthikes.com"}
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1">
                <Icon name={"pin"} color="#000" />
              </div>
              <p className="text-black">
                Unit no. - 1137 ,11th Floor , Bhutani Alphathum Sector 90 Noida
              </p>
              {/* {contact?.address} */}
            </li>
            {/* <li className="flex items-center gap-2">
              <Icon name={"email"} />
              <Link
                href={`mailto:${contact?.officialEmail}`}
                className="hover:underline"
              >
                {contact?.officialEmail}
              </Link>
            </li> */}

            {/* <li className="flex items-center gap-2">
              <Icon name={"phone"} />
              <Link
                href={`tel:${contact?.contactNumber}`}
                className="hover:underline"
              >
                {" "}
                {contact?.contactNumber} (9AM - 6PM, Mon - Sat)
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="border-t border-black mt-4 w-full" />
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <p className="text-[#000]">
          © {new Date().getFullYear()} Copyright Nexthikes All Rights Reserved
        </p>
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <p className="text-black">Back To Top</p>
          <FaChevronUp className="text-black" />
        </div>
      </div>
      {/* <div className="border-b border-black w-full mb-0" /> */}
      {/* <p className="text-center px-2 text-[#A7A7A7] mt-4">
        Copyright 2020-2024 
      </p> */}
    </footer>
  );
}
