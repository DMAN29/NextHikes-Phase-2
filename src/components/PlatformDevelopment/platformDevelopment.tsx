import Image from "next/image";

const img1 = "/image/platform.png";
const img2 = "/image/platform2.png";
// const img3 = "/image/platform-3.png";

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

export default function PlatformDevelopment() {
  return (
    <div className="mb-30">
      <h1 className="text-4xl text-center font-semibold text-[#363636] mt-10 my-10 max-w-4xl mx-auto  px-4 py-2">
        Navigating the Digital Launchpad: Whats stopping Launching your brand?
      </h1>

      <div className="relative w-full h-[500px] my-10">
        <div className="absolute  -bottom-20 w-[100%] h-[100%]">
          <Image
          src={img1}
          alt="Digital Growth Illustration"
          fill
          priority
          className="w-full h-auto"
        />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-between px-12 py-6">
          {/* Problems - left */}
          <div className=" bg-opacity-90 p-4 rounded-lg w-1/3 text-lg leading-relaxed">
            <ul>
              {data.problems.map(({ title, description }, idx) => (
                <li key={idx} className="mb-6 font-extralight">
                  <span className="font-medium">{title} :</span> {description}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions - right */}
          <div className=" bg-opacity-90 p-4 w-1/3 text-lg leading-relaxed ">
            <ul>
              {data.solutions.map(({ description }, idx) => (
                <li key={idx} className="mb-6">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="w-5/6 mx-auto my-20">
        <Image
          src={img2}
          alt="Digital Growth Illustration"
          width={1280}
          height={950}
          className="w-full h-auto"
        />
      </div> */}
    </div>
  );
}
