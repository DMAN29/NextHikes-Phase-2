interface IntroTextData {
  title: string;
}

interface IntroTextProps {
  data?: IntroTextData;
}

export default function IntroText({ data }: IntroTextProps) {
  return (
    <section className="w-11/12 mx-auto">
      <p className="text-center  my-4 md:my-8  md:text-lg lg:text-2xl  ">
        {data?.title}
      </p>
    </section>
  );
}
