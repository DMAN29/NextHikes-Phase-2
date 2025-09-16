import Image from "next/image";

export default function MarketPage() {
  const rightPoints = [
    "Build custom e-commerce platforms tailored to your business needs.",
    "Deliver visually stunning, user-friendly designs.",
    "Streamline operations for smoother management and efficiency.",
    "Expand market reach and drive significant revenue growth.",
  ];

  const leftPoints = [
    "Customers expect seamless, secure, and mobile-friendly online shopping.",
    "Outdated or missing e-commerce stores cause loss of sales and revenue.",
    "Modern competitors attract and retain digital shoppers.",
    "Poor online presence harms brand credibility and trust.",
  ];

  return (
    <div className="custom-container !p-6 flex flex-col gap-12">
      {/* Heading */}
      <h2 className="font-semibold text-[#363636] text-4xl sm:text-5xl md:text-6xl leading-tight text-start">
        Don’t Just Compete. <br />
        Dominate the Online Market
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-16">
        {/* Left Points */}
        <ul className="list-disc">
          {leftPoints.map((point, index) => (
            <li key={index} className="text-[#363636] text-xl">
              {point}
            </li>
          ))}
        </ul>

        {/* Center Image */}
        <div className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] relative">
          <Image
            src={"/icons/solution.svg"}
            alt="solution-icon"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
        </div>

        <ul className="list-disc">
          {rightPoints.map((point, index) => (
            <li key={index} className="text-[#363636] text-xl">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-white text-[#363636] capitalize font-medium text-lg px-6 py-3 rounded-full cursor-pointer shadow-[0px_0px_14px_0px_#FF00007D]">
          Contact Our Team
        </button>
      </div>
    </div>
  );
}
