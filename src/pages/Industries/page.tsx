import Banner from "@/components/Banner/page";
import ElevateBusinessPage from "@/components/ElevateBusiness/page";
import Expertise from "@/components/Expertise/page";
import ServiceFormPage from "@/components/ServiceForm/page";
import TechStack from "@/components/TechStack/page";
import WhoAreWe from "@/components/WhoAreWe/page";
import Image from "next/image";

interface IndustriesPageProps {
  slug?: string;
}

export default function IndustriesPage({ slug }: IndustriesPageProps) {
  const techStackData = [
    { name: "Next.js", imageUrl: "/image/tech/nextjs.svg" },
    { name: "React", imageUrl: "/image/tech/react.svg" },
    { name: "Tailwind CSS", imageUrl: "/image/tech/tailwind.svg" },
    { name: "Node.js", imageUrl: "/image/tech/nodejs.svg" },
    { name: "Express.js", imageUrl: "/image/tech/express.svg" },
    { name: "PostgreSQL", imageUrl: "/image/tech/postgresql.svg" },
    { name: "MongoDB", imageUrl: "/image/tech/mongodb.svg" },
    { name: "AWS", imageUrl: "/image/tech/aws.svg" },
    { name: "Docker", imageUrl: "/image/tech/docker.svg" },
    { name: "GitHub", imageUrl: "/image/tech/github.svg" },
  ];

  console.log(slug);
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
      keywords: ["crm", "customer-relationship"],
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
        <>
          <Banner
            platform="e-commerce"
            backgroundColor={[
              "linear-gradient(180deg, #FFFFFF 0%, #E3EBF1 100%)",
            ]}
            bannerImage="/image/mobile.webp"
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

      <ServiceFormPage backgroundColor="#452A7C1A" />
    </div>
  );
}
