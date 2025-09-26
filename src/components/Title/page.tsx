interface TitleData {
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
}

interface TitleProps {
  data: TitleData;
  firstColor?: string;
  secondColor?: string;
}
export default function Title({
  data,
  firstColor = "text-[#840065]",
  secondColor = "text-[#363636]",
}: TitleProps) {
  const { firstTitle, secondTitle, subtitle } = data;

  return (
    <div className="text-center max-w-5xl mx-auto px-4 mt-10 mb-6 ">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug">
        <span className={`${firstColor} font-bold`}>{firstTitle}</span>{" "}
        <span className={`${secondColor} font-light`}>{secondTitle}</span>
      </h2>
      {subtitle && (
        <p className="text-[#363636] mt-2 sm:mt-4 text-base sm:text-lg md:text-xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
