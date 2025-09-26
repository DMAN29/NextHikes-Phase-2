import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

// Responsive breakpoint hook
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("base");
  useEffect(() => {
    if (typeof window === "undefined") return; // Guard for SSR
    const check = () => {
      if (window.innerWidth >= 1280) return setBreakpoint("xl");
      if (window.innerWidth >= 1024) return setBreakpoint("lg");
      if (window.innerWidth >= 768) return setBreakpoint("md");
      setBreakpoint("base");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return breakpoint;
}

const horizontalBlocks = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost Rankings, Visibility, And Leads With Full SEO.",
    icon: "seo",
  },
  {
    title: "Social Media Optimization (SMO) & Marketing (SMM)",
    description: "Grow Brand, Engage, And Drive Traffic With Social Campaigns.",
    icon: "smo",
  },
  {
    title: "Website & App Analytics",
    description:
      "Gain Insights With Analytics And Reports To Optimize Strategy.",
    icon: "analytics",
  },
];

const verticalBlocks = [
  {
    title: "Lead & Ads",
    description: "Generate Leads With Targeted Ads And Remarketing.",
    icon: "/path/to/lead-ads.png",
  },
  {
    title: "Content Marketing",
    description: "Attract And Retain Audiences With Valuable Content.",
    icon: "/path/to/content-marketing.png",
  },
  {
    title: "Content Strategy",
    description:
      "We create blogs, videos, and infographics that educate, engage, and convert.",
    icon: "/path/to/content-strategy.png",
  },
  {
    title: "Marketing Campaigns",
    description:
      "Automated Emails To Nurture Leads, Build Loyalty, And Drive Sales.",
    icon: "/path/to/marketing-campaigns.png",
  },
];

const processData = {
  headline: "Data-Led. Client-Focused. Growth-Oriented.",
  subheadline: "Our Results-Driven Process",
  steps: [
    {
      number: 1,
      title: "Discovery & Research",
      description:
        "We Start By Understanding Your Business, Target Audience, Competitive Landscape, And Specific Growth Objectives.",
    },
    {
      number: 2,
      title: "Strategy & Planning",
      description:
        "Developing A Customized Digital Marketing Roadmap With Clear KPIs, Channel Selection, And A Detailed Plan For Execution.",
    },
    {
      number: 3,
      title: "Implementation & Optimization",
      description:
        "Launching Campaigns, Creating Compelling Assets, Continuous A/B Testing, And Real-Time Adjustments To Maximize Performance.",
    },
    {
      number: 4,
      title: "Reporting & Analysis",
      description:
        "Providing Transparent, Easy-To-Understand Reports With Actionable Insights To Inform Future Strategies And Demonstrate ROI.",
    },
  ],
};

const img1 = "/image/digital1.png";
const img2 = "/image/digital2.png";
const img3 = "/image/digital3.png";
const img4 = "/image/digital4.png";

export default function DigitalMarketing() {
  // For flex arrow-card row
  const horizontalElements = 2 * horizontalBlocks.length - 1;
  const verticalElements = 2 * verticalBlocks.length - 1;
  const arrowGap = "1.5rem";

  // Responsive X values for desktop
  const breakpoint = useBreakpoint(); // Hook now called unconditionally
  const getTranslateX = (index: number) => {
    if (breakpoint === "xl") return index === 0 || index === 3 ? -200 : -100;
    if (breakpoint === "lg") return index === 0 || index === 3 ? -80 : 10;
    if (breakpoint === "md") return index === 0 || index === 3 ? -50 : 30;
    return 0; // base/mobile
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-xl md:text-3xl lg:text-5xl mt-10 my-4 md:my-10 xl:w-1/2 w-11/12 text-center md:text-left">
        Our Full Spectrum{" "}
        <span className="text-[#ACA9FF]">Digital Marketing Solutions</span>
      </h1>
      <p className="text-center md:text-left text-sm md:text-lg lg:text-2xl text-[#363636]">
        From Visibility to Conversions: Every Channel Mastered
      </p>

      {/* Mobile feature cards */}
      <div className="block lg:hidden my-5">
        {[...horizontalBlocks, ...verticalBlocks].map((block, idx) => (
          <div
            key={block.title}
            className="flex items-center w-full rounded-lg p-3 mb-4 border border-[#B7B4FF] bg-white shadow transition px-2"
          >
            <span className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-gray-50 mr-3 rounded-full p-1">
              <Image
                src={img1}
                alt={block.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </span>
            <h2 className="font-medium w-5/6 md:text-xl">{block.title}</h2>
          </div>
        ))}
      </div>

      {/* Desktop features (arrows + cards, regular layout) */}
      <div className="my-10 mb-20 hidden lg:block">
        <div className="flex items-center justify-between w-full mt-12">
          {[...Array(horizontalElements)].map((_, idx) => {
            if (idx % 2 === 0) {
              const cardIndex = Math.floor(idx / 2);
              const block = horizontalBlocks[cardIndex];
              return (
                <div
                  key={block.title}
                  className="w-1/4 rounded-lg p-1 bg-gradient-to-r from-[#8E89FF] to-[#545454]"
                >
                  <div className="border bg-white rounded-lg min-h-52 p-3 flex items-center gap-4">
                    <div className="w-8 h-8 xl:w-16 xl:h-16 flex items-center justify-center">
                      <Image
                        src={img1}
                        height={50}
                        width={50}
                        alt={block.title}
                        className="object-contain shrink-0"
                      />
                    </div>
                    <div className="overflow-hidden flex flex-col justify-center h-full">
                      <h2 className="font-bold xl:text-xl mb-2 line-clamp-3">
                        {block.title}
                      </h2>
                      <p className="text-sm xl:text-lg text-[#363636] line-clamp-3">
                        {block.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <FaArrowLeft
                  key={"arrow_" + idx}
                  style={{
                    color: "#8F8AFF",
                    fontSize: "2rem",
                    transform: "rotate(180deg)",
                    alignSelf: "center",
                  }}
                />
              );
            }
          })}
        </div>

        <div
          className="flex justify-between items-end gap-4"
          style={{ marginTop: arrowGap }}
        >
          {[...Array(verticalElements)].map((_, idx) => {
            if (idx % 2 === 0) {
              const cardIndex = Math.floor(idx / 2);
              const block = verticalBlocks[cardIndex];
              return (
                <div
                  key={block.title}
                  className="flex flex-col items-center w-1/6"
                >
                  <FaArrowLeft
                    style={{
                      color: "#8F8AFF",
                      fontSize: "2rem",
                      transform: "rotate(-90deg)",
                      marginBottom: arrowGap,
                    }}
                  />
                  <div className="w-full rounded-lg p-1 bg-gradient-to-r from-[#8E89FF] to-[#545454]">
                    <div className="bg-white rounded-lg min-h-80 p-2 xl:p-5 flex flex-col justify-center items-center text-center">
                      <div className="w-8 h-8 xl:w-16 xl:h-16 flex items-center justify-center">
                        <Image
                          src={img1}
                          height={50}
                          width={50}
                          alt={block.title}
                          className="object-contain shrink-0"
                        />
                      </div>
                      <h2 className="font-bold xl:text-xl mb-2 line-clamp-2">
                        {block.title}
                      </h2>
                      <p className="text-sm xl:text-lg text-[#363636] line-clamp-5">
                        {block.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <FaArrowLeft
                  key={"arrow_" + idx}
                  style={{
                    color: "#8F8AFF",
                    fontSize: "2rem",
                    transform: "rotate(180deg)",
                    alignSelf: "center",
                  }}
                />
              );
            }
          })}
        </div>
      </div>

      {/* Mobile process, with circle + steps */}
      <div
        className="block md:hidden w-full py-5 px-4"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #EDEBFF 50%, #FFFFFF 99%)",
        }}
      >
        {/* Circle headline with arc */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-[250px] h-[250px] flex items-center justify-center mb-3">
            <Image
              src={img3}
              alt="Process Headline"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Vertical steps list */}
        <div className="w-full flex flex-col gap-4">
          {processData.steps.map((step) => (
            <div key={step.number} className="flex items-center">
              {/* Purple ring image with number overlaid */}
              <div className="relative w-10 h-10 flex-shrink-0 mr-4">
                <Image
                  className="object-contain"
                  src={img4}
                  alt="Step Number Ring"
                  width={40}
                  height={40}
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold select-none">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-medium">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop process, split layout */}
      <div className="hidden md:flex w-full items-stretch my-10 mb-20 md:h-[550px] lg:h-[600px] mx-auto">
        {/* Left side - Image container */}
        <div className="relative w-1/2  aspect-[1.355] justify-center">
          <Image
            src={img2}
            alt="Process Visual"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Right side - fill full height */}
        <div className="w-2/5 h-full ">
          <div className="flex flex-col justify-between h-full py-5">
            {processData.steps.map((step, index) => (
              <div
                key={step.number}
                style={{ transform: `translateX(${getTranslateX(index)}px)` }}
              >
                <div>
                  <h3 className="font-semibold lg:text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
