import Image from "next/image";
import img1 from "@/assets/images/WhyUs.png";
import CardSwap, { Card } from "./CardSwap";
import StarBorder from "../StarBorder";
import { useEffect, useState } from "react";

export default function WhyUs() {
  const [cardSize, setCardSize] = useState({ width: 600, height: 400 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setCardSize({ width: 400, height: 300 });
      } else {
        setCardSize({ width: 600, height: 400 });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="lg:h-[900px] flex mt-5 lg:mt-24 mb-10 overflow-hidden">
      {/* Card Column */}
      <div className="md:ml-5 lg:ml-15 md:w-2/3 relative w-full">
        <div className=" py-5 ">
          <h1 className="text-2xl md:text-5xl xl:text-7xl font-semibold leading-relaxed text-center md:text-left">
            Why Choose Us?
          </h1>
          <p className="lg:text-2xl  gap-5 text-gray-700 text-center md:text-left lg:mt-5">
            We Bring You Closer To <br /> A Successful Career
          </p>
        </div>
        {/* Changed from absolute to relative */}
        <div className="relative z-10 w-0 h-[150px] md:w-[600px] xl:w-[700px] md:h-[450px] mx-auto md:mx-0 ">
          <CardSwap
            pauseOnHover={false}
            delay={5000}
            cardDistance={60}
            verticalDistance={70}
            width={cardSize.width}
            height={cardSize.height}
          >
            <Card>
              <h3>Card 1</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
        <div className="mt-24 xl-mt-32 z-20  text-center md:text-left">
          <StarBorder
            as="button"
            className="cursor-pointer"
            color="cyan"
            speed="5s"
          >
            Get In Touch
          </StarBorder>
        </div>
      </div>
      {/* Image Column */}
      <div className="w-1/3 relative hidden lg:block">
        <Image
          src={img1}
          alt="Why Choose Us"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
