import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Feathers() {
  const icons = [
    "/icons/nass-memeber.webp",
    "/icons/shopify-plus-vector-logo.svg",
    "/icons/gesia.png",
    "/icons/clutch-global.jpg",
    "/icons/amazon.png",
  ];

  const icons2 = [
    "/icons/The_Economic_Times_logo.svg",
    "/icons/The_Hindu_logo.svg",
    "/icons/yourstory-logo.svg",
    "/icons/Deccan_Chronicle_Logo.svg",
  ];
  return (
    <section className="mb-10">
      <h3 className="uppercase text-[#000000CC] text-[15px] md:text-4xl font-semibold text-center mb-5 md:mb-10">
        feathers in our cap
      </h3>
      <Marquee speed={50} gradient={false} autoFill direction="left">
        {icons?.map((icon, index) => (
          <div key={index} className="mx-20 flex items-center">
            <Image
              src={icon}
              alt={`icon-${index}`}
              width={200}
              height={200}
              className="object-contain grayscale h-[50px] md:h-auto"
            />
          </div>
        ))}
      </Marquee>
      <Marquee speed={50} gradient={false} autoFill direction="left" className="mt-5">
        {icons?.map((icon, index) => (
          <div key={index} className="mx-20 flex items-center">
            <Image
              src={icon}
              alt={`icon-${index}`}
              width={200}
              height={200}
              className="object-contain grayscale h-[50px] md:h-auto"
            />
          </div>
        ))}
      </Marquee>
      <h3 className="uppercase text-[#000000CC] text-[15px] md:text-4xl font-semibold text-center mt-10">
        recognized by
      </h3>
      <Marquee speed={50} gradient={false} autoFill direction="left">
        {icons2?.map((icon, index) => (
          <div key={index} className="mx-20 mt-5 flex items-center">
            <Image
              src={icon}
              alt={`icon-${index}`}
              width={200}
              height={200}
              className="object-contain grayscale h-[24px] md:h-auto"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
