"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import IndustriesServe from "@/components/IndustriesServe/page";
import ChallengesSolution from "@/components/ChallengesSolution/page";
import ChooseNexthikesPage from "@/components/ChooseNexthikes/page";
import RoadMap from "@/components/RoadMap/page";
import ServiceForm from "@/components/ServiceForm/page";

import { fetchGet } from "@/lib/fetcher";

// ----------------------
// Types
// ----------------------
interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  button: { label: string; url: string };
}

const MarketingHero: React.FC = () => {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") || "";
useEffect(() => {
  const fetchHero = async () => {
    try {
      const res = await fetch(`${baseUrl}/market/all`);
      const data = await res.json();
      console.log("API response:", data);

      // Correct extraction
      if (data?.data?.hero) {
        setHero(data.data.hero);
      } else {
        setHero(null);
      }
    } catch (err) {
      console.error("Failed to fetch hero:", err);
      setHero(null);
    } finally {
      setLoading(false);
    }
  };
  fetchHero();
}, [baseUrl]);


  if (loading) return <p className="text-center py-10">Loading hero...</p>;
  if (!hero) return <p className="text-center py-10">Hero data not available.</p>;

  return (
    <section className="w-full flex items-center justify-center px-4 my-20 sm:px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-15 sm:gap-10 items-center justify-items-center">
        <div className="flex justify-center">
          <Image
            src={hero.image.startsWith("http") ? hero.image : `${baseUrl}${hero.image}`}
            alt={"Hero banner"}
            width={400}
            height={350}
            className="rounded-[25px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 px-2 md:px-0">
          <h5 className="text-3xl sm:text-3xl md:text-4xl font-semibold mb-5">{hero.title}</h5>
          <p className="text-gray-800 mb-10">{hero.subtitle}</p>
          <p className="text-gray-600 mb-7">{hero.description}</p>
             <a
            href={hero.button.url}
            className="w-fit px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-950 to-pink-400 hover:opacity-90 transition mx-auto md:mx-0"
          >
            {hero.button.label}
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
  const icons = [
    "/icons/ibm.webp",
    "/icons/infosys.webp",
    "/icons/jp-morgan.webp",
    "/icons/splunk.webp",
    "/icons/stripe.webp",
    "/icons/johnson.svg",
  ];

  return (
    <section className="my-1 sm:my-8">
      <div className="flex flex-col gap-8 sm:gap-12">
        <Marquee speed={50} gradient={false} autoFill direction="left">
          {icons.map((icon, index) => (
            <div key={index} className="mx-8 sm:mx-12 md:mx-16 flex items-center">
              <Image
                src={icon}
                alt={`icon-${index}`}
                width={80}
                height={80}
                className="object-contain sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
              />
            </div>
          ))}
        </Marquee>

        <Marquee speed={50} gradient={false} autoFill direction="right">
          {icons.map((icon, index) => (
            <div key={index} className="mx-8 sm:mx-12 md:mx-16 flex items-center">
              <Image
                src={icon}
                alt={`icon-${index}`}
                width={80}
                height={80}
                className="object-contain sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// ----------------------
// Full Marketing Page
// ----------------------
const MarketingPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      {/* Gradient top bar */}
      <div className="w-full lg:px-20 pt-27 bg-gradient-to-b from-purple-500 to-pink-400"></div>

      {/* Hero Section */}
      <MarketingHero />

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
