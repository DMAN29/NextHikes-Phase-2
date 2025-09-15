import Image from "next/image";

interface WhoWeInterface {
  data?: any;
}

export default function WhoAreWe({ data }: WhoWeInterface) {
  return (
    <section className="custom-container bg-white !my-[50px]">
      <div className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto">
          <Image
            src={
              data?.image ||
              "http://api.nexthikes.in/uploads/5031e74b-95e2-46f3-93b5-e45f73ed841e.webp"
            }
            alt="nexthikes"
            fill
            className="object-contain"
            priority={false}
          />
        </div>

        <div className="lg:w-1/2 p-6 space-y-6">
          <h6 className="text-sm uppercase tracking-widest text-[#363636] font-bold">
            {data?.smallTitle || "Who are we"}
          </h6>
          <h2 className="font-bold lg:text-[40px] text-[28px] leading-tight text-[#363636]">
            {data?.title ||
              "Astrology Development: Your Ultimate Business Maker"}
          </h2>
          {/* <p className="text-[#363636] text-base font-normal leading-relaxed">
            {data?.description}
          </p> */}
          {/* <div
            dangerouslySetInnerHTML={{ __html: data?.description }}
            className="text-[#363636] text-base font-normal leading-relaxed"
          /> */}
          <p className="text-[#363636] text-base font-normal leading-relaxed">
            At Nexthikes, we don’t just build projects — we build businesses.
            Our expertise spans across web and mobile app development, iOS
            solutions, SEO, and digital strategies, enabling us to deliver
            end-to-end solutions for entrepreneurs and enterprises alike. We
            focus on creating innovative, scalable, and reliable products that
            align with your vision and business goals. With a highly skilled and
            passionate team, we ensure a seamless journey from ideation and
            planning to development and delivery. Every solution we provide is
            designed to accelerate growth, strengthen your digital presence, and
            transform ideas into long-term business success.
          </p>
          {/* <button className="uppercase bg-[#F37021] text-[#DEE7E4] font-bold p-3 rounded-md">
            know more
          </button> */}
        </div>
      </div>
    </section>
  );
}
