import Image from "next/image";

const img3 = "/image/ai3.png";

interface GlobalAIRevenueForecastData {
  title: string;
  image: string;
  points: string[];
}

const aiUseCases = [
  {
    text: "The Top Three AI Use Cases Are A Clear Class Of Their Own. Static Image Recognition Leads With Over $8 Billion, Closely Followed By Algorithm Trading And Efficient Patient Data Processing, Which Both Forecast Revenue Over $7 Billion.",
  },
  {
    text: "There Is A Significant Drop-Off In Revenue For The Remaining Use Cases. Predictive Maintenance Ranks Fourth But Forecasts Almost $3 Billion Less Than The Top Three.",
  },
  {
    text: "The Lowest-Ranked Use Case, Object Detection & Classification, Avoidance, Navigation, Is Still A Substantial Market, With A Forecasted Revenue Of Over $3 Billion.",
  },
];

interface GlobalAIRevenueForecastProps {
  data: GlobalAIRevenueForecastData;
}

export default function GlobalAIRevenueForecast({
  data,
}: GlobalAIRevenueForecastProps) {
  return (
    <div className="my-5 md:my-8">
      <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium text-center uppercase">
        {data.title}
      </h1>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-8 ">
        <div className="relative w-full md:w-1/2 aspect-[1.3]">
          <Image
            src={data.image || img3}
            alt="AI bubbles"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center h-full px-6">
          <ul className="list-disc pl-4 text-xs md:text-base lg:text-lg leading-relaxed text-[#363636]">
            {data.points.map((item, idx) => (
              <li key={idx} className="my-2 md:my-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
