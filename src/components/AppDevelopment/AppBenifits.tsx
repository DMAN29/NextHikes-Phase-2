import Image from "next/image";

interface AppBenefitPoint {
  name: string;
  content: string;
  image: string;
}

interface AppBenefitsData {
  title: string;
  description: string;
  images: string[];
  points: AppBenefitPoint[];
}

interface AppBenefitsProps {
  data: AppBenefitsData;
}

export default function AppBenefits({ data }: AppBenefitsProps) {
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between w-full my-6 md:my-12">
        <div className="flex justify-center md:block">
          <Image
            src={data?.images[0]}
            alt="App Development"
            width={350}
            height={274}
            className="w-[250px] h-[225px] md:w-[300px] md:h-[270px] xl:w-[350px] xl:h-[316px]"
            priority
          />
        </div>

        <div className="w-full md:w-2/3 mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-2 mb-8">
            {data?.title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-2xl font-extralight">
            {data?.description}
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data?.points.map((card, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden h-[250px] w-[250px] lg:h-[220px] lg:w-[220px] xl:h-[280px] xl:w-[280px]"
            >
              <Image
                src={card.image}
                alt=""
                height={250}
                width={250}
                priority
                className="object-cover h-[250px] w-[250px] lg:h-[220px] lg:w-[220px] xl:h-[280px] xl:w-[280px]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #000000 55%)",
                  opacity: 0.7,
                }}
              />
              <div
                className="absolute inset-x-0 p-4 z-10"
                style={{ top: "40%" }}
              >
                <div className="text-white text-lg font-semibold text-center">
                  {card.name} :&nbsp;
                  <span className="font-normal">{card.content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
