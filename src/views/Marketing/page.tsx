"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import IndustriesServe from "@/components/IndustriesServe/page";
import ChallengesSolution from "@/components/ChallengesSolution/page";
import ChooseNexthikesPage from "@/components/ChooseNexthikes/page";
import RoadMap from "@/components/RoadMap/page";
import ServiceForm from "@/components/ServiceForm/page";

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  button: { label: string; url: string };
}

interface MarketingProps {
  data: HeroData | null;
}

// ----------------------
// Hero Section
// ----------------------
const MarketingHero: React.FC<MarketingProps> = ({ data }) => {
  if (!data) return <p className="text-center py-10">Hero data not available.</p>;

  console.log(data)

  return (
    <section className="w-full flex items-center justify-center px-4 my-20 sm:px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-15 sm:gap-10 items-center justify-items-center">
        <div className="flex justify-center">
          <Image
            src={"/image/image.png"}
            alt="Hero banner"
            width={400}
            height={350}
            className="rounded-[25px] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 px-2 md:px-0">
          <h5 className="text-3xl sm:text-3xl md:text-4xl font-semibold mb-5">
            {data.title}
          </h5>
          <p className="text-gray-800 mb-10">{data.subtitle}</p>
          <p className="text-gray-600 mb-7">{data.description}</p>

          <a
            href={data.button.url}
            className="w-fit px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-950 to-pink-400 hover:opacity-90 transition mx-auto md:mx-0"
          >
            {data.button.label}
          </a>
        </div>
      </div>
    </section>
  );
};

// ----------------------
// Marquee Section
// ----------------------
const MarqueeSection: React.FC = () => {
  const icons: string[] = [
    "/icons/ibm.webp",
    "/icons/infosys.webp",
    "/icons/jp-morgan.webp",
    "/icons/splunk.webp",
    "/icons/stripe.webp",
    "/icons/johnson.svg",
  ];

  const renderMarquee = (direction: "left" | "right") => (
    <Marquee speed={50} gradient={false} autoFill direction={direction}>
      {icons.map((icon, index) => (
        <div
          key={`${direction}-${index}`}
          className="mx-8 sm:mx-12 md:mx-16 flex items-center"
        >
          <Image
            src={icon}
            alt={`icon-${index}`}
            width={100}
            height={100}
            className="object-contain sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
          />
        </div>
      ))}
    </Marquee>
  );

  return (
    <section className="my-1 sm:my-8">
      <div className="flex flex-col gap-8 sm:gap-12">
        {renderMarquee("left")}
        {renderMarquee("right")}
      </div>
    </section>
  );
};

// ----------------------
// Full Marketing Page
// ----------------------
const MarketingPage: React.FC = () => {
  // Example hero data (replace with API or props if needed)
  const heroData: HeroData = {
    title: "Empowering Businesses with NextHikes",
    subtitle: "We deliver scalable and innovative solutions.",
    description:
      "Our team helps you navigate complex challenges with cutting-edge technology and industry expertise.",
    image: "/images/hero-banner.webp",
    button: { label: "Get Started", url: "/contact" },
  };

  return (
    <main className="w-full min-h-screen">
      {/* Gradient top bar */}
      <div className="w-full lg:px-20 pt-27 bg-gradient-to-b from-purple-500 to-pink-400"></div>

      {/* Hero Section */}
      <MarketingHero data={heroData} />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Other Components */}
      <IndustriesServe />
      <ChallengesSolution />
      <RoadMap />
      <ChooseNexthikesPage />
      <ServiceForm backgroundColor="#452A7C1A" />
    </main>
  );
};

export default MarketingPage;
