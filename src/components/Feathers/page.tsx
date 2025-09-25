import Image from "next/image";

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
    <section className="my-15 md:min-h-screen">
      <h3 className="uppercase text-[#000000CC] text-[15px] md:text-4xl font-semibold text-center mb-5 md:mb-10">
        feathers in our cap
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {icons?.map((icon, index) => (
          <div key={index} className="flex items-center">
            <Image
              src={icon}
              alt={`icon-${index}`}
              width={200}
              height={200}
              className="object-contain grayscale h-[50px] md:h-auto"
            />
          </div>
        ))}
      </div>

      <h3 className="uppercase text-[#000000CC] text-[15px] md:text-4xl font-semibold text-center mt-10">
        recognized by
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
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
      </div>
    </section>
  );
}
