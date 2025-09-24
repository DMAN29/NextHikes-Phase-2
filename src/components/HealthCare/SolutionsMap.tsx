import React, { useState, useEffect } from "react";
import Image from "next/image";

interface DemoCard {
  title: string;
  description: string;
  image: string;
}

const demoCards: DemoCard[] = [
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

const blueGradient: [string, string] = ["#62A8D4", "#D5EFFF"];
const greenGradient: [string, string] = ["#7EC687", "#D8F3DE"];

const CARD_WIDTH = 360;
const SMALL_CARD_HEIGHT = 180;
const LARGE_CARD_HEIGHT = 220;

const img1 = "/image/health1.png";
const img2 = "/image/health4.png";

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const BigScreenTranslateY: React.FC = () => {
  const [chunkSize, setChunkSize] = useState<number>(3);
  const [cardHeight, setCardHeight] = useState<number>(LARGE_CARD_HEIGHT);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setChunkSize(2);
        setCardHeight(SMALL_CARD_HEIGHT);
      } else {
        setChunkSize(3);
        setCardHeight(LARGE_CARD_HEIGHT);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const rows = chunkArray<DemoCard>(demoCards, chunkSize);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .md\\:transform {
            transform: translateY(var(--card-translate)) !important;
          }
        }
      `}</style>
      <div className="bg-white w-full lg:w-5/6 mx-auto py-12 px-4">
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
            // Calculate max transform based on chunk size and responsive values
            const getMaxTransformPercent = () => {
              if (chunkSize === 3) {
                return rowIndex === 1
                  ? -100 + 75 * (row.length - 1)
                  : 75 * (row.length - 1);
              } else {
                return 0;
              }
            };

            const maxCardTranslatePercent = getMaxTransformPercent();
            const maxTranslatePx = (maxCardTranslatePercent * cardHeight) / 100;
            const totalHeight = cardHeight + Math.abs(maxTranslatePx) + 32;

            return (
              <div
                key={rowIndex}
                className={`relative w-full ${
                  rowIndex === 1
                    ? "lg:translate-x-[-5%] md:translate-y-[-25%]"
                    : ""
                } `}
                style={{
                  minHeight: totalHeight,
                  marginBottom: rowIndex === rows.length - 1 ? "0" : "2rem",
                }}
              >
                <div
                  className={`grid gap-4 md:gap-6 justify-center ${
                    chunkSize === 2
                      ? "grid-cols-2"
                      : "grid-cols-1 md:grid-cols-3"
                  }`}
                >
                  {row.map((card, i) => {
                    const idx = rowIndex * chunkSize + i;
                    const isBlue = idx % 2 === 0;
                    const fromColor = isBlue
                      ? blueGradient[0]
                      : greenGradient[0];
                    const toColor = isBlue ? blueGradient[1] : greenGradient[1];

                    // Calculate transform values including odd cards translateY 10% on small screens
                    const getTransformValues = () => {
                      if (chunkSize === 2) {
                        // Small screen: odd index cards translateY 10%, even 0%
                        return i % 2 === 1 ? 30 : 0;
                      } else {
                        // Desktop original transforms
                        const containerTranslateY = rowIndex === 1 ? -75 : 0;
                        return containerTranslateY + 75 * i;
                      }
                    };

                    const cardTranslateYPercent = getTransformValues();

                    const style: React.CSSProperties = {
                      backgroundImage: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
                      height: `${cardHeight}px`,
                      position: "relative",
                      zIndex: 100 - i,
                      transform: `translateY(${cardTranslateYPercent}%)`,
                      ["--card-translate" as any]: `${cardTranslateYPercent}%`,
                    };

                    return (
                      <div
                        key={idx}
                        style={style}
                        className="rounded-xl shadow-xl flex flex-col items-center px-1 md:px-6 pt-5 md:pt-12 pb-8 text-[#153D73] w-full max-w-[360px] mx-auto transition-transform duration-300 md:transform"
                      >
                        <div className="absolute left-1/2 -top-8 md:-top-12 -translate-x-1/2 rounded-full p-2 bg-gray-300">
                          <div
                            className="rounded-full flex items-center justify-center w-8 h-8 md:w-16 lg:w-20 md:h-16 lg:h-20 shadow-md"
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
                        <h3 className="font-bold text-xs md:text-sm lg:text-base xl:text-lg text-center mb-2">
                          {card.title}
                        </h3>
                        <p className="text-[10px] md:text-xs  lg:text-sm xl:text-base text-center opacity-80">
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
    </>
  );
};

export default BigScreenTranslateY;
