"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function RoadmapStep() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const steps = [
    {
      title: "Free Initial Consultation",
      img: "/image/vector.png",
      desc: "Not sure where to begin? Schedule a free, no-obligation strategy session. We'll assess your needs and outline a clear path forward—no commitment required.",
      imgClass: "w-[200px] h-[120px] md:w-[240px] md:h-[140px]",
    },
    {
      title: "Transparent Pricing & Milestones",
      img: "/image/vector (1).png",
      desc: "We'll give you a clear breakdown of costs, timelines, and milestones so you always know what to expect.",
      imgClass: "w-[200px] h-[100px] md:w-[260px] md:h-[130px]",
    },
    {
      title: "Dedicated Project Manager",
      img: "/image/vector (2).png",
      desc: "You'll have a single point of contact, ensuring seamless communication and that your project stays on track and within budget.",
      imgClass: "w-[220px] h-[110px] md:w-[280px] md:h-[140px]",
    },
  ];

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

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Growth, Our Guarantee. Start With Confidence.
          </h1>
          <p className="text-xl text-gray-600">
            Focus on reducing perceived risk and building trust.
          </p>
        </div>

        {/* Steps */}
        <div className="flex justify-center items-start gap-6 flex-wrap">
          {steps.map((step, i) => (
            <section
              key={i}
              ref={(el) => {
                sectionsRef.current[i] = el; // ✅ TypeScript-safe ref
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="flex flex-col items-center text-center w-[220px] mt-8 md:mt-0 cursor-pointer"
            >
              {/* Heading */}
              <h3 className="text-lg md:text-xl font-semibold mb-15 transition-all duration-300">
                {step.title}
              </h3>

              {/* Top Line */}
              <div
                className="vline-top w-1 bg-gray-800 mb-4"
                style={{ height: 0 }}
                aria-hidden
              />

              {/* Image */}
              {/* Image */}
              <div
                className={`relative ${
                  i === 0
                    ? "step-img-1 w-[200px] h-[130px] md:w-[240px] md:h-[170px]  mt-19"
                    : i === 1
                    ? "step-img-2 w-[200px] h-[100px] md:w-[260px] md:h-[130px]"
                    : "step-img-3 w-[220px] h-[110px] md:w-[280px] md:h-[140px] -mt-12 md:-mt-12 mt-8"
                }`}
              >
                <Image
                  src={step.img}
                  alt={step.title}
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
              <p className="text-sm md:text-base text-gray-600 mt-4 max-w-[200px] leading-relaxed">
                {step.desc}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
