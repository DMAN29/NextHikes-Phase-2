import Image from "next/image";

interface RecognitionProps {
  title: string;
  images: { url: string; alt?: string }[];
}
interface FeatherProps {
  recognizedBy: RecognitionProps;
  feathers: RecognitionProps;
}

export default function Feathers({ recognizedBy, feathers }: FeatherProps) {
  return (
    <section className="my-15 md:min-h-screen flex flex-col items-center justify-center">
      <h3 className="uppercase text-[#000000CC] text-[15px] md:text-4xl font-semibold text-center mb-5 md:mb-10">
        {feathers?.title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {feathers?.images?.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32"
          >
            <Image
              src={icon.url}
              alt={icon.alt || `icon-${index}`}
              width={128}
              height={128}
              className="object-contain grayscale"
            />
          </div>
        ))}
      </div>

      <h3 className="uppercase text-[#000000CC] text-[15px] md:text-4xl font-semibold text-center mt-10 mb-5 md:mb-10">
        {recognizedBy?.title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {recognizedBy?.images?.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32"
          >
            <Image
              src={icon.url}
              alt={icon.alt || `icon-${index}`}
              width={128}
              height={128}
              className="object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
