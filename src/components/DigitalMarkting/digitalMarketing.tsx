import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

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

const img1 = "/image/digital1.png";

export default function DigitalMarkting() {
  // Total elements = 5 (3 cards + 2 arrows)
  const totalElements = 2 * horizontalBlocks.length - 1; // 3 + 2 =5

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl mt-10 my-10 w-1/2">
        Our Full Spectrum{" "}
        <span className="text-[#ACA9FF]">Digital Marketing Solutions</span>
      </h1>
      <p className="text-2xl text-[#363636]">
        From Visibility to Conversions: Every Channel Mastered
      </p>

      <div className="flex items-center justify-between w-full mt-12">
        {[...Array(totalElements)].map((_, idx) => {
          if (idx % 2 === 0) {
            // even index: card
            const cardIndex = Math.floor(idx / 2);
            const block = horizontalBlocks[cardIndex];
            return (
              <div
                key={block.title}
                className="w-1/4 rounded-lg p-1 bg-gradient-to-r from-[#8E89FF] to-[#545454]"
              >
                <div className="bg-white rounded-lg min-h-52 p-3 flex items-center gap-4">
                  <Image
                    src={img1}
                    height={50}
                    width={50}
                    alt={block.title}
                    className="object-contain shrink-0"
                  />
                  <div className="overflow-hidden flex flex-col justify-center h-full">
                    <h2 className="font-bold text-xl mb-2 line-clamp-3">
                      {block.title}
                    </h2>
                    <p className="text-lg text-[#363636] line-clamp-3">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            // odd index: arrow
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

      <div className="flex justify-between items-end mt-4 gap-4">
        {[...Array(totalElements)].map((_, idx) => {
          if (idx % 2 === 0) {
            // even index: card
            const cardIndex = Math.floor(idx / 2);
            const block = verticalBlocks[cardIndex];
            return (
              <div
                key={block.title}
                className="flex flex-col items-center w-1/6"
              >
                Arrow on top (rotated -90deg)
                <FaArrowLeft
                  style={{
                    color: "#8F8AFF",
                    fontSize: "2rem",
                    transform: "rotate(-90deg)",
                    marginBottom: "1rem",
                  }}
                />
                {/* Card */}
                <div className="w-full rounded-lg p-1 bg-gradient-to-r from-[#8E89FF] to-[#545454]">
                  <div className="bg-white rounded-lg min-h-80 p-5 flex flex-col justify-between items-center text-center">
                    <Image
                      src={img1}
                      alt={block.title}
                      width={40}
                      height={40}
                      className="mb-3 object-contain"
                    />
                    <h2 className="font-bold text-xl mb-2 line-clamp-2">
                      {block.title}
                    </h2>
                    <p className="text-lg text-[#363636] line-clamp-5">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            // odd index: arrow
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
  );
}

// verticalBlocks.map((block, idx) => (
//   <div key={block.title} className="flex flex-col items-center w-1/6">
//     {/* Arrow on top (rotated -90deg) */}
//     <FaArrowLeft
//       style={{
//         color: "#8F8AFF",
//         fontSize: "2rem",
//         transform: "rotate(-90deg)",
//         marginBottom: "1rem",
//       }}
//     />
//     {/* Card */}
//     <div className="w-full rounded-lg p-1 bg-gradient-to-r from-[#8E89FF] to-[#545454]">
//       <div className="bg-white rounded-lg min-h-80 p-5 flex flex-col justify-between items-center text-center">
//         <Image
//           src={img1}
//           alt={block.title}
//           width={40}
//           height={40}
//           className="mb-3 object-contain"
//         />
//         <h2 className="font-bold text-xl mb-2 line-clamp-2">
//           {block.title}
//         </h2>
//         <p className="text-lg text-[#363636] line-clamp-5">
//           {block.description}
//         </p>
//       </div>
//     </div>
//   </div>
// ))}
