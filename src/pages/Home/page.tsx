import Banner from "@/components/Banner/page";
import Gallery from "@/components/Gallery/page";
import OurService from "@/components/OurService/page";
import ProjectHighlights from "@/components/ProjectHighlights/page";
import Team from "@/components/Team/page";
import WhoWeAre from "@/components/WeAre/page";
import WhyUs from "@/components/WhyUs/page";

export default function HomePage() {
  return (
    <div className="">
      <Banner
        platform="home"
        backgroundColor={[""]}
        bannerImage=""
        subTitle=""
        cta={[]}
        title=""
      />
      <WhoWeAre />
      <OurService />
      <ProjectHighlights />
      <WhyUs />
      <Team />
      <Gallery />
    </div>
  );
}
