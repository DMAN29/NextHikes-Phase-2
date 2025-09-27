import React from "react";

const img = "/image/ai4.png";

export interface AIServiceHexagon {
  heading: string;
  description: string;
}
interface HexagonProps {
  data: AIServiceHexagon[];
}

// Responsive width settings
const HEX_WIDTH_PERCENT_DESKTOP = 18;
const HEX_WIDTH_PERCENT_TABLET = 22;
const HEX_WIDTH_PERCENT_MOBILE = 22;

// 9:10 aspect ratio (width:height = 9:10)
const HEX_ASPECT_RATIO = 10 / 9;

const getRows = (
  data: AIServiceHexagon[],
  countPerRow: number,
  numRows: number
) => {
  const rows = [];
  let idx = 0;
  for (let i = 0; i < numRows && idx < data.length; i++) {
    rows.push(data.slice(idx, idx + countPerRow));
    idx += countPerRow;
  }
  return rows;
};

const AiHexagon: React.FC<HexagonProps> = ({ data }: HexagonProps) => {
  const rows = getRows(data, 3, 4);

  const [hexWidth, setHexWidth] = React.useState(HEX_WIDTH_PERCENT_DESKTOP);
  const [rowOffsets, setRowOffsets] = React.useState([0, -19, 0, 19]);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setHexWidth(HEX_WIDTH_PERCENT_MOBILE);
        setRowOffsets([0, -23, 0, 23]);
      } else if (width < 1024) {
        setHexWidth(HEX_WIDTH_PERCENT_TABLET);
        setRowOffsets([0, -23, 0, 23]);
      } else {
        setHexWidth(HEX_WIDTH_PERCENT_DESKTOP);
        setRowOffsets([0, -19, 0, 19]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const overlap = hexWidth * HEX_ASPECT_RATIO * 0.25;

  return (
    <div className="w-full flex flex-col items-center">
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex justify-center"
          style={{
            marginTop: i === 0 ? 0 : `-${overlap}vw`,
            marginLeft: `${rowOffsets[i] || 0}vw`,
          }}
        >
          {row.map((item, j) => (
            <div
              key={j}
              className="relative flex flex-col items-center justify-center shadow-lg rounded-[36px] p-4 text-center"
              style={{
                width: `${hexWidth}vw`,
                height: `${hexWidth * HEX_ASPECT_RATIO}vw`,
                background:
                  "linear-gradient(180deg, #FFF7F7 22.04%, #C5B2ED 100%)",
                WebkitMaskImage: `url(${img})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${img})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                marginLeft: j === 0 ? 0 : "1vw",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "85%",
                  maxHeight: "80%",
                  overflow: "hidden",
                }}
              >
                <h3 className="font-bold text-[8px] md:text-base xl:text-xl md:mb-2 leading-tight">
                  {item.heading}
                </h3>
                <p className="hidden md:block text-[6px] md:text-[10px] xl:text-xs leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AiHexagon;
