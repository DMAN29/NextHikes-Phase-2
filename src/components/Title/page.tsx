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
    <div className="text-center max-w-5xl mx-auto px-4 mt-10 mb-6 ">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug">
        <span className={`${firstColor} font-bold`}>{firstText}</span>{" "}
        <span className={`${secondColor} font-light`}>{secondText}</span>
      </h2>
      {subText && (
        <p className="text-[#363636] mt-2 sm:mt-4 text-base sm:text-lg md:text-xl font-normal">
          {subText}
        </p>
      )}
    </div>
  );
}
