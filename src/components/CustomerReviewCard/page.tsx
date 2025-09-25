"use client";

import { CiStar } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";

interface CustomerReviewCardProps {
  name: string;
  profession: string;
  title: string;
  rating: number;
  comment: string;
}

export default function CustomerReviewCard({
  name,
  profession,
  title,
  rating,
  comment,
}: CustomerReviewCardProps) {
  return (
    <div className="relative rounded-2xl flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] text-white p-6 shadow-lg overflow-hidden h-[400px]">
      {/* Decorative quotation mark */}
      <div className="absolute top-2 right-4 text-[120px] text-gray-500 opacity-20 leading-none select-none pointer-events-none">
        <FaQuoteLeft />
      </div>

      {/* Rating */}
      <div className="pt-[70px] pb-5">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <CiStar
              key={i}
              style={{ color: i < rating ? "#F59E0B" : "#4B5563" }}
              fontSize="small"
            />
          ))}
        </div>

        {/* title + Review */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-200 line-clamp-6" dangerouslySetInnerHTML={{__html: comment}}></p>
        </div>

        {/* Name + profession */}
        <div>
          <h4 className="font-semibold text-base">{name}</h4>
          <p className="text-sm text-gray-400">{profession}</p>
        </div>
      </div>
    </div>
  );
}
