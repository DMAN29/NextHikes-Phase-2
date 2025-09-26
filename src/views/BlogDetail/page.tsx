"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface DetailProps {
  data: {
    title: string;
    summary?: string;
    content?: string;
    imageUrl?: string;
    publishedAt?: string;
    author?: string;
  };
}

export default function DetailPage({ data }: DetailProps) {
  const { textColor, setTextColor } = useHeaderColor();
  const prevColorRef = useRef(textColor);

  useEffect(() => {
    prevColorRef.current = textColor;
    setTextColor("#000");

    return () => {
      setTextColor(prevColorRef.current);
    };
  }, ["#000", setTextColor]);
  if (!data) {
    return <p className="text-center mt-10 text-red-500">Blog not found</p>;
  }

  return (
    <article className="custom-container mx-auto !mt-10 !py-20 !px-4 md:px-6 !lg:px-8 bg-white">
      {data.imageUrl && (
        <div className="relative w-full h-80 md:h-[28rem] mb-8">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
        {data.title}
      </h1>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-8 border-b pb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span>{data.author || "By Admin"}</span>
        </div>
        {data.publishedAt && (
          <span>
            {new Date(data.publishedAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        )}
      </div>

      {data.summary && (
        <div
          className="text-lg text-gray-700 italic mb-8 leading-relaxed border-l-4 border-indigo-500 pl-4"
          dangerouslySetInnerHTML={{ __html: data?.summary || "" }}
        />
      )}

      {data.content && (
        <div
          className="prose prose-lg text-gray-700 max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-img:rounded-lg prose-a:text-indigo-600 hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      )}
    </article>
  );
}
