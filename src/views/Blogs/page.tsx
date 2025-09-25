"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import BlogCard from "@/components/BlogCard/page";
import { useEffect, useRef } from "react";

interface BlogsProps {
  data: any;
}

export default function Blogs({ data }: BlogsProps) {
  const { textColor, setTextColor } = useHeaderColor();
  const prevColorRef = useRef(textColor);

  useEffect(() => {
    prevColorRef.current = textColor;
    setTextColor("#000");

    return () => {
      setTextColor(prevColorRef.current);
    };
  }, ["#000", setTextColor]);
  return (
    <section className="custom-container !my-25 !px-6 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((item: any, index: any) => (
        <BlogCard key={index} data={item} />
      ))}
    </section>
  );
}
