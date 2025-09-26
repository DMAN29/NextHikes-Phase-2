import Image from "next/image";

const boxes = [
  {
    title: "Strategy & Planning all",
    description: "Define vision, audience, and roadmap.",
    icon: "/icons/strategy-platform.svg",
  },
  {
    title: "Brand Identity",
    description: "Logo, colors, typography, and messaging.",
    icon: "/icons/brand.svg",
  },
  {
    title: "UI/UX Design",
    description: "Pixel-perfect Figma prototypes and user flows.",
    icon: "/icons/design-platform.svg",
  },
  {
    title: "Web Development",
    description: "High-performing websites and custom apps.",
    icon: "/icons/web-develop.svg",
  },
  {
    title: "App Development",
    description: "Engaging iOS, Android, or cross-platform apps.",
    icon: "/icons/app-develop.svg",
  },
  {
    title: "Digital Marketing",
    description: "SEO, PPC, SMM, and launch campaigns.",
    icon: "/icons/marketing-platform.svg",
  },
];

export default function ProcessFlow() {
  return (
    <div className="relative large-dashed-border px-2 md:px-5 py-5 md:py-8 mb-5 mx-5 text-[#363636]">
      <h3 className="capitalize font-semibold text-lg md:text-4xl text-center">
        Our Full-Stack Launchpad Services
      </h3>
      <p className="capitalize font-normal md:text-3xl my-4 text-center mx-2">
        Every Element You Need for a Powerful Market Entry
      </p>

      {/* Desktop Layout */}
      <div className="hidden md:block p-4">
        {/* First row: 4 items in a grid */}
        <div className="grid grid-cols-4 gap-4 xl:gap-8 mb-8">
          {boxes.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center py-3 xl:py-6 px-3 gradient-border rounded-lg shadow-md text-center h-[190px] xl:h-[250px]"
            >
              <div className="w-8 h-8 xl:w-16 xl:h-16 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h5 className="mt-4 xl:text-xl font-medium line-clamp-2">
                {item.title}
              </h5>
              <p className="mt-2 text-gray-600 text-sm xl:text-basefont-extralight line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row: 2 items placed in col 2 and 3 */}
        <div className="grid grid-cols-4 gap-4 xl:gap-8">
          <div /> {/* Empty col 1 */}
          {boxes.slice(4, 6).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center py-3 xl:py-6 px-3 gradient-border rounded-lg shadow-md text-center h-[190px] xl:h-[250px]"
            >
              <div className="w-8 h-8 xl:w-16 xl:h-16 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h5 className="mt-4 xl:text-xl font-medium line-clamp-2">
                {item.title}
              </h5>
              <p className="mt-2 text-gray-600 text-sm xl:text-basefont-extralight line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
          <div /> {/* Empty col 4 */}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-wrap justify-center gap-8 p-4">
        {boxes.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-2 px-3 gradient-border rounded shadow-md text-center w-full"
          >
            <div className="w-8 h-8 relative my-1">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h5 className="text-sm font-normal">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
