import AiHexagon, { AIServiceHexagon } from "./hexagon";

interface AiInnovationData {
  title: string;
  points: AIServiceHexagon[];
}

interface AiInnovationProps {
  data: AiInnovationData;
}

export default function AiInnovation({ data }: AiInnovationProps) {
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
    <div className="my-8 md:my-16 ">
      <h1
        className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium text-center uppercase
    bg-gradient-to-r from-[#890032] via-[#ED67BD] to-[#ED2762] bg-clip-text text-transparent"
      >
        {data.title}
      </h1>

      <div className="w-full flex justify-center">
        <AiHexagon data={data.points} />
      </div>
    </div>
  );
}
