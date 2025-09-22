interface TitleProps {
  firstText: string;
  secondText: string;
  firstColor?: string;
  secondColor?: string;
  subText?: string;
}

export default function Title({
  firstText,
  secondText,
  firstColor = "text-[#840065]",
  secondColor = "text-[#363636]",
  subText,
}: TitleProps) {
  return (
    <div className="text-center max-w-5xl mx-auto px-4 py-5 md:py-16">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
        <span className={`${firstColor} font-bold`}>{firstText}</span>{" "}
        <span className={`${secondColor} font-thin`}>{secondText}</span>
      </h2>
      <p className="text-[#363636] mt-4 text-sm md:text-lg lg:text-xl font-normal">
        {subText}
      </p>
    </div>
  );
}
