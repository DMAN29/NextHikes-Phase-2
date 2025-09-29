import Image from "next/image";

const img2 = "/image/ai2.png";

interface WhyAIForBusinessData {
  title: string;
  description: string;
  image: string;
}

interface WhyAIForBusinessProps {
  data: WhyAIForBusinessData;
}

export default function WhyAIForBusiness({ data }: WhyAIForBusinessProps) {
  // console.log("WhyAIForBusiness data:", data);
  return (
    <div className="flex gap-4 w-11/12 mx-auto">
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium uppercase text-center md:text-left">
          {data.title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl leading-relaxed ">
          {data.description}
        </p>
      </div>
      <div className="w-1/3 md:block hidden">
        <Image
          src={data.image || img2}
          alt="AI Service"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
