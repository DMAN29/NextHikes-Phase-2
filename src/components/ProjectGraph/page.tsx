"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";
import Image from "next/image";

const data = [
  { year: "2022", value: 0.3, label: "0.3M", icon: "/icons/2022.svg" },
  { year: "2023", value: 0.6, label: "0.6M", icon: "/icons/2023.svg" },
  { year: "2024", value: 0.9, label: "0.9M", icon: "/icons/2024.svg" },
  { year: "2025", value: 2, label: "2M", icon: "/icons/2025.svg" },
];


const CustomLabel = (props: any) => {
  const { x, y, width, index } = props;
  const entry = data[index];

  const iconHeight = 90;
  const iconY = y - iconHeight - 10;

  return (
    <g>
      <image
        href={entry.icon}
        x={x + width - 85}
        y={iconY}
        height={90}
        width={71}
      />

      <text
        x={x + width / 2}
        y={y + 25}
        fill="#333"
        fontWeight="bold"
        textAnchor="middle"
        fontSize={24}
      >
        {entry.label}
      </text>
    </g>
  );
};




export default function ProjectGraph() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center md:items-center gap-5">
        {/* Image Background */}
        <div className="absolute -right-35 translate-y-0 opacity-30 md:opacity-100 md:-left-48 md:top-auto md:translate-y-0">
          <Image
            src="/icons/magic.svg"
            alt="magic-svg"
            width={250}
            height={150}
            className="w-[250px] md:w-[350px]"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col max-w-[230px] md:max-w-3xl md:ml-[320px] z-10">
          <h2 className="text-black text-[15px] md:text-6xl font-medium">
            Most-Successful Business Idea in 2025
          </h2>
          <p className="text-[#363636] font-normal mt-2 md:mt-4 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col mt-4 md:mt-0 z-10">
          <h5 className="font-light text-xl md:text-3xl text-black">
            100+ Projects
          </h5>
          <h3 className="text-black font-semibold text-4xl md:text-8xl">
            2M +
          </h3>
          <p className="text-[#363636] font-normal text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>

      <div className="w-full h-[600px] hidden md:block">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="0%" barGap={0} margin={{ top: 100 }}>
            <Bar
              dataKey="value"
              radius={[0, 0, 0, 0]}
              stroke="#000"
            >
              <LabelList dataKey="label" content={<CustomLabel />} />
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
              ))}
            </Bar>

            <defs>
              <linearGradient
                id="gradient-0"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
                className="border-t border-[#000]"
              >
                <stop offset="0%" stopColor="#999" stopOpacity={1} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#999" stopOpacity={1} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#999" stopOpacity={1} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="gradient-3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F7E1D7" stopOpacity={1} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full h-[400px] block md:hidden">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 15, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="0%"
            barGap={0}
          >
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="year" hide />
            <defs>
              <linearGradient id="gradient-top" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F7E1D7" stopOpacity={1} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="gradient-rest" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#999" stopOpacity={1} />
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <Bar dataKey="value" radius={[0, 0, 0, 0]}>
              <LabelList
                dataKey="value"
                position="right"
                offset={10}
                style={{ fill: "#333", fontWeight: "bold" }}
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === 0 ? "url(#gradient-top)" : "url(#gradient-rest)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center items-center my-10">
        <button className="capitalize shadow-[0px_0px_14px_0px_#FF00007D] bg-white text-[#363636] text-lg font-medium px-5 py-2 rounded-full cursor-pointer">
          Book a session now
        </button>
      </div>
    </section>
  );
}
