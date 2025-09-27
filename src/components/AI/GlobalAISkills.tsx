import Image from "next/image";

const img1 = "/image/ai1.png";

interface GlobalAISkillsData {
  title: string;
  image: string;
}
interface GlobalAISkillsProps {
  data: GlobalAISkillsData;
}

export default function GlobalAISkills({ data }: GlobalAISkillsProps) {
  return (
    <div className="my-5 md:my-8">
      <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium text-center uppercase">
        {data.title}
      </h1>
      <div className="relative w-full md:w-11/12 aspect-[1.75] mx-auto">
        <Image
          src={data.image || img1}
          alt="AI Service"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
