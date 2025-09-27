interface FutureData {
  title: string;
  description: string;
}
interface FutureSectionProps {
  data: FutureData;
}

export default function FutureSection({ data }: FutureSectionProps) {
  return (
    <div className="w-11/12 mx-auto text-center my-5 md:my-12">
      <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed my-2 md:my-5 font-medium">
        {data.title}
      </h1>
      <p className="text-xs md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto">
        {data.description}
      </p>
    </div>
  );
}
