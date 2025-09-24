import Image from "next/image";

const img1 = "/image/app-1.png";
const img2 = "/image/app-2.png";

export default function AppBenfits() {
  const techInfo = [
    {
      title: "Native iOS:",
      items: ["Swift, Objective-C"],
    },
    {
      title: "Native Android:",
      items: ["Kotlin, Java"],
    },
    {
      title: "Cross-Platform:",
      items: ["Flutter, React Native, Xamarin"],
    },
    {
      title: "Backend & APIs:",
      items: ["Node.js, Python,", "Firebase, AWS Amplify"],
    },
    {
      title: "Databases:",
      items: ["SQLite, Realm,", "MongoDB, PostgreSQL"],
    },
    {
      title: "Expertise:",
      items: [
        "Swift, Kotlin, Java, Flutter,",
        "React Native, Firebase, AWS Amplify, Xamarin",
      ],
    },
  ];

  const overlayCards = [
    {
      title: "Always On:",
      text: "Apps keep your brand accessible 24/7.",
    },
    {
      title: "Personalization:",
      text: "Deliver tailored content and offers.",
    },
    {
      title: "Engagement:",
      text: "Push notifications and interactive features drive frequent use.",
    },
    {
      title: "Brand Loyalty:",
      text: "Foster a stronger connection with your audience.",
    },
  ];

  return (
    <section className="w-11/12 mx-auto">
      <p className="text-center  my-4 md:my-8  md:text-lg lg:text-2xl  ">
        Transform your ideas into powerful iOS and Android applications.
        NextHike crafts intuitive, high-performance mobile apps that engage
        users, streamline operations, and drive business growth.
      </p>

      <div className="flex flex-col md:flex-row justify-between w-full my-6 md:my-12">
        <div className="flex justify-center md:block">
          <Image
            src={img1}
            alt=""
            width={350}
            height={274}
            className="
      w-[250px] h-[225px]
      md:w-[300px] md:h-[270px]
      xl:w-[350px] xl:h-[316px]
    "
            priority
          />
        </div>

        <div className="w-full md:w-2/3 mt-8 md:mt-0  text-center md:text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-2 mb-8">
            The Mobile Advantage: Why Apps are Essential
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-2xl font-extralight">
            In today&lsquo;s mobile-first world, a strong app presence is critical.
            Mobile apps offer unparalleled opportunities for direct customer
            engagement, brand loyalty, and personalized experiences that
            traditional websites often cannot match. From enhancing customer
            service to creating new revenue streams, a well-designed app is a
            game-changer.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {overlayCards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden h-[250px] w-[250px] lg:h-[220px] lg:w-[220px] xl:h-[280px] xl:w-[280px]"
            >
              <Image
                src={img2}
                alt=""
                height={250}
                width={250}
                priority
                className="object-cover h-[250px] w-[250px] lg:h-[220px] lg:w-[220px] xl:h-[280px] xl:w-[280px]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #000000 55%)",
                  opacity: 0.7,
                }}
              />
              <div
                className="absolute inset-x-0 p-4 z-10"
                style={{ top: "40%" }}
              >
                <div className="text-white text-lg font-semibold text-center">
                  {card.title} <span className="font-normal">{card.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <section className="w-full bg-white flex justify-center relative">
        <div className="custom-container w-full px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 my-5">
            {overlayCards.map((item, index) => (
              <div
                className="relative rounded-xl overflow-hidden shadow-lg group h-70"
                key={index}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-white font-medium text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-white mt-1 text-xs sm:text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <p className=" text-[#363636] my-8 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left">
        Tools we use for Building Exceptional Mobile Apps
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#363636] mb-5 md:mb-10">
        {techInfo.map((block, i) => (
          <div
            key={i}
            className="border-l-5 border-[#083E92] pl-2 md:pl-5 py-1 md:py-3"
          >
            <div className="font-semibold truncate text-sm md:text-xl lg:text-2xl xl:text-3xl ">
              {block.title}
            </div>
            <div className="line-clamp-3  font-thin text-xs md:text-lg xl:text-2xl min-h-10 md:min-h-16">
              {block.items.join(" ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
