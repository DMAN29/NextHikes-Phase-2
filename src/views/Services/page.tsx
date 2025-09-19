import Banner from "@/components/Banner/page";
import ElevateBusinessPage from "@/components/ElevateBusiness/page";
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
    mobile: {
      bgColor: "bg-[#FFF1C2]",
      title: "App Development",
      textColor: "text-[#F37021]",
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
      keywords: ["web", "website", "frontend", "backend", "fullstack"],
    },
    {
      styleKey: "seo-services",
      keywords: ["seo", "search-engine", "optimization"],
    },
    {
      styleKey: "mobile",
      keywords: ["mobile", "app", "game", "ios", "android"],
    },
    {
      styleKey: "marketing",
      keywords: ["marketing", "digital", "ads", "social-media"],
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
            bannerImage="/image/web-service.webp"
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
          <div className={`py-16`}>
            <Title
              firstText={currentStyle.title}
              firstColor={currentStyle.textColor || "text-[#840065]"}
              secondText="Services"
              subText="Next Hikes provide complete frontend, backend, and full-stack development solutions designed to help businesses build strong, secure, and visually engaging digital platforms. From concept to launch, we ensure your website is fast, responsive, and optimized for success."
            />
            <ServiceFormPage backgroundColor="#452A7C1A" />
          </div>

          {/* Timeline for web dev only */}
          <div>
            <ChooseUsTimeline />
          </div>
        </div>
      )}

      {matchedConfig?.styleKey !== "web-development" && (
        <section className="custom-container bg-white !mt-7 !mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <h2 className="text-[#262F2E] text-[25px] md:text-[30px] lg:text-[50px] leading-snug">
              Our <span className="text-[#F37021] font-bold">Projects</span>
            </h2>
            <button className="cursor-pointer bg-[#262F2E] text-white text-sm rounded-full px-5 py-2">
              Learn More
            </button>
          </div>
          <div>{/* <Projects data={data?.featuredProjects} /> */}</div>
        </section>
      )}
    </section>
  );
}
