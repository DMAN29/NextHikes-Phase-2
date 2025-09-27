interface ToolBlock {
  category: string;
  items: string[];
}

interface ToolsGridData {
  title: string;
  tools: ToolBlock[];
}

interface ToolsGridProps {
  data: ToolsGridData;
}

export default function ToolsGrid({ data }: ToolsGridProps) {
  return (
    <section className="w-11/12 mx-auto">
      <p className="text-[#363636] my-8 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left">
        {data.title}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#363636] mb-5 md:mb-10">
        {data.tools.map((block, i) => (
          <div
            key={i}
            className="border-l-5 border-[#083E92] pl-2 md:pl-5 py-1 md:py-3"
          >
            <div className="font-semibold truncate text-sm md:text-xl lg:text-2xl xl:text-3xl ">
              {block.category}
            </div>
            <div className="line-clamp-3 font-thin text-xs md:text-lg xl:text-2xl min-h-10 md:min-h-16">
              {block.items.join(" ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
