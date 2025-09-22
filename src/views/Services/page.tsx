"use client";

import AppBenfits from "@/components/AppDevelopment/AppBenfits";
import Banner from "@/components/Banner/page";
import ElevateBusinessPage from "@/components/ElevateBusiness/page";
import PlatformDevelopment from "@/components/PlatformDevelopment/platformDevelopment";
import Projects from "@/components/Projects/Projects";
import ServiceFormPage from "@/components/ServiceForm/page";
import Title from "@/components/Title/page";
import ChooseUsTimeline from "@/components/WhyChooseUs/page";

interface ServiceProps {
  slug: any;
  data?: any;
}

export default function ServicePage({ slug, data }: ServiceProps) {
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
          <ElevateBusinessPage />
          <div className={`md:py-16`}>
            <Title
              firstText={currentStyle.title}
              firstColor={currentStyle.textColor || "text-[#840065]"}
              secondText="Services"
              subText="Next Hikes provide complete frontend, backend, and full-stack development solutions designed to help businesses build strong, secure, and visually engaging digital platforms. From concept to launch, we ensure your website is fast, responsive, and optimized for success."
            />
            <ServiceFormPage backgroundColor="#452A7C1A" />
          </div>
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
          <Title
            firstText={"App Development"}
            firstColor={"text-[#083E92]"}
            secondText="Services"
            subText="Next Hikes delivers complete mobile app development solutions, covering frontend, backend, and full-stack services to help businesses create powerful, secure, and visually engaging mobile applications. From concept to launch, we ensure your app is fast, user-friendly, and optimized for performance across all devices."
          />
          <ServiceFormPage backgroundColor="#452A7C1A" />
          <ElevateBusinessPage />
          <Projects />
        </div>
      )}

      {matchedConfig?.styleKey === "digital-marketing" && (
        <>
          <div className="h-56 border border-black bg-[#452A7C]"></div>
          hello
        </>
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
          <ElevateBusinessPage />
        </div>
      )}

      {matchedConfig?.styleKey === "ai" && (
        <div className="h-56 border border-black bg-[#452A7C]"></div>
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
