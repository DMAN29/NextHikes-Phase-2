import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const blocks = [
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

const img1 = "/image/digital1.png";

export function DigitalMarkting() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl mt-10 my-10 w-1/2">
        Our Full Spectrum{" "}
        <span className="text-[#ACA9FF]">Digital Marketing Solutions</span>
      </h1>
      <p className="text-2xl text-[#363636]">
        From Visibility to Conversions: Every Channel Mastered
      </p>

      <div className="flex items-center gap-6 mt-12">
        {blocks.map((block, idx) => (
          <div key={block.title} className="flex">
            <div className="w-[360px] rounded-lg p-1 bg-gradient-to-r from-[#8E89FF] to-[#545454] flex-shrink-0">
              <div className="bg-white rounded-lg p-6 h-full flex">
                <Image
                  src={img1}
                  height={80}
                  width={80}
                  alt={block.title}
                  className="mr-2 object-contain"
                />
                <div>
                  <h2 className="font-bold text-xl mb-2">{block.title}</h2>
                  <p className="text-lg text-[#363636]">{block.description}</p>
                </div>
              </div>
            </div>
            <FaArrowLeft
              style={{
                color: "#8F8AFF",
                fontSize: "2rem",
                transform: "rotate(180deg)",
              }}
            />
          </div>
        ))}
        {/* Arrow between blocks */}
      </div>
    </div>
  );
}
