"use client";

import { getServicePageBySlug } from "@/api/services";
import AiInnovation from "@/components/AI/AiInnovation";
import AIService from "@/components/AI/aiService";
import FutureSection from "@/components/AI/FutureSection";
import GlobalAIRevenueForecast from "@/components/AI/GlobalAIRevenueForecast";
import GlobalAISkills from "@/components/AI/GlobalAISkills";
import WhyAIForBusiness from "@/components/AI/WhyAIForBusiness";
import AppBenfits from "@/components/AppDevelopment/AppBenfits";
import Banner from "@/components/Banner/page";
import DigitalFlow from "@/components/DigitalMarkting/DigitalFlow";
// import DigitalMarkting from "@/components/DigitalMarkting/digitalMarketing";
import OurProcess from "@/components/DigitalMarkting/OurProcess";
import ElevateBusinessPage from "@/components/ElevateBusiness/page";
import PlatformDevelopment from "@/components/PlatformDevelopment/platformDevelopment";
import ProcessFlow from "@/components/ProcessFlow/page";
import Projects from "@/components/Projects/Projects";
import ServiceFormPage from "@/components/ServiceForm/page";
import Skeleton from "@/components/Skeleton/page";
import Title from "@/components/Title/page";
import ChooseUsTimeline from "@/components/WhyChooseUs/page";
import { useEffect, useState } from "react";

interface ServiceProps {
  slug: any;
  // data?: any;
}

export default function ServicePage({ slug }: ServiceProps) {
  const [loading, setLoading] = useState(false);
  const [serviceData, setServiceData] = useState<any>(null);

  useEffect(() => {
    async function fetchServiceData() {
      setLoading(true);
      try {
        console.log("Fetching data for slug:", slug);
        const data = await getServicePageBySlug(slug);
        setServiceData(data);
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      } finally {
        setLoading(false);
      }
    }
    if (slug) {
      fetchServiceData();
    }
  }, [slug]);

  console.log("Service Data:", serviceData);

  const serviceStyles: any = {
    "web-development": {
      bgColor: "bg-[#DEF4FF]",
      title: "Web Development",
      textColor: "text-[#840065]",
    },
    "seo-services": {
      bgColor: "bg-[#E5FFDE]",
      title: "SEO Services",
      textColor: "text-[#F37021]",
    },
    "app-development": {
      bgColor: "bg-[#FFF1C2]",
      title: "App Development",
      textColor: "text-[#F37021]",
    },
    "platform-development": {
      bgColor: "bg-[#FFF1C2]",
      title: "Platform Development",
      textColor: "text-[#F37021]",
    },
    ai: {
      bgColor: "bg-[#FFF1C2]",
      title: "Artificial Intelligence",
      textColor: "text-[#F37021]",
    },
    "digital-marketing": {
      bgColor: "bg-[#FFF4F4]",
      title: "Digital Marketing",
      textColor: "text-[#7D0101]",
    },
    marketing: {
      bgColor: "bg-[#FFF4F4]",
      title: "Digital Marketing",
      textColor: "text-[#7D0101]",
    },
    default: {
      bgColor: "bg-gray-100",
      title: "Our Service",
      textColor: "text-[#840065]",
    },
  };

  const keywordMap = [
    {
      styleKey: "web-development",
      keywords: [
        "web",
        "website",
        "frontend",
        "UI",
        "UX",
        "HTML",
        "CSS",
        "JavaScript",
        "responsive",
        "interactive",
        "design",
        "layout",
        "accessibility",
        "performance",
        "SEO",
        "animations",
        "navigation",
        "landing-page",
        "portfolio",
        "business-site",
      ],
    },
    {
      styleKey: "seo-services",
      keywords: ["seo", "search-engine", "optimization"],
    },
    {
      styleKey: "app-development",
      keywords: [
        "mobile",
        "app",
        "iOS",
        "Android",
        "native",
        "cross-platform",
        "UI",
        "UX",
        "design",
        "prototype",
        "navigation",
        "performance",
        "responsive",
        "interactive",
        "user-friendly",
        "accessibility",
        "push notifications",
        "offline mode",
        "app store",
        "google play",
        "app-dev",
      ],
    },
    {
      styleKey: "digital-marketing",
      keywords: [
        "marketing",
        "digital",
        "ads",
        "social-media",
        "SEO",
        "content",
        "email",
        "branding",
        "campaign",
        "PPC",
        "analytics",
        "growth",
        "strategy",
        "influencer",
        "engagement",
        "conversion",
        "traffic",
        "leads",
        "retargeting",
        "optimization",
      ],
    },
    {
      styleKey: "ai",
      keywords: [
        "AI",
        "machine-learning",
        "deep-learning",
        "artificial-intelligence",
        "ai",
        "neural-networks",
        "natural-language-processing",
        "NLP",
        "computer-vision",
        "robotics",
        "reinforcement-learning",
        "supervised-learning",
        "unsupervised-learning",
        "predictive-modeling",
        "generative-ai",
        "chatbots",
        "automation",
        "cognitive-computing",
        "data-science",
        "big-data",
        "intelligent-systems",
        "AI-algorithms",
        "AI-research",
        "AI-tools",
        "AI-solutions",
      ],
    },
    {
      styleKey: "platform-development",
      keywords: [
        "platform",
        "platform-dev",
        "API",
        "backend",
        "server",
        "database",
        "microservices",
      ],
    },
    {
      styleKey: "digital-marketing",
      keywords: [
        "digital",
        "ads",
        "social-media",
        "SEO",
        "content",
        "email",
        "branding",
        "digital-marketing",
      ],
    },
  ];

  const currentSlug = typeof slug === "string" ? slug.toLowerCase() : "";

  const matchedConfig = keywordMap.find((config) =>
    config.keywords.some((keyword) => currentSlug.includes(keyword))
  );

  const currentStyle = matchedConfig
    ? serviceStyles[matchedConfig.styleKey]
    : serviceStyles.default;
  if (loading || !serviceData) {
    return <Skeleton />;
  }
  return (
    <section>
      {matchedConfig?.styleKey === "web-development" && (
        <div className="">
          <Banner
            platform="web-dev"
            backgroundColor={["#FCF4EC"]}
            bannerImage={[{ icon: "/image/web-service.webp" }]}
            subTitle={`Expert web development <br /> for unstoppable growth`}
            cta={[
              {
                text: "Explore Now",
                url: "",
                backgroundColor: "#ffffff",
                textColor: "#363636",
                borderColor: "#ffffff",
              },
            ]}
            title={`Build your digital <br /> foundation`}
            headerTextColor="#000"
          />
          {serviceData.blocks?.[0]?.data && (
            <ElevateBusinessPage data={serviceData.blocks[0].data} />
          )}
          {serviceData.blocks?.[1]?.data && (
            <Title
              firstText={serviceData.blocks[1].data.firstTitle}
              firstColor={
                serviceData.blocks[1].data.firstColor || "text-[#840065]"
              }
              secondText={serviceData.blocks[1].data.secondTitle || "Services"}
              subText={serviceData.blocks[1].data.subtitle}
            />
          )}
          <ServiceFormPage backgroundColor="#452A7C1A" />
          {/* <div>
            {serviceData.blocks?.[2]?.data &&
              serviceData.blocks[2].data.points && (
                <ChooseUsTimeline data={serviceData.blocks[2].data} />
              )}
          </div> */}
          <div>
            <ChooseUsTimeline />
          </div>
        </div>
      )}

      {matchedConfig?.styleKey === "app-development" && (
        <div className="">
          <Banner
            platform="app-development"
            backgroundColor={["#FFF"]}
            bannerImage={[{ icon: "/icons/mobile-second.webp" }]}
            subTitle={`Revolutionary Mobile Experiences Starts Here.`}
            cta={[
              {
                text: "lauch your app idea",
                url: "",
                backgroundColor: "#083E92",
                textColor: "#FFFFFF",
                borderColor: "#ffffff",
              },
            ]}
            title={`innovate. <br/> create. <br /> dominate.`}
            headerTextColor="#000"
            backgroundImage="/image/app-back.webp"
          />
          <AppBenfits />
          {/* <Title
            firstText={"App Development"}
            firstColor={"text-[#083E92]"}
            secondText="Services"
            subText="Next Hikes delivers complete mobile app development solutions, covering frontend, backend, and full-stack services to help businesses create powerful, secure, and visually engaging mobile applications. From concept to launch, we ensure your app is fast, user-friendly, and optimized for performance across all devices."
          /> */}
          <ServiceFormPage backgroundColor="#452A7C1A" />
          {/* <ElevateBusinessPage /> */}
          <Projects />
        </div>
      )}

      {matchedConfig?.styleKey === "digital-marketing" && serviceData ? (
        <>
          <Banner
            platform="digital"
            backgroundColor={["#000"]}
            bannerImage={[{ icon: "/icons/mobile-second.webp" }]}
            subTitle={`Revolutionary Mobile Experiences Starts Here.`}
            cta={[
              {
                text: "lauch your app idea",
                url: "",
                backgroundColor: "#083E92",
                textColor: "#FFFFFF",
                borderColor: "#ffffff",
              },
            ]}
            title={`innovate. <br/> create. <br /> dominate.`}
            headerTextColor="#000"
            backgroundImage="/image/app-back.webp"
          />
          {serviceData.blocks?.[0]?.data && (
            <DigitalFlow data={serviceData.blocks[0].data} />
          )}
          {serviceData.blocks?.[1]?.data && (
            <OurProcess data={serviceData.blocks[1].data} />
          )}
          {serviceData.blocks?.[2]?.data && (
            <Title
              firstText={serviceData.blocks[2].data?.firstTitle}
              firstColor={serviceData.blocks[2].data?.firstColor}
              secondText={serviceData.blocks[2].data?.secondTitle}
              subText={serviceData.blocks[2].data?.subtitle}
            />
          )}

          <ServiceFormPage backgroundColor="#452A7C1A" />
        </>
      ) : (
        <Skeleton />
      )}

      {matchedConfig?.styleKey === "platform-development" && (
        <div className="">
          <Banner
            platform="platform-development"
            backgroundColor={["#FFF"]}
            bannerImage={[
              { icon: "/icons/app.svg", title: "app" },
              { icon: "/icons/web-icon.svg", title: "web" },
              { icon: "/icons/design.svg", title: "design" },
              { icon: "/icons/branding.svg", title: "branding" },
              { icon: "/icons/marketing-plat.svg", title: "marketing" },
            ]}
            subTitle={``}
            cta={[
              {
                text: "lauch your app idea",
                url: "",
                backgroundColor: "#083E92",
                textColor: "#FFFFFF",
                borderColor: "#ffffff",
              },
            ]}
            title={`innovate. create. dominate.`}
            headerTextColor="#fff"
            backgroundImage="/image/platform-banner.webp"
          />
          <PlatformDevelopment />
          <ProcessFlow />
          {/* <ElevateBusinessPage /> */}
          <Projects />
        </div>
      )}

      {matchedConfig?.styleKey === "ai" && (
        <>
          <Banner
            platform="ai"
            backgroundColor={["#FFF"]}
            subTitle={`Harness the power of AI to transform complex data into actionable insights that resonate with your audience and deliver measurable results. `}
            cta={[
              {
                text: `Schedule a consultation`,
                url: "",
                backgroundColor:
                  "linear-gradient(90deg, #5375CD 0%, #282E98 68.75%)",
                textColor: "#FFFFFF",
                borderColor: "#ffffff",
              },
            ]}
            title={`Artificial Intelligence Company in India`}
            headerTextColor="#000"
            backgroundImage="/image/ai-banner.webp"
          />
          {/* <AIService /> */}
          {/* <WhyAIForBusiness />
          <GlobalAISkills />
          <GlobalAIRevenueForecast />
          <AiInnovation />
          <FutureSection />
          <FutureSection /> */}
          {/* Block 0 - WhyAIForBusiness */}
          {console.log("serviceData blocks:", serviceData.blocks)}
          {serviceData.blocks?.[0]?.data && (
            <WhyAIForBusiness data={serviceData.blocks[0].data} />
          )}

          {/* Block 1 - GlobalAISkills */}
          {serviceData.blocks?.[1]?.data && (
            <GlobalAISkills data={serviceData.blocks[1].data} />
          )}

          {/* Block 2 - GlobalAIRevenueForecast */}
          {serviceData.blocks?.[2]?.data && (
            <GlobalAIRevenueForecast data={serviceData.blocks[2].data} />
          )}

          {/* Block 3 - AIThatFuelsInnovation */}
          {serviceData.blocks?.[3]?.data && (
            <AiInnovation data={serviceData.blocks[3].data} />
          )}

          {/* Block 4 - GrowSmarterWithAI */}
          {serviceData.blocks?.[4]?.data && (
            <FutureSection data={serviceData.blocks[4].data} />
          )}

          {/* Block 5 - TheFutureIsIntelligentAutomation */}
          {serviceData.blocks?.[5]?.data && (
            <FutureSection data={serviceData.blocks[5].data} />
          )}
        </>
      )}

      {/* {matchedConfig?.styleKey !== "web-development" && (
        <section className="custom-container bg-white !mt-7 !mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <h2 className="text-[#262F2E] text-[25px] md:text-[30px] lg:text-[50px] leading-snug">
              Our <span className="text-[#F37021] font-bold">Projects</span>
            </h2>
            <button className="cursor-pointer bg-[#262F2E] text-white text-sm rounded-full px-5 py-2">
              Learn More
            </button>
          </div>
        </section>
      )} */}
    </section>
  );
}
