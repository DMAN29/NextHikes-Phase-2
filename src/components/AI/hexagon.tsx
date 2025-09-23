import Image from "next/image";

const img = "/image/ai4.png";

interface AIServiceHexagon {
  title: string;
  description: string;
}

interface HexagonProps {
  data: AIServiceHexagon[];
}

const AiHexagon: React.FC<HexagonProps> = ({ data }) => {
  return (
    <div className="flex justify-center ">
      {data.map((service, idx) => (
        <div
          key={idx}
          className="relative w-[342px] h-[379px] flex flex-col items-center justify-center shadow-lg rounded-[36px] p-6 text-center "
          style={{
            background: "linear-gradient(180deg, #FFF7F7 22.04%, #C5B2ED 100%)",
            WebkitMaskImage: `url(${img})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: `url(${img})`,
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        >
          <h3 className="font-bold text-lg mb-3">{service.title}</h3>
          <p className="text-sm md:text-base">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AiHexagon;
