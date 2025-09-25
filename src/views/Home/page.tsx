import Banner from "@/components/Banner/page";
import Gallery from "@/components/Gallery/page";
import OurService from "@/components/OurService/page";
import ProjectHighlights from "@/components/ProjectHighlights/page";
import Team from "@/components/Team/page";
import Testimonials from "@/components/Testimonials/page";
import WhoWeAre from "@/components/WeAre/page";
import WhyUs from "@/components/WhyUs/page";
import IndustriesServe from "@/components/IndustriesServe/page";
import Feathers from "@/components/Feathers/page";
import { fetchGet } from "@/lib/fetcher";

export const revalidate = 60;

export default async function HomePage() {
  let data = null;

  try {
    const res: any = await fetchGet(`${process.env.NEXT_PUBLIC_BASE_URL}/home`);

    console.log(res);

    if (!res?.success) {
      throw new Error("Failed to fetch home data");
    }

    data = res?.data;
  } catch (error) {
    throw new Error("Something went wrong!!");
  }

  return (
    <div className="">
      <Banner
        platform="home"
        backgroundColor={[""]}
        subTitle={data?.subtitle}
        cta={data?.mainButtons}
        title={data?.title}
        headerTextColor="#000"
        backgroundImage={"/image/home-banner.webp"}
      />
      <WhoWeAre title={data?.whoWeAre?.description} button={data?.whoWeAre?.button} />
      <OurService />
      <Feathers />
      <div className="custom-container">
        <IndustriesServe />
      </div>
      <ProjectHighlights />
      <WhyUs />
      <Testimonials />
      <Team />
      <Gallery />
    </div>
  );
}
