import Image from "next/image";

const demoCards = [
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr1.svg",
  },
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr2.svg",
  },
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr3.svg",
  },
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr4.svg",
  },
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr5.svg",
  },
  {
    title: "Electronic Health Records (EHR/EMR) Systems",
    description:
      "Custom development and integration of secure, interoperable systems for managing patient data efficiently and compliantly.",
    image: "/images/ehr6.svg",
  },
];

const blueGradient = ["#62A8D4", "#D5EFFF"];
const greenGradient = ["#7EC687", "#D8F3DE"];

const CARD_WIDTH = 360;
const CARD_HEIGHT = 220;
const img1 = "/image/health1.png";
const img2 = "/image/health4.png";

export default function BigScreenTranslateY() {
  const rows = [];
  for (let i = 0; i < demoCards.length; i += 3) {
    rows.push(demoCards.slice(i, i + 3));
  }

  return (
    <div className="bg-white w-5/6 mx-auto py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#153D73]">
        Tailored Technology For Every Aspects Of Healthcare
      </h2>
      <div
        className="w-full pt-10"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        {rows.map((row, rowIndex) => {
          const maxCardTranslatePercent =
            rowIndex === 1
              ? -100 + 75 * (row.length - 1)
              : 75 * (row.length - 1);
          const maxTranslatePx = (maxCardTranslatePercent * CARD_HEIGHT) / 100;
          const totalHeight = CARD_HEIGHT + maxTranslatePx + 32;

          return (
            <div
              key={rowIndex}
              className="relative w-full"
              style={{
                transform:
                  rowIndex === 1
                    ? "translateX(-5%) translateY(-25%)"
                    : undefined,
                minHeight: totalHeight,
              }}
            >
              <div className="flex justify-center gap-6">
                {row.map((card, i) => {
                  const idx = rowIndex * 3 + i;
                  const isBlue = idx % 2 === 0;
                  const fromColor = isBlue ? blueGradient[0] : greenGradient[0];
                  const toColor = isBlue ? blueGradient[1] : greenGradient[1];
                  const containerTranslateY = rowIndex === 1 ? -75 : 0;
                  const cardTranslateYPercent = containerTranslateY + 75 * i;

                  const style = {
                    backgroundImage: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
                    transform: `translateY(${cardTranslateYPercent}%)`,
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    zIndex: 100 - i,
                    position: "relative" as "relative",
                  } as React.CSSProperties;

                  return (
                    <div
                      key={idx}
                      style={style}
                      className="rounded-xl shadow-xl flex flex-col items-center px-6 pt-12 pb-8 text-[#153D73]"
                    >
                      <div className="absolute left-1/2 -top-12 -translate-x-1/2 rounded-full p-2 bg-gray-300">
                        <div
                          className="rounded-full flex items-center justify-center w-20 h-20 shadow-md"
                          style={{ backgroundColor: fromColor }}
                        >
                          <Image
                            src={img1}
                            alt="icon"
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-center mb-2">
                        {card.title}
                      </h3>
                      <p className="text-base text-center opacity-80">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
