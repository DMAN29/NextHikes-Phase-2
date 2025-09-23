import Image from "next/image";
import AiHexagon from "./hexagon";

const img1 = "/image/ai1.png";
const img2 = "/image/ai2.png";
const img3 = "/image/ai3.png";

export default function AIService() {
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

  const aiServiceHexagons = [
    {
      title: "Data Science & Analytics",
      description:
        "Turn Your Data Into Actionable Insights That Drive Business Decisions.",
    },
    {
      title: "AI Operations (AI Ops)",
      description:
        "Optimize IT Operations With AI-Driven Insights, Automated Workflows, And Predictive Analytics For Smoother Operations.",
    },
    {
      title: "Custom AI Services",
      description:
        "Tailored AI Solutions To Automate Workflows, Optimize Business Strategies, And Improve Outcomes.",
    },
    {
      title: "Computer Vision Services",
      description:
        "Leverage AI For Image Recognition, Video Analytics, And Facial Recognition To Drive Intelligent Automation.",
    },
    {
      title: "AI Tech Stack",
      description:
        "Our Tech Stack Includes Industry-Leading AI/ML Algorithms, Deep Learning Frameworks, And Tools.",
    },
    {
      title: "AI-Driven Business Transformation",
      description:
        "Revolutionize Your Business Model, Improve Productivity, And Unlock New Revenue Streams With AI.",
    },
    {
      title: "Machine Learning Development",
      description:
        "From Custom Models To Predictive Analytics, We Bring Powerful ML Solutions To Your Business.",
    },
    {
      title: "Generative AI Solutions",
      description:
        "Turn Your Data Into Actionable Insights That Drive Business Decisions.",
    },
    {
      title: "Data Science & Analytics",
      description:
        "Turn Your Data Into Actionable Insights That Drive Business Decisions.",
    },
    {
      title: "AI Agents",
      description:
        "Automate Business Processes, Customer Interactions, And Decision-Making With Advanced AI Agents.",
    },
    {
      title: "AI & ML Overview",
      description:
        "Discover How AI And ML Can Revolutionize Your Business Operations And Fuel Growth.",
    },
    {
      title: "NLP Solutions",
      description:
        "Enhance Communication, Automate Customer Support And Gain Insights With Advanced NLP.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-8">
      <div className="flex gap-4 w-11/12 mx-auto">
        <div className="w-ful md:w-2/3">
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium uppercase">
            Why ai for your business?
          </h1>
          <p className="md:text-lg lg:text-xl leading-relaxed ">
            AI is no longer a futuristic idea—it’s a business necessity that
            unlocks opportunities, drives innovation, and keeps you competitive
            in a fast-changing market. By integrating AI, you gain powerful
            tools to streamline operations and enhance customer experiences.
            With data-driven insights, your business can make smarter decisions
            and achieve measurable growth.
          </p>
        </div>
        <div className="w-1/3 md:block hidden">
          <Image
            src={img2}
            alt="AI Service"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      <div className="my-5 md:my-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium text-center uppercase">
          Global AI Skills Landscape
        </h1>
        <div className="relative w-5/6 h-[600px] mx-auto">
          <Image src={img1} alt="AI Service" fill className="object-contain" />
        </div>
      </div>
      <div className="my-5 md:my-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium text-center uppercase">
          Global ai revenue forecast by 2025
        </h1>

        <div className="w-11/12 mx-auto flex items-center gap-8 h-[500px]">
          {/* Left: Image */}
          <div className="relative w-1/2 h-full">
            <Image
              src={img3}
              alt="AI bubbles"
              fill
              className="object-contain"
            />
          </div>
          {/* Right: JSON mapped content */}
          <div className="w-1/2 flex flex-col justify-center h-full px-6">
            <ul className="list-disc pl-4 text-sm md:text-base lg:text-lg leading-relaxed text-[#363636] ">
              {aiUseCases.map((item, idx) => (
                <li key={idx} className="my-2 md:my-5">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-16 ">
        <h1
          className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium text-center uppercase
    bg-gradient-to-r from-[#890032] via-[#ED67BD] to-[#ED2762] bg-clip-text text-transparent"
        >
          AI That Fuels Innovation
        </h1>

        <AiHexagon data={aiServiceHexagons.slice(0, 3)} />
        <div className="-translate-x-[171px] -translate-y-[95px] ">
          <AiHexagon data={aiServiceHexagons.slice(3, 6)} />
        </div>
        <div className="-translate-y-[190px]">
          <AiHexagon data={aiServiceHexagons.slice(6, 9)} />
        </div>
        <div className="-translate-y-[280px] translate-x-[171px]">
          <AiHexagon data={aiServiceHexagons.slice(9, 12)} />
        </div>
      </div>
    </div>
  );
}
