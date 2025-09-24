// components/ProcessFlow.js
import React from "react";
import Image from "next/image";

const ProcessFlow = () => {
  const boxes = [
    {
      title: "Strategy & Planning",
      description: "Define vision, audience, and roadmap.",
      icon: "/icons/strategy-platform.svg",
    },
    {
      title: "Brand Identity",
      description: "Logo, colors, typography, and messaging.",
      icon: "/icons/brand.svg",
    },
    {
      title: "UI/UX Design",
      description: "Pixel-perfect Figma prototypes and user flows.",
      icon: "/icons/design-platform.svg",
    },
    {
      title: "Web Development",
      description: "High-performing websites and custom apps.",
      icon: "/icons/web-develop.svg",
    },
    {
      title: "App Development",
      description: "Engaging iOS, Android, or cross-platform apps.",
      icon: "/icons/app-develop.svg",
    },
    {
      title: "Digital Marketing",
      description: "SEO, PPC, SMM, and launch campaigns.",
      icon: "/icons/marketing-platform.svg",
    },
  ];

  return (
    <div className="custom-container relative large-dashed-border !p-7 !mb-5 md:min-h-screen">
      <h3 className="capitalize font-semibold text-lg md:text-4xl text-center text-[#363636]">
        Our Full-Stack Launchpad Services
      </h3>
      <p className="capitalize font-normal md:text-3xl my-4 text-center text-[#363636]">
        Every Element You Need for a Powerful Market Entry
      </p>
      <div className="hidden md:flex flex-wrap justify-center gap-8 p-4">
        {boxes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-6 px-3 gradient-border rounded-lg shadow-md text-center w-[216px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-5.5rem)] lg:h-[260px]"
          >
            <Image src={item.icon} alt={item.title} width={64} height={64} />
            <h5 className="mt-4 text-xl font-semibold">{item.title}</h5>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-8 p-4">
        {boxes.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 gradient-border rounded-lg shadow-md text-center w-full"
          >
            <Image src={item.icon} alt={item.title} width={64} height={64} />
            <h5 className=" text-base font-normal">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
