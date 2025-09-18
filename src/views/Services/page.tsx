import ElevateBusinessPage from "@/components/ElevateBusiness/page";
import ServiceFormPage from "@/components/ServiceForm/page";

interface WebDevelopmentPageProps {
  slug: any;
  data?: any;
}

export default function ServicePage ({
  slug,
  data,
}: WebDevelopmentPageProps) {
    const serviceStyles = {
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

  let currentStyle;

  if (slug.includes("mobile") || slug.includes("app") ||  slug.includes("game")) {
    currentStyle = serviceStyles["mobile"];
  } else if (slug.includes("seo")) {
    currentStyle = serviceStyles["seo-services"];
  } else if (slug.includes("web") || slug.includes("website")) {
    currentStyle = serviceStyles["web-development"];
  } else if (slug.includes("marketing") || slug.includes("digital")) {
    currentStyle = serviceStyles["marketing"];
  } else {
    currentStyle = serviceStyles["default"];
  }

  console.log(data);
  return (
    <section>
      <div className={`${currentStyle.bgColor} pt-[150px] pb-16`}>
        {/* <Title
          firstText={currentStyle.title}
          firstColor={currentStyle.textColor || "text-[#840065]"}
          secondText="Services"
          subText="Next Hikes provide complete frontend, backend, and full-stack development solutions designed to help businesses build strong, secure, and visually engaging digital platforms. From concept to launch, we ensure your website is fast, responsive, and optimized for success."
        /> */}
        <ServiceFormPage />
      </div>
      <ElevateBusinessPage />
      {slug.includes("web") ? (
        <div>
          <section className="bg-white !my-20">
            {/* <ChooseUsTimeline /> */}
          </section>
          {/* <AiIntegrationPage /> */}
        </div>
      ) : (
        <section className="custom-container bg-white !mt-7 !mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <h2 className="text-[#262F2E] text-[25px] md:text-[30px] lg:text-[50px] leading-snug">
              Our <span className="text-[#F37021] font-bold">Projects</span>
            </h2>
            <button className="cursor-pointer bg-[#262F2E] text-white text-sm rounded-full px-5 py-2">
              Learn More
            </button>
          </div>
          <div className="">
            {/* <Projects data={data?.featuredProjects} /> */}
          </div>
        </section>
      )}
    </section>
  );
}