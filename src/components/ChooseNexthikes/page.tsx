import Image from "next/image";

export default function ChooseNexthikesPage() {
  const leftData = [
    {
      title: "Indian Market Specialists",
      description:
        "We understand the nuances of the Indian e-commerce landscape, from popular payment methods to complex shipping zones and GST compliance.",
    },
    {
      title: "Built to Scale",
      description:
        "We build robust platforms that can handle traffic spikes during sales and grow with your business without a hitch.",
    },
  ];

  const rightData = [
    {
      title: "Conversion-Focused Design",
      description:
        "Our UI/UX design process is centered around one goal: turning your visitors into paying customers.",
    },
    {
      title: "End-to-End Partnership",
      description:
        "From initial strategy and design to development, launch, and ongoing support, our team in Faridabad is your dedicated partner for online success.",
    },
  ];

  return (
    <div className="custom-container !p-6 flex flex-col items-center gap-12 md:gap-16 min-h-screen">
      {/* Heading Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 text-center md:text-left">
        <h3 className="font-semibold text-[#363636] text-4xl sm:text-5xl md:text-6xl leading-tight">
          Why Choose Next <br /> Hikes?
        </h3>
        <h6 className="font-normal text-[#363636] text-2xl sm:text-2xl md:text-3xl leading-snug">
          Your Local E-commerce <br /> Experts in the Delhi NCR
        </h6>
      </div>

      {/* Curve Image */}
      <div className="w-full flex justify-center">
        <Image
          src={"/icons/curve.svg"}
          alt="curve-icon"
          width={1000}
          height={1000}
          className="w-full max-w-[1000px] h-auto -mt-5"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:text-right text-center md:w-1/3">
          {leftData.map((item, index) => (
            <div key={index}>
              <h4 className="font-medium text-xl sm:text-2xl text-[#0A2540] mb-2">
                {item.title}:
              </h4>
              <p className="text-[#363636] text-lg sm:text-lg font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="w-[300px] h-[400px] sm:w-[360px] sm:h-[450px] md:w-[400px] md:h-[500px] relative flex-shrink-0">
          <Image
            src={"/image/choose-nexthikes.webp"}
            alt="choose-nexthikes"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:text-left text-center md:w-1/3">
          {rightData.map((item, index) => (
            <div key={index}>
              <h4 className="font-medium text-xl sm:text-2xl text-[#0A2540] mb-2">
                {item.title}:
              </h4>
              <p className="text-[#363636] text-lg sm:text-lg font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
