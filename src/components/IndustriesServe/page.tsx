"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchGet } from "@/lib/fetcher";

interface Industry {
  name: string;
  image: string;
}

interface IndustriesSection {
  title: string;
  industries: Industry[];
}

interface ApiResponse {
  success: boolean;
  data: {
    industriesSection: IndustriesSection;
  };
}

export default function Industries() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [title, setTitle] = useState<string | null>(null); // no default
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is undefined");

        baseUrl = baseUrl.replace(/\/$/, "");

        const res: ApiResponse = await fetchGet(`${baseUrl}/market/all`);

        // Set industries from API
        const fetchedIndustries = res.data?.industriesSection?.industries || [];
        setIndustries(fetchedIndustries);

        // Set title from API, only if it exists
        const fetchedTitle = res.data?.industriesSection?.title;
        setTitle(fetchedTitle ?? null);

      } catch (err) {
        console.error("Failed to fetch industries:", err);
        setIndustries([]);
        setTitle(null); // no fallback
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") || "";

  if (loading) {
    return <p className="text-center py-10">Loading industries...</p>;
  }

  if (!industries.length) {
    return <p className="text-center py-10">No industries available.</p>;
  }

  return (
    <section className="pb-12 bg-white">
      <div className="max-w-8xl mx-auto px-2 sm:px-4">
        {/* Only show title if API returned it */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {title}
          </h2>
        )}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-3 gap-y-8">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-lg mb-4"
            >
              <Image
                src={`${baseUrl}${industry.image}`}
                alt={industry.name}
                width={200}
                height={200}
                priority
                className="rounded-lg object-cover w-full h-32 sm:h-40 md:h-48"
              />
              <p className="mt-2 text-base md:text-lg font-bold text-gray-800">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
