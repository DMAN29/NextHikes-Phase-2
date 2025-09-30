import Image from "next/image";

const img1 = "/image/solution.webp";
const img2 = "/image/platform2.png";

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  description: string;
}

interface ChallengeSolutionData {
  title: string;
  image: string;
  // imageSM: string;
  challenges: Challenge[];
  solutions: Solution[];
}

interface ChallengeSolutionProps {
  data: ChallengeSolutionData;
}

const data = {
  problems: [
    {
      title: "Fragmented Branding",
      description: "Multiple agencies create inconsistent messaging.",
    },
    {
      title: "Complex & Slow Launches",
      description: "Managing separate teams delays market entry.",
    },
    {
      title: "Uncertain Marketing ROI",
      description: "Poor strategy risks low visibility and weak returns.",
    },
  ],
  solutions: [
    {
      description:
        "NextHike unifies your brand across all platforms for a consistent, memorable presence.",
    },
    {
      description:
        "NextHike handles everything end-to-end, cutting time-to-market and simplifying the process.",
    },
    {
      description:
        "NextHike drives targeted, measurable campaigns that boost traffic, leads, and ROI from day one.",
    },
  ],
};

export default function PlatformDevelopment({ data }: ChallengeSolutionProps) {
  return (
    <div className="mb-3 lg:mb-30">
      <h1 className="text-lg lg:text-4xl text-center font-medium lg:font-semibold text-[#000B22] lg:text-[#010E24] mt-10 lg:my-10 max-w-4xl mx-auto px-4 py-2">
        {data.title}
      </h1>

      <div className="relative w-full h-auto my-0 lg:my-10">
        {/* ----- Desktop Layout ----- */}
        <div className="hidden lg:block relative w-full h-[500px]">
          <div className="absolute -bottom-20 w-full h-full">
            <Image
              src={data.image}
              alt="Digital Growth Illustration"
              fill
              priority
              className="w-full h-auto"
            />
            <h6
              className="absolute bottom-20 left-10 xl:left-30 text-black text-3xl font-semibold uppercase"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
            >
              the challenge
            </h6>
            <h6
              className="absolute bottom-20 right-10 xl:right-30 text-black text-3xl font-semibold uppercase"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
            >
              our solution
            </h6>
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-between px-5 py-6">
            <div className="bg-opacity-90 p-4 rounded-lg w-1/3 text-lg">
              <ul className="pl-5" style={{ listStyleType: "disc" }}>
                {data.challenges.map(({ title, description }, idx) => (
                  <li key={idx} className="mb-6 font-extralight">
                    <span className="font-medium">{title} :</span> {description}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-opacity-90 p-4 w-1/3 text-lg leading-relaxed ">
              <ul className="pl-5" style={{ listStyleType: "disc" }}>
                {data.solutions.map(({ description }, idx) => (
                  <li key={idx} className="mb-6">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ----- Mobile Layout ----- */}
        <div className="flex lg:hidden flex-col items-center gap-6">
          {/* Problems */}
          <div className=" bg-opacity-90 mt-5 px-4 rounded-lg text-lg leading-relaxed w-11/12 md:w-5/6 ">
            <h6
              className="block lg:hidden text-black text-lg md:text-2xl font-semibold uppercase text-center mb-5"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
            >
              the challenge
            </h6>
            <ul className="pl-5" style={{ listStyleType: "disc" }}>
              {data.challenges.map(({ title, description }, idx) => (
                <li
                  key={idx}
                  className="mb-6 font-extralight text-sm md:text-lg"
                >
                  <span className="font-medium">{title} :</span> {description}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={data.image}
            alt="Digital Growth Illustration"
            width={1000}
            height={1000}
            className="object-contain w-full h-[100px] md:h-[280px]  rounded-lg"
          />

          <div className=" bg-opacity-90 p-4 rounded-lg text-base w-11/12 md:w-5/6 ">
            <h6
              className="block lg:hidden text-black text-lg md:text-2xl font-semibold uppercase text-center mb-5"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
            >
              our solution
            </h6>
            <ul className="pl-5" style={{ listStyleType: "disc" }}>
              {data.solutions.map(({ description }, idx) => (
                <li
                  key={idx}
                  className="mb-6 font-extralight text-sm md:text-lg"
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
