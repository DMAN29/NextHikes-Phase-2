import Image from "next/image";

const icons = [
  "/icons/strategy-platform.svg",
  "/icons/brand.svg",
  "/icons/design-platform.svg",
  "/icons/web-develop.svg",
  "/icons/app-develop.svg",
  "/icons/marketing-platform.svg",
];

interface Item {
  title: string;
  description: string;
}

interface ProgressFlowData {
  title: string;
  subtitle: string;
  items: Item[];
}

interface ProgressFlowProps {
  data: ProgressFlowData;
}

const titlesAndDescriptions = [
  {
    title: "Strategy & Planning all",
    description: "Define vision, audience, and roadmap.",
  },
  {
    title: "Brand Identity",
    description: "Logo, colors, typography, and messaging.",
  },
  {
    title: "UI/UX Design",
    description: "Pixel-perfect Figma prototypes and user flows.",
  },
  {
    title: "Web Development",
    description: "High-performing websites and custom apps.",
  },
  {
    title: "App Development",
    description: "Engaging iOS, Android, or cross-platform apps.",
  },
  {
    title: "Digital Marketing",
    description: "SEO, PPC, SMM, and launch campaigns.",
  },
];

export default function ProcessFlow({ data }: ProgressFlowProps) {
  return (
    <div className="relative large-dashed-border px-2 md:px-5 py-5 md:py-8 mb-5 mx-5 text-[#363636]">
      <h3 className="capitalize font-semibold text-lg md:text-4xl text-center">
        {data.title}
      </h3>
      <p className="capitalize font-normal md:text-3xl my-4 text-center mx-2">
        {data.subtitle}
      </p>

      {/* Desktop Layout */}
      <div className="hidden md:block p-4">
        {/* First row: 4 items in a grid */}
        <div className="grid grid-cols-4 gap-4 xl:gap-8 mb-8">
          {data.items.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center py-3 xl:py-6 px-3 gradient-border rounded-lg shadow-md text-center h-[190px] xl:h-[250px]"
            >
              <div className="w-8 h-8 xl:w-16 xl:h-16 relative">
                <Image
                  src={icons[idx]}
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
          {data.items.slice(4, 6).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center py-3 xl:py-6 px-3 gradient-border rounded-lg shadow-md text-center h-[190px] xl:h-[250px]"
            >
              <div className="w-8 h-8 xl:w-16 xl:h-16 relative">
                <Image
                  src={icons[idx + 4]}
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
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-2 px-3 gradient-border rounded shadow-md text-center w-full"
          >
            <div className="w-8 h-8 relative my-1">
              <Image
                src={icons[index]}
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
