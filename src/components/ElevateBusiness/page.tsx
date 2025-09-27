import Link from "next/link";

interface Button {
  label: string;
  url: string;
}

interface ElevateBusinessPageData {
  title: string;
  buttons: Button[];
}

interface ElevateBusinessPageProps {
  data?: ElevateBusinessPageData;
}

export default function ElevateBusinessPage({
  data,
}: ElevateBusinessPageProps) {
  const finalData = data ?? {
    title: "Elevate your business with professional Development services",
    buttons: [
      {
        label: "Connect with our Experts Today",
        url: "/contact-us",
      },
    ],
  };

  return (
    <div className="bg-[#003049] mb-10">
      <div className="max-w-7xl mx-auto px-4 py-15 text-center">
        <h1 className="text-white md:text-2xl font-medium mb-4">
          {finalData.title}
        </h1>
        {finalData.buttons.map((button, index) => (
          <Link href={button.url} key={index}>
            <button
              className="bg-white text-[#363636] px-3 py-2 cursor-pointer rounded-full font-medium text-xs md:text-base"
              style={{ boxShadow: "0px 0px 14px 0px #FFFFFFE0" }}
            >
              {button.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
