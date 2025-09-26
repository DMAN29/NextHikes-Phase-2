"use client";

import MagicBento from "../MagicBento";

interface ImageProps {
  name: string;
  image: string;
}

interface ProjectProps {
  data: ImageProps;
}

export default function ProjectHighlights({ data }: ProjectProps) {
  return (
    <section className="md:flex my-10">
      <div className="w-full md:w-1/3 text-center md:text-left md:ml-5 lg:ml-15  flex flex-col  gap-5 justify-center mb-5 md:mb-0  ">
        <h1 className="text-[15px] md:text-5xl xl:text-7xl font-medium md:font-medium leading-relaxed">
          Our Latest Work
        </h1>
        <p className="text-[#82B300] md:text-black md:font-medium md:text-base flex gap-5 items-center mx-auto md:mx-0 lg:text-lg">
          <span>OUR CASE STUDIES</span>
          {/* <FaArrowRight className="hidden md:block" /> */}
        </p>
      </div>
      <div className="w-full md:w-2/3 my-auto">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          cardData={data}
        />
      </div>
      {/* <div className="flex justify-center items-center mt-7">
        <button className="flex md:hidden bg-black w-10 h-10 justify-center items-center text-white rounded-full">
          <FaArrowRight />
        </button>
      </div> */}
    </section>
  );
}
