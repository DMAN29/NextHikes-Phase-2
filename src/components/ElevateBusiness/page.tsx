"use client";

import Link from "next/link";

export default function ElevateBusinessPage() {
  return (
    <div className="bg-[#003049] mb-10">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-white text-2xl font-medium mb-4">
          Elevate your business with professional Development services
        </h1>
        <Link href={"/contact"}>
          <button
            className="bg-white text-[#363636] px-3 py-2 cursor-pointer rounded-full font-medium"
            style={{ boxShadow: "0px 0px 14px 0px #FFFFFFE0" }}
          >
            Connect with our Experts Today
          </button>
        </Link>
      </div>
    </div>
  );
}
