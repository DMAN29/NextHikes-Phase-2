import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

// DigitalFlow Component

interface DigitalFlowData {
  title: string;
  secondaryTitle?: string;
  subtitle?: string;
  services: DigitalService[];
}

interface DigitalService {
  title: string;
  description: string;
}

export interface DigitalFlowProps {
  data: DigitalFlowData;
}
export default function DigitalFlow({ data }: DigitalFlowProps) {
  console.log("DigitalFlow data:", data);
  const img1 = "/image/digital1.png";

  //   const horizontalBlocks = [
  //     {
  //       title: "Search Engine Optimization (SEO)",
  //       description: "Boost Rankings, Visibility, And Leads With Full SEO.",
  //       icon: "seo",
  //     },
  //     {
  //       title: "Social Media Optimization (SMO) & Marketing (SMM)",
  //       description:
  //         "Grow Brand, Engage, And Drive Traffic With Social Campaigns.",
  //       icon: "smo",
  //     },
  //     {
  //       title: "Website & App Analytics",
  //       description:
  //         "Gain Insights With Analytics And Reports To Optimize Strategy.",
  //       icon: "analytics",
  //     },
  //   ];

  //   const verticalBlocks = [
  //     {
  //       title: "Lead & Ads",
  //       description: "Generate Leads With Targeted Ads And Remarketing.",
  //       icon: "/path/to/lead-ads.png",
  //     },
  //     {
  //       title: "Content Marketing",
  //       description: "Attract And Retain Audiences With Valuable Content.",
  //       icon: "/path/to/content-marketing.png",
  //     },
  //     {
  //       title: "Content Strategy",
  //       description:
  //         "We create blogs, videos, and infographics that educate, engage, and convert.",
  //       icon: "/path/to/content-strategy.png",
  //     },
  //     {
  //       title: "Marketing Campaigns",
  //       description:
  //         "Automated Emails To Nurture Leads, Build Loyalty, And Drive Sales.",
  //       icon: "/path/to/marketing-campaigns.png",
  //     },
  //   ];

  const horizontalBlocks: DigitalService[] = data.services.slice(0, 3);
  const verticalBlocks: DigitalService[] = data.services.slice(3);

  const horizontalElements = 2 * horizontalBlocks.length - 1;
  const verticalElements = 2 * verticalBlocks.length - 1;
  const arrowGap = "1.5rem";

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-xl md:text-3xl lg:text-5xl mt-10 my-4 md:my-10 xl:w-1/2 w-11/12 text-center md:text-left">
        {data.title}
        <span className="text-[#ACA9FF]">{data.secondaryTitle}</span>
      </h1>
      <p className="text-center md:text-left text-sm md:text-lg lg:text-2xl text-[#363636]">
        {data.subtitle}
      </p>

      {/* Mobile feature cards */}
      <div className="block lg:hidden my-5">
        {[...horizontalBlocks, ...verticalBlocks].map((block) => (
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
    </div>
  );
}
