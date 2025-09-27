"use client";

import { useState, useEffect, useRef } from "react";

interface WhyChooseUsPoint {
  name: string;
  content: string;
}
interface WhyChooseUsData {
  title: string;
  subtitle: string;
  points: WhyChooseUsPoint[];
}
interface WhyChooseUsProps {
  data: WhyChooseUsData;
}
const PathIcon = ({ isActive }: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="8"
      fill={isActive ? "#840065" : "#E0E0E0"}
      stroke={isActive ? "#840065" : "#E0E0E0"}
      strokeWidth="2"
    />
  </svg>
);

// Added one more position for the extra step (+1).
const positions = [
  { top: "0%", left: "8%" },
  { top: "20%", left: "25%" },
  { top: "45%", left: "50%" },
  { top: "75%", left: "70%" },
  { top: "95%", left: "90%" },
];

export default function ChooseUsTimeline({ data }: WhyChooseUsProps) {
  const [activeStep, setActiveStep] = useState(0);
  const pathRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [pathLength, setPathLength] = useState(0);

  // Add an extra step as a placeholder or duplicate final step if your data has only 4 points.
  const extendedPoints = [...data.points];
  if (extendedPoints.length < positions.length) {
    // Add an empty or placeholder step for the extra position if needed
    extendedPoints.push({
      name: "Next Component",
      content: "Proceed to the next section.",
    });
  }

  const steps = extendedPoints.map((point, i) => ({
    title: point.name,
    description: point.content,
    position: positions[i] || { top: "0%", left: "0%" },
  }));

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) return;

          const { top, height } = container.getBoundingClientRect();
          const scrollableHeight = height - window.innerHeight;

          let progress = -top / scrollableHeight;
          progress = Math.max(0, Math.min(1, progress));

          const intervals = steps.length - 1; // 4 intervals for 5 steps
          const intervalLength = 1 / intervals;
          const newStep = Math.min(
            intervals,
            Math.round(progress / intervalLength)
          );

          if (newStep !== activeStep) {
            setActiveStep(newStep);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStep, steps.length]);

  const strokeDashoffset =
    pathLength - pathLength * (activeStep / (steps.length - 1));

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      ref={containerRef}
      className="relative w-full custom-container"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden ">
        <div className="w-full mx-auto">
          <div className="text-right max-w-md ml-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              {data.title}
            </h1>
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              {data.subtitle}
            </p>
          </div>
          {/* Mobile Layout */}
          {isMobile ? (
            <div className="flex flex-col space-y-8 mt-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-500 ${
                    activeStep === index
                      ? "bg-white shadow-lg"
                      : "bg-transparent"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <PathIcon isActive={activeStep >= index} />
                    <div>
                      <h3 className="font-semibold text-lg text-black">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop Layout
            <div className="relative w-full h-[400px] md:h-[500px]">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="absolute text-[100px] md:text-[250px] font-medium text-[#C4C4C4] transition-all duration-500"
                  style={{
                    ...steps[index].position,
                    opacity: activeStep === index ? 1 : 0.5,
                    transform: `translate(-50%, -50%) scale(${
                      activeStep === index ? 1 : 0.9
                    })`,
                    zIndex: 1,
                  }}
                >
                  {index + 1}
                </div>
              ))}

              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
              >
                {/* Gray Path */}
                <path
                  ref={pathRef}
                  d="M50 80 C 350 50, 250 250, 450 250 C 650 250, 750 450, 950 400"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="5"
                />
                {/* Purple Active Path */}
                <path
                  d="M50 80 C 350 50, 250 250, 450 250 C 650 250, 750 450, 950 400"
                  fill="none"
                  stroke="#840065"
                  strokeWidth="5"
                  strokeDasharray={pathLength}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                />
              </svg>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-500"
                  style={{
                    ...step.position,
                    zIndex: 2,
                  }}
                >
                  <div className="relative flex flex-col items-center">
                    <div
                      className="text-left w-full max-w-[250px] md:max-w-[280px] p-3 md:p-4 rounded-lg transition-all duration-500"
                      style={{
                        opacity: activeStep === index ? 1 : 0.3,
                        transform: `translateY(${
                          activeStep === index ? "0px" : "20px"
                        })`,
                      }}
                    >
                      <h3 className="font-normal text-base md:text-lg text-[#000000]">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#64607D] font-medium mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-[30px] md:bottom-[50px] left-1/2 -translate-x-1/2 w-32 md:w-48 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#840065] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
