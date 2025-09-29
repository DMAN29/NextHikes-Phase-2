"use client";

import Image from "next/image";
import StarBorder from "../StarBorder";
import { useEffect, useState } from "react";
import CardSwap, { Card } from "../CardSwap";
import Link from "next/link";

const img = "/image/WhyUs.png";

interface WhyUsProps {
  data: any;
}

export default function WhyUs({ data }: WhyUsProps) {
  const res = data[0];
  const [cardSize, setCardSize] = useState({ width: 450, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      const newSize =
        window.innerWidth < 768
          ? { width: 300, height: 250 }
          : { width: 450, height: 300 };
      setCardSize(newSize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="custom-container lg:h-[900px] flex !mt-5 lg:!mt-24 !mb-10 overflow-hidden">
      <div className="w-[100%] md:w-[50%] relative flex flex-col justify-center">
        <div className=" py-5 ">
          <h1 className="text-2xl md:text-5xl xl:text-7xl font-semibold leading-relaxed text-center md:text-left">
            Why Choose Us?
          </h1>
          <p className="lg:text-2xl  gap-5 text-gray-700 text-center md:text-left lg:mt-5">
            {res?.subtitle}
          </p>
        </div>
        <div className="relative z-1 w-full h-[100px] md:w-[600px] xl:w-[700px] md:h-[450px]">
          <CardSwap
            pauseOnHover={false}
            delay={5000}
            cardDistance={60}
            verticalDistance={40}
            width={cardSize.width}
            height={cardSize.height}
            skewX={0}
          >
            {res?.items?.map((card: any, index: number) => (
              <Card key={index} className="bg-gray-100">
                <div className="p-6 md:p-10 lg:p-12 w-full h-full flex flex-col justify-center">
                  <h3 className="text-xl md:text-3xl font-semibold mb-4">
                    {card.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        <div className="mt-24 xl-mt-32 z-20  text-center md:text-left">
          <Link href={res?.button?.url}>
            <StarBorder
              as="button"
              className="cursor-pointer"
              color="cyan"
              speed="5s"
            >
              {res?.button?.label}
            </StarBorder>
          </Link>
        </div>
      </div>
      <div className="w-[50%] relative hidden lg:block">
        <Image
          src={img}
          alt="Why Choose Us"
          width={1000}
          height={1000}
          className="w-full h-full overflow-visible"
          priority
        />
      </div>
    </section>
  );
}
