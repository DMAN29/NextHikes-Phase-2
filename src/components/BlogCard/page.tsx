"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogData {
  data: any;
}

export default function BlogCard({ data }: BlogData) {
  return (
    <Link href={`/blogs/${data.slug}`} className="group">
      <div className="cursor-pointer">
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-md bg-gray-800">
          <Image
            src={data.imageUrl || "/image/nexthikes.png"}
            alt="Blog Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000080] to-[#000000]"></div>
          {data.isFeatured && (
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              FEATURED
            </div>
          )}

          <div className="absolute bottom-20 px-6 text-white">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight line-clamp-3">
              {data.title}
            </h2>
          </div>

          <div className="absolute bottom-4 px-6 flex justify-between items-center w-full text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>By Admin</span>
            </div>
            <span>
              {new Date(data.updatedAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
