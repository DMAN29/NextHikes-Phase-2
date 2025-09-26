
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchGet } from "@/lib/fetcher";

const ChallengeSolution = () => {
  const [challengesSection, setChallengesSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is not set");

        baseUrl = baseUrl.replace(/\/$/, "");
        const res = await fetchGet(`${baseUrl}/market/all`);

        if (res?.data?.challengesSection) {
          setChallengesSection(res.data.challengesSection);
        }
      } catch (err) {
        console.error("Failed to fetch challenges:", err);
        setChallengesSection(null);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading challenges...</p>;
  }

  if (!challengesSection) {
    return <p className="text-center py-10">No challenges available.</p>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Challenges */}
          <div className="relative">
            <div className="flex items-center">
              <div className="relative w-20 h-20 flex items-center justify-center mr-6">
                <Image src="/image/Ellipse 1202.png" alt="Circle Icon" fill className="object-contain" />
                <Image src="/image/challenge.png" alt="Challenge Icon" width={40} height={40} className="absolute z-10" />
              </div>
              <div className="relative w-52 h-52">
                <Image src="/image/arrow.png" alt="arrow Icon" fill className="object-contain" />
                <h2 className="absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold text-black">
                 Challenges
                </h2>
              </div>
            </div>

            <div className="relative ml-10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-900"></div>
              {challengesSection.challenges.map((item, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute -left-4 w-8 h-8 bg-indigo-900 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-8">
                    <p className="text-gray-800 font-medium text-lg leading-relaxed">{item.challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="relative">
            <div className="flex items-center">
              <div className="relative w-20 h-20 flex items-center justify-center mr-6">
                <Image src="/image/Ellipse 1205.png" alt="Circle Icon" fill className="object-contain" />
                <Image src="/image/success.png" alt="Solution Icon" width={40} height={40} className="absolute z-10" />
              </div>
              <div className="relative w-52 h-52">
                <Image src="/image/arrow.png" alt="arrow Icon" fill className="object-contain" />
                <h2 className="absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold text-black">
                Solutions
                </h2>
              </div>
            </div>

            <div className="relative ml-10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-400"></div>
              {challengesSection.challenges.map((item, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute -left-4 w-8 h-8 bg-pink-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-8">
                    <p className="text-gray-800 text-base leading-tight">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSolution;