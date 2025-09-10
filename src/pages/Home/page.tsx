import Banner from "@/components/Banner/page";
import Gallery from "@/components/Gallery/page";
import Team from "@/components/Team/page";
import WhoWeAre from "@/components/WeAre/page";

export default function HomePage() {
  return (
    <div className="">
      <Banner />
      <WhoWeAre />
      <Team />
      <Gallery />
    </div>
  );
}
