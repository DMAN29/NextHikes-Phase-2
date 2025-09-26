"use client";

import { FaChevronUp } from "react-icons/fa6";

export default function BackToTop() {
  return (
    <div className="custom-container !px-6 !py-6 flex justify-between items-center">
      <p className="text-[#000]">
        © {new Date().getFullYear()} Copyright Nexthikes All Rights Reserved
      </p>
      <div
        className="items-center justify-center gap-2 cursor-pointer hidden md:flex"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p className="text-black leading-none">Back To Top</p>
        <FaChevronUp className="text-black flex-shrink-0" />
      </div>
    </div>
  );
}
