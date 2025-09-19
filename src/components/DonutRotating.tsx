import React from "react";

const items = [
  "Numerology",
  "Live Consultation",
  "Daily Horoscope",
  "AI Integration",
  "Deliverables",
  "Tarot",
  "Item 7",
  "Item 8",
];

// Calculate SVG arc path for each donut segment
function createArcPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngle: number,
  endAngle: number
) {
  const rad = (deg: number): number => (Math.PI / 180) * deg;

  const startOuterX = cx + rOuter * Math.cos(rad(startAngle));
  const startOuterY = cy + rOuter * Math.sin(rad(startAngle));
  const endOuterX = cx + rOuter * Math.cos(rad(endAngle));
  const endOuterY = cy + rOuter * Math.sin(rad(endAngle));

  const startInnerX = cx + rInner * Math.cos(rad(endAngle));
  const startInnerY = cy + rInner * Math.sin(rad(endAngle));
  const endInnerX = cx + rInner * Math.cos(rad(startAngle));
  const endInnerY = cy + rInner * Math.sin(rad(startAngle));

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  // Path describes donut slice shape
  return `
    M ${startOuterX} ${startOuterY}
    A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
    L ${startInnerX} ${startInnerY}
    A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${endInnerX} ${endInnerY}
    Z
  `;
}

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#556270",
  "#C7F464",
  "#FF6B6B",
  "#4ECDC4",
  "#556270",
  "#C7F464",
];

const DonutRotating: React.FC = () => {
  const cx = 200;
  const cy = 200;
  const rOuter = 150;
  const rInner = 100;
  const sliceAngle = 360 / items.length;

  return (
    <>
      <style>{`
        .rotate-container {
          width: 400px;
          height: 400px;
          margin: 40px auto;
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .segment-text {
          font-family: Arial, sans-serif;
          font-size: 14px;
          fill: #fff;
          font-weight: bold;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <div className="rotate-container">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <g>
            {items.map((label, i) => {
              const startAngle = i * sliceAngle - 90; // subtract 90 to start from top
              const endAngle = startAngle + sliceAngle;
              const path = createArcPath(
                cx,
                cy,
                rOuter,
                rInner,
                startAngle,
                endAngle
              );

              // Calculate mid angle for text placement
              const midAngle = (startAngle + endAngle) / 2;
              const radMid = (midAngle * Math.PI) / 180;
              const textRadius = (rOuter + rInner) / 2;

              const textX = cx + textRadius * Math.cos(radMid);
              const textY = cy + textRadius * Math.sin(radMid);

              // Rotate text so it stays upright
              const rotateAngle = midAngle + 90;

              return (
                <g key={label}>
                  <path
                    d={path}
                    fill={colors[i % colors.length]}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    className="segment-text"
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    transform={`rotate(${rotateAngle}, ${textX}, ${textY})`}
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </>
  );
};

export default DonutRotating;
