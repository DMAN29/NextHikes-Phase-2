"use client";

import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import Image from "next/image";

const data = [
  { year: "2022", value: 0.3, icon: "/icons/2022.png" },
  { year: "2023", value: 0.6, icon: "/icons/2023.png" },
  { year: "2024", value: 0.9, icon: "/icons/2024.png" },
  { year: "2025", value: 2.0, icon: "/icons/2025.png" },
];

const CustomIcon = (props: any) => {
  const { x, y, width, height, payload } = props;
  return (
    <foreignObject x={x + width / 2 - 20} y={y - 40} width={40} height={40}>
      <Image src={payload.icon} alt="icon" width={40} height={40} />
    </foreignObject>
  );
};

export default function ProjectGraph() {
  return (
    <section className="relative min-h-screen">
      <div className="flex items-center relative">
        <div className="">
          <Image
            src="/icons/magic.svg"
            alt="magic-svg"
            width={350}
            height={200}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-black md:text-6xl font-medium">
            Most-Successful Business Idea in 2025
          </h2>
          <p className="text-[#363636] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="0%" barGap={0}>
            <Bar
              dataKey="value"
              radius={[0, 0, 0, 0]}
              stroke="#000"
              strokeWidth={1}
            >
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
    </section>
  );
}
