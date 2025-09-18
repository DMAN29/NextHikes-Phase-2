import Banner from "@/components/Banner/page";
import ChooseNexthikesPage from "@/components/ChooseNexthikes/page";
import CRMBanner from "@/components/CRMBanner/page";
import CRMFeatures from "@/components/CRMFeatures/page";
import CRMWhy from "@/components/CRMWhy/page";
import ElevateBusinessPage from "@/components/ElevateBusiness/page";
import Expertise from "@/components/Expertise/page";
import MarketPage from "@/components/Market/page";
import ServiceFormPage from "@/components/ServiceForm/page";
import TechStack from "@/components/TechStack/page";
import WhoAreWe from "@/components/WhoAreWe/page";
import Image from "next/image";

interface IndustriesPageProps {
  slug?: string;
}

export default function IndustriesPage({ slug }: IndustriesPageProps) {
  const img = "/image/crm.png";
  const techStackData = [
    { name: "Next.js", imageUrl: "/icons/nextjs-icon.svg" },
    { name: "React", imageUrl: "/icons/react.svg" },
    { name: "Tailwind CSS", imageUrl: "/icons/tailwind.svg" },
    { name: "Node.js", imageUrl: "/icons/nodejs.svg" },
    { name: "Express.js", imageUrl: "/icons/express.svg" },
    { name: "PostgreSQL", imageUrl: "/icons/postgresql.svg" },
    { name: "MongoDB", imageUrl: "/icons/mongodb.svg" },
    { name: "AWS", imageUrl: "/icons/aws.svg" },
    { name: "Docker", imageUrl: "/icons/docker.svg" },
    { name: "GitHub", imageUrl: "/icons/github.svg" },
  ];

  const data = {
    descriptionBlock: `"{\\"imageUrl\\": \\"/image/astrology-industry.jpg\\", \\"description\\": \\"We specialize in astrology app development, creating personalized and engaging experiences for users seeking astrological insights. Our apps offer features like daily horoscopes, birth chart analysis, and compatibility reports, all designed to help users connect with the stars and understand their cosmic journey.\\"}"`,
  };

  const raw = data.descriptionBlock;

  // First parse → gives you a string
  const once = JSON.parse(raw);

  const parseDescription = (block: any) => {
    try {
      if (typeof block === "string") {
        const once = JSON.parse(block);
        return typeof once === "string" ? JSON.parse(once) : once;
      }
      return block;
    } catch (e) {
      console.error("Error parsing descriptionBlock:", e);
      return {};
    }
  };

  const twice = parseDescription(data?.descriptionBlock);

  const serviceStyles: any = {
    healthcare: {
      image: twice.imageUrl || "/image/medicine-banner.jpg",
    },
    legal: {
      image: twice.imageUrl || "/image/legal-image.jpg",
    },
    "e-commerce": {
      image: twice.imageUrl || "/image/ecomm-industry.jpg",
    },
    astrology: {
      image: twice.imageUrl || "/image/astrology-industry.jpg",
    },
    gaming: {
      image: twice.imageUrl || "/image/gaming-industry.jpg",
    },
    crm: {
      image: twice.imageUrl || "/image/crm-industry.jpg",
    },
    ecomm: {
      image: twice.imageUrl || "/image/ecomm-industry.jpg",
    },
    default: {
      image: twice.imageUrl || "/image/medicine-banner.jpg",
    },
  };

  const keywordMap = [
    {
      styleKey: "healthcare",
      keywords: ["healthcare", "medicine", "hospital", "doctor", "doctors"],
    },
    {
      styleKey: "legal",
      keywords: ["legal", "lawyer", "attorney", "law"],
    },
    {
      styleKey: "gaming",
      keywords: ["game", "gaming", "gamer", "esports"],
    },
    {
      styleKey: "e-commerce",
      keywords: ["e-commerce", "ecomm", "shopping", "retail"],
    },
    {
      styleKey: "astrology",
      keywords: ["astrology", "horoscope", "zodiac"],
    },
    {
      styleKey: "crm",
      keywords: [
        "crm",
        "customer-relationship",
        "customer-management",
        "sales-management",
        "contact-management",
        "lead-management",
        "pipeline",
        "customer-support",
        "client-management",
        "customer-service",
        "marketing-automation",
        "customer-engagement",
        "customer-loyalty",
        "sales-tracking",
        "business-relationships",
        "account-management",
        "customer-data",
        "crm-software",
        "erp",
        "customer-insights",
      ],
    },
  ];

  const currentSlug = typeof slug === "string" ? slug : "";

  const matchedConfig = keywordMap.find((config) =>
    config.keywords.some((keyword) => currentSlug.includes(keyword))
  );

  const currentStyleKey = matchedConfig?.styleKey;

  const currentStyle = matchedConfig
    ? serviceStyles[matchedConfig.styleKey]
    : serviceStyles.default;

  const imageUrl = currentStyle.image;

  return (
    <div className="">
      {matchedConfig?.styleKey === "astrology" && (
        <>
          <Banner
            platform="astrology"
            backgroundColor={["#FCF4EC"]}
            bannerImage="/image/mobile.webp"
            subTitle="Astrology App and Website Development"
            cta={[
              {
                text: "Explore Now",
                url: "",
                backgroundColor: "#ffffff",
                textColor: "#363636",
                borderColor: "#ffffff",
              },
            ]}
            title={`Own your own <br /> Astrology app now !`}
            headerTextColor="#000"
          />
          <ElevateBusinessPage />
          <WhoAreWe data={""} />
          <div className="flex justify-center items-center my-2">
            <Image
              src="/icons/magic.svg"
              alt="magic-svg"
              width={350}
              height={200}
            />
          </div>
        </>
      )}
      {matchedConfig?.styleKey === "e-commerce" && (
        <div>
          <Banner
            platform="e-commerce"
            backgroundColor={[
              "linear-gradient(180deg, #FFFFFF 0%, #E3EBF1 100%)",
            ]}
            bannerImage="/image/e-comm.webp"
            subTitle={`SELL MORE WITH HIGH PERFORMANCE E-COMMERCE PLATFORM`}
            cta={[
              {
                text: "Get a free e-commerce quote",
                url: "",
                backgroundColor:
                  "linear-gradient(90deg, #E0802E 0%, #F6A756 100%)",
                textColor: "#ffffff",
                borderColor: "#ffffff",
              },
              {
                text: "View our case studies",
                url: "",
                textColor: "#000000",
                borderColor: "#67B0E1",
              },
            ]}
            title={`YOUR STORE,<br />
EVERYWHERE`}
            headerTextColor="#000"
          />
          <MarketPage />
          <section className="bg-[url('/image/bg-image.webp')] bg-cover bg-center bg-no-repeat py-20">
            <div className="custom-container ">
              <h3 className="text-[#363636] font-semibold text-2xl md:text-6xl">
                Solutions Built for Every Stage of Your <br /> Business Growth
              </h3>
              <Expertise />
            </div>
          </section>
          <ElevateBusinessPage />
          <ChooseNexthikesPage />
        </div>
      )}

      {matchedConfig?.styleKey === "gaming" && (
        <div>
          <Banner
            platform="gaming"
            backgroundColor={["#000"]}
            bannerImage="/image/game-bg.webp"
            subTitle={``}
            cta={[
              {
                text: "Get a free e-commerce quote",
                url: "",
                backgroundColor:
                  "linear-gradient(90deg, #E0802E 0%, #F6A756 100%)",
                textColor: "#ffffff",
                borderColor: "",
              },
              {
                text: "View Our Portfolio",
                url: "https://next-hikes.framer.website",
                textColor: "#ffffff",
                borderColor: "#B3D8F0",
              },
            ]}
            title={`Level Up Your Vision.<br /> Build the Next Big Game <br />
with NextHikes.`}
            headerTextColor="#fff"
          />

          <TechStack data={techStackData} />
          <ElevateBusinessPage />
          <section className="custom-container relative !my-[100px]">
            <div className="absolute top-5 left-0 w-full max-w-[300px] h-20 bg-[#153A9C] blur-[100px]"></div>
            <h3 className="text-[#363636] font-semibold text-2xl md:text-3xl text-center capitalize mb-5">
              Our Game Development Expertise
            </h3>
            <Expertise />
            <div className="absolute bottom-0 right-0 w-full max-w-[300px] h-20 bg-[#5D1B99] blur-[100px]"></div>
          </section>
          <ChooseNexthikesPage />
        </div>
      )}

      {matchedConfig?.styleKey === "crm" && (
        <div>
          <CRMBanner />
          <Image
            src={img}
            alt="CRM Banner"
            width={1000}
            height={1000}
            priority
            className="w-full h-auto"
          />
          <CRMFeatures />
          <CRMWhy />
        </div>
      )}

      {matchedConfig?.styleKey !== "e-commerce" && (
        <ServiceFormPage backgroundColor="#452A7C1A" />
      )}
    </div>
  );
}
