"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SubPoint {
  title: string;
  description?: string;
}

interface Point {
  heading: string;
  subpoints: SubPoint[];
}

interface MarketData {
  midTitleSection: {
    title: string;
    subtitle: string;
  };
  detailedPointsSection: {
    title: string;
    points: Point[];
  };
}

export default function RoadmapStep() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);

  const images = [
    "/image/vector.png",
    "/image/vector (1).png",
    "/image/vector (2).png",
  ];

  const imageStyles = [
    "w-[200px] h-[170px] md:w-[240px] md:h-[180px] mt-28", // 1st image
     "w-[200px] h-[70px] md:w-[260px] md:h-[120px] mt-10", // 2nd image
    "w-[220px] h-[110px] md:w-[280px] md:h-[150px] -mt-5", // 3rd image
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/market/all`);
        const json = await res.json();
        setData(json?.data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMouseEnter = (idx: number) => {
    const section = sectionsRef.current[idx];
    if (!section) return;

    const topLine = section.querySelector<HTMLElement>(".vline-top");
    const bottomLine = section.querySelector<HTMLElement>(".vline-bottom");
    const heading = section.querySelector<HTMLElement>("h3");

    if (topLine)
      gsap.to(topLine, { height: 80, duration: 0.5, ease: "power2.out" });
    if (bottomLine)
      gsap.to(bottomLine, { height: 80, duration: 0.5, ease: "power2.out" });
    if (heading)
      gsap.to(heading, {
        y: -10,
        color: "#f97316",
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const handleMouseLeave = (idx: number) => {
    const section = sectionsRef.current[idx];
    if (!section) return;

    const topLine = section.querySelector<HTMLElement>(".vline-top");
    const bottomLine = section.querySelector<HTMLElement>(".vline-bottom");
    const heading = section.querySelector<HTMLElement>("h3");

    if (topLine)
      gsap.to(topLine, { height: 0, duration: 0.5, ease: "power2.out" });
    if (bottomLine)
      gsap.to(bottomLine, { height: 0, duration: 0.5, ease: "power2.out" });
    if (heading)
      gsap.to(heading, {
        y: 0,
        color: "#111827",
        duration: 0.4,
        ease: "power2.out",
      });
  };

  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading...</p>;
  }

  if (!data) {
    return <p className="text-center py-10 text-red-500">No data available</p>;
  }

  // Flatten all subpoints to render as steps
  const allSubpoints: SubPoint[] = data.detailedPointsSection.points.flatMap(
    (point) => point.subpoints
  );

  // Only take first 3 steps
  const visibleSubpoints = allSubpoints.slice(0, 3);

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.midTitleSection.title}
          </h1>
          <p className="text-xl text-gray-600">{data.midTitleSection.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="flex justify-center items-start gap-6 flex-wrap">
          {visibleSubpoints.map((sp, i) => (
            <section
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="flex flex-col items-center text-center w-[220px] mt-8 md:mt-0 cursor-pointer"
            >
              {/* Heading */}
              <h3 className="text-lg md:text-xl font-semibold mb-4 transition-all duration-300">
                {sp.title}
              </h3>

              {/* Top Line */}
              <div
                className="vline-top w-1 bg-gray-800 mb-4"
                style={{ height: 0 }}
                aria-hidden
              />

              {/* Image */}
              <div className={`relative ${imageStyles[i]}`}>
                <Image
                  src={images[i]}
                  alt={sp.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>

              {/* Bottom Line */}
              <div
                className="vline-bottom w-1 bg-gray-800 mt-4"
                style={{ height: 0 }}
                aria-hidden
              />

              {/* Description */}
              {sp.description && (
                <p className="text-sm md:text-base text-gray-600 mt-4 max-w-[200px] leading-relaxed">
                  {sp.description}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
