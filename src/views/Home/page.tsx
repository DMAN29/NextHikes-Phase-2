"use client";

import Banner from "@/components/Banner/page";
import Gallery from "@/components/Gallery/page";
import OurService from "@/components/OurService/page";
import ProjectHighlights from "@/components/ProjectHighlights/page";
import Team from "@/components/Team/page";
import Testimonials from "@/components/Testimonials/page";
import WhoWeAre from "@/components/WeAre/page";
import WhyUs from "@/components/WhyUs/page";

export default function HomePage() {
  return (
    <div className="">
      <Banner
        platform="home"
        backgroundColor={[""]}
        bannerImage="/image/home-banner.webp"
        subTitle={`At NextHike IT Solution, we offer cutting-edge digital and web solutions to help you take your business to the next level. Whether you need a stunning website, a powerful app, or a custom software, we have the expertise and experience to deliver it.
`}
        cta={[
          {
            text: "Explore Now",
            url: "",
            backgroundColor: "#11253E",
            textColor: "#ffffff",
          },
          {
            text: "Contact Sales",
            url: "",
            backgroundColor: "#ffffff",
            textColor: "#0A2540",
          },
        ]}
        title={`We Are Here To
              <br />
              Transform Your
              <br />
              Business with Our
              <br />
              <span class="text-slate-800">IT Solutions</span>`}
        headerTextColor="#fff"
      />
      <WhoWeAre />
      <OurService />
      <ProjectHighlights />
      <WhyUs />
      <Testimonials />
      <Team />
      <Gallery />
    </div>
  );
}
