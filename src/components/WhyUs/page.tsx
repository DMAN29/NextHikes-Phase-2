import Image from "next/image";
import img1 from "@/assets/images/WhyUs.png";
import CardSwap, { Card } from "./CardSwap";

export default function WhyUs() {
  return (
    <section className="h-screen flex my-10 border">
      {/* Card Column */}
      <div className="w-2/3 relative">
        <div className="ml-15 py-10">
          <h1 className="text-5xl">Why Choose Us</h1>
          <p>
            We Bring You Closer To <br /> A Successful Career
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            width={600}
            height={400}
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
      </div>
      {/* Image Column */}
      <div className="w-1/3 h-screen relative">
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
