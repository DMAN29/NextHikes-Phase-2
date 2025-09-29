"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Aurora from "../Aurora";
import { useHeaderColor } from "@/app/context/HeaderColorContext";
import { useEffect, useRef } from "react";
import Galaxy from "../Galaxy";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type Platform =
  | "home"
  | "astrology"
  | "e-commerce"
  | "services"
  | "about"
  | "gaming"
  | "web-dev"
  | "app-development"
  | "platform-development"
  | "ai"
  | "healthcare"
  | "digital";

interface BannerCTA {
  text: string;
  url: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface BannerImage {
  icon: string;
  title?: string;
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}

interface BannerProps {
  platform: Platform;
  backgroundColor?:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string];
  title?: string;
  subTitle?: string;
  bannerImage?: BannerImage[];
  cta: BannerCTA[];
  headerTextColor?: string;
  backgroundImage?: string;
}

export default function Banner({
  platform,
  backgroundColor,
  title,
  subTitle,
  bannerImage,
  cta,
  headerTextColor = "#000",
  backgroundImage,
}: BannerProps) {
  const { textColor, setTextColor } = useHeaderColor();
  const prevColorRef = useRef(textColor);

  useEffect(() => {
    prevColorRef.current = textColor;
    setTextColor(headerTextColor);

    return () => {
      setTextColor(prevColorRef.current);
    };
  }, [headerTextColor, setTextColor]);
  const renderCTA = (variant: Platform) => {
    if (!cta || cta.length === 0) return null;

    switch (variant) {
      case "home":
        return (
          <div className="mt-7 flex items-center gap-4">
            {cta.map((btn: any, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="rounded-full p-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold flex items-center gap-1  transition hover:scale-105"
                style={{
                  backgroundColor: btn.backgroundColor || "#0f172a",
                  color: btn.textColor || "#fff",
                }}
              >
                {btn.label} <FaAngleRight />
              </Link>
            ))}
          </div>
        );

      case "astrology":
        return (
          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="px-6 py-3 border-2 text-sm font-semibold rounded-full flex items-center gap-1.5 transition hover:bg-orange-100"
                style={{
                  borderColor: btn.borderColor || "none",
                  backgroundColor: btn.backgroundColor || "transparent",
                  color: btn.textColor || "#ED0687",
                }}
              >
                {btn.text} <FaAngleRight />
              </Link>
            ))}
          </div>
        );

      case "e-commerce":
        return (
          <div className="mt-8 flex flex-col justify-center gap-3">
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="px-6 py-3 rounded-full w-full max-w-sm font-medium border text-center transition hover:opacity- uppercase"
                style={{
                  background: btn.backgroundColor || "transparent",
                  color: btn.textColor,
                  borderColor: btn.borderColor,
                }}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        );

      case "ai":
        return (
          <div className="mt-8 flex flex-col justify-center gap-3">
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="px-6 py-3 rounded-full w-full text-base md:text-lg max-w-sm font-medium border text-center transition hover:opacity- uppercase"
                style={{
                  background: btn.backgroundColor || "transparent",
                  color: btn.textColor,
                  borderColor: btn.borderColor,
                }}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        );

      case "gaming":
        return (
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full">
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="px-6 py-3 rounded-full w-full sm:w-auto font-medium text-center transition hover:opacity-90 inline-flex uppercase"
                style={{
                  background: btn.backgroundColor || "transparent",
                  color: btn.textColor,
                  border: `2px solid ${btn.borderColor || "transparent"}`,
                }}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        );

      case "services":
        return (
          <div className="mt-8 flex gap-4">
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="px-6 py-3 rounded-xl text-sm font-semibold transition hover:opacity-90"
                style={{
                  backgroundColor: btn.backgroundColor || "#f59e0b",
                  color: btn.textColor || "#fff",
                }}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        );

      case "app-development":
        return (
          <div className="mt-8 flex gap-4 absolute bottom-0 right-[10%] transform translate-y-1/2 z-20">
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="px-6 py-3 rounded-full text-sm font-semibold transition uppercase shadow-[0px_0px_14px_0px_#083E92]"
                style={{
                  backgroundColor: btn.backgroundColor || "#f59e0b",
                  color: btn.textColor || "#fff",
                }}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  // switch-case for platform layout
  switch (platform) {
    case "home":
      return (
        <section className="relative overflow-hidden h-full md:min-h-screen">
          <div className="absolute inset-0 -z-10 [clip-path:polygon(0_0,100%_0,100%_4%,0_13%)] md:[clip-path:polygon(0_0,100%_0,100%_18%,0_56%)]">
            <Aurora
              colorStops={["#9AE3FF", "#FED375", "#FF403D", "#B98AD9"]}
              blend={0.96}
              speed={1.7}
            />
          </div>
          <div className="relative mx-auto px-6 pt-[150px] pb-24 md:pb-36">
            <div className="custom-container">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  {title && (
                    <h1
                      className="text-2xl text-center md:text-start md:text-5xl font-extrabold text-[#363636]"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                  {subTitle && (
                    <p
                      className="mt-5 text-center md:text-start text-xs md:text-lg text-[#425466]"
                      dangerouslySetInnerHTML={{ __html: subTitle }}
                    />
                  )}
                  {renderCTA("home")}
                </div>
              </div>
            </div>
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt={`banner`}
                width={1000}
                height={1000}
                className="relative w-[90%] h-auto mx-auto mt-12 md:absolute md:w-[55vw] md:h-[80vh] md:top-20 md:-right-30 md:mt-0"
                priority={true}
              />
            )}
          </div>
        </section>
      );

    case "astrology":
      return (
        <section className="relative overflow-hidden mb-7 md:min-h-screen">
          <div
            className="absolute inset-0 -z-10"
            style={{ backgroundColor: backgroundColor?.[0] || "#FCF4EC" }}
          ></div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-[80px] sm:pt-[100px] md:pt-[120px] flex flex-col items-center text-center">
            {title && (
              <h1
                className="banner-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-[#393939] leading-snug"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {subTitle && (
              <p
                className="mt-2 sm:mt-3 text-sm sm:text-lg md:text-3xl lg:text-3xl text-[#363636] font-light max-w-xs sm:max-w-xl md:max-w-2xl"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}

            <div className="mt-3 sm:mt-4">{renderCTA("astrology")}</div>

            {backgroundImage && (
              <div className="relative w-full flex justify-center mt-[80px] sm:mt-8 md:mt-10 h-[150px] sm:h-[250px] md:h-[500px]">
                <div className="absolute -bottom-8 sm:-bottom-16 md:-bottom-20 w-[200px] sm:w-[600px] md:w-[980px] h-[120px] sm:h-[300px] md:h-[497px] rounded-t-full">
                  <Image
                    src="/icons/inner-circle-4.svg"
                    alt="inner-circle-icon"
                    width={980}
                    height={497}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>
                <div className="absolute -bottom-9 sm:-bottom-20 md:-bottom-24 w-[180px] sm:w-[500px] md:w-[900px] h-[110px] sm:h-[280px] md:h-[475px] rounded-t-full">
                  <Image
                    src="/icons/inner-circle-3.svg"
                    alt="inner-circle-icon"
                    width={900}
                    height={475}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>
                <div className="absolute -bottom-8 sm:-bottom-16 md:-bottom-20 w-[150px] sm:w-[450px] md:w-[810px] h-[100px] sm:h-[250px] md:h-[428px] rounded-t-full">
                  <Image
                    src="/icons/inner-circle-2.svg"
                    alt="inner-circle-icon"
                    width={810}
                    height={428}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>
                <div className="absolute -bottom-9 sm:-bottom-18 md:-bottom-25 w-[130px] sm:w-[400px] md:w-[750px] h-[90px] sm:h-[220px] md:h-[400px] rounded-t-full overflow-visible bg-[#E7FFDB]">
                  <Image
                    src="/icons/inner-circle-1.svg"
                    alt="inner-circle-icon"
                    width={750}
                    height={400}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>

                {backgroundImage && (
                  <Image
                    src={backgroundImage}
                    alt={`banner`}
                    width={1000}
                    height={1000}
                    className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                    priority
                  />
                )}
              </div>
            )}
          </div>
          <div className="absolute inset-0 z-20">
            <div className="hidden  w-full h-full">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                autoplay
              >
                {bannerImage?.map((img, idx) => (
                  <SwiperSlide key={idx} className="flex justify-center">
                    <Image
                      src={img.icon}
                      alt={`banner-${idx}`}
                      width={150}
                      height={250}
                      className="w-[150px] h-[87px]"
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hidden md:flex justify-center items-center w-full h-full relative">
              {bannerImage?.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute rounded-lg overflow-hidden"
                  style={{
                    top: img.position?.top,
                    left: img.position?.left,
                    right: img.position?.right,
                    bottom: img.position?.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: idx * 0.3,
                    duration: 1.2,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={img.icon}
                    alt={`banner-${idx}`}
                    width={250}
                    height={250}
                    className="w-[100px] sm:w-[200px] md:w-[150px] h-auto"
                    priority
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );

    case "e-commerce":
      return (
        <section className="relative flex flex-col md:flex-row items-center pt-20 md:py-30 px-6 sm:px-10 md:px-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: backgroundColor?.[0] || "#FCF4EC",
            }}
          ></div>
          <div className="mx-auto md:mx-0 md:flex-1 px-0 md:px-6 text-center md:text-left">
            {title && (
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#000000] leading-snug"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subTitle && (
              <p
                className="mt-4 sm:mt-5 text-base sm:text-lg md:text-lg font-normal text-[#000000]"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            <div className="mt-6 md:mt-8">{renderCTA("e-commerce")}</div>
          </div>

          {bannerImage && bannerImage.length > 0 && (
            <>
              {bannerImage.map((img, idx) => (
                <Image
                  key={idx}
                  src={img.icon}
                  alt={`banner-${idx}`}
                  width={1000}
                  height={1000}
                  className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                  priority={idx === 0}
                />
              ))}
            </>
          )}
        </section>
      );

    case "ai":
      return (
        <section className="relative flex flex-col md:min-h-screen md:flex-row items-center pt-20 md:py-30 px-6 sm:px-10 md:px-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: backgroundColor?.[0] || "#FCF4EC",
            }}
          ></div>
          <div
            className="mx-auto h-[100%] md:mx-0 md:flex-1 px-0 md:px-6 flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          >
            {title && (
              <h1
                className="text-lg uppercase text-center sm:text-4xl md:text-5xl font-semibold leading-snug text-transparent"
                style={{
                  background: `linear-gradient(
        90deg, 
        #000000 0%, 
        #212020 12.5%, 
        #343333 19.23%, 
        #9A014D 30.77%, 
        #FF7DD6 37.02%, 
        #000000 46.63%, 
        #000000 63.94%
      )`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {subTitle && (
              <p
                className="mt-4 sm:mt-5 capitalize w-full max-w-5xl text-[12px] sm:text-lg md:text-lg font-normal text-[#000000]"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            <div className="mt-6 md:mt-8">{renderCTA("ai")}</div>
          </div>

          {bannerImage && bannerImage.length > 0 && (
            <>
              {bannerImage.map((img, idx) => (
                <Image
                  key={idx}
                  src={img.icon}
                  alt={`banner-${idx}`}
                  width={1000}
                  height={1000}
                  className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                  priority={idx === 0}
                />
              ))}
            </>
          )}
        </section>
      );

    case "healthcare":
      return (
        // <section
        //   className="relative w-[90%] flex flex-col md:flex-row items-center pt-20 md:py-20 px-6 sm:px-10 md:px-20 rounded-bl-[50px]"
        //   style={{ background: backgroundColor?.[0] || "#FCF4EC" }}
        // >
        //   <div className="flex-1 flex flex-col justify-center items-start text-left md:pr-10">
        //     {title && (
        //       <h1
        //         className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug text-transparent"
        //         style={{
        //           background: `linear-gradient(
        //         90deg,
        //         #000000 0%,
        //         #212020 12.5%,
        //         #343333 19.23%,
        //         #9A014D 30.77%,
        //         #FF7DD6 37.02%,
        //         #000000 46.63%,
        //         #000000 63.94%
        //       )`,
        //           WebkitBackgroundClip: "text",
        //           backgroundClip: "text",
        //         }}
        //         dangerouslySetInnerHTML={{ __html: title }}
        //       />
        //     )}

        //     {subTitle && (
        //       <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal text-black max-w-2xl">
        //         {subTitle}
        //       </p>
        //     )}

        //     {cta.length > 0 && (
        //       <div className="mt-6 flex flex-wrap gap-4">
        //         {cta.map((btn, idx) => (
        //           <Link
        //             key={idx}
        //             href={btn.url}
        //             className="px-6 py-3 rounded-full font-medium text-center uppercase transition hover:opacity-90"
        //             style={{
        //               background: btn.backgroundColor,
        //               color: btn.textColor,
        //               border: `2px solid ${btn.backgroundColor}`,
        //             }}
        //           >
        //             {btn.text}
        //           </Link>
        //         ))}
        //       </div>
        //     )}
        //   </div>

        //   <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
        //     {bannerImage &&
        //       bannerImage.map((img, idx) => (
        //         <Image
        //           key={idx}
        //           src={img.icon}
        //           alt={`banner-${idx}`}
        //           width={400}
        //           height={400}
        //           className="w-[200px] sm:w-[250px] md:w-[400px] h-auto object-contain"
        //           priority={idx === 0}
        //         />
        //       ))}
        //   </div>
        // </section>
        <section className="md:min-h-screen">
          <Image
            src={"/image/healthcare-banner.webp"}
            alt="healthcare"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </section>
      );

    case "digital":
      return (
        // <section
        //   className="relative w-[90%] flex flex-col md:flex-row items-center pt-20 md:py-20 px-6 sm:px-10 md:px-20 rounded-bl-[50px]"
        //   style={{ background: backgroundColor?.[0] || "#FCF4EC" }}
        // >
        //   <div className="flex-1 flex flex-col justify-center items-start text-left md:pr-10">
        //     {title && (
        //       <h1
        //         className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug text-transparent"
        //         style={{
        //           background: `linear-gradient(
        //         90deg,
        //         #000000 0%,
        //         #212020 12.5%,
        //         #343333 19.23%,
        //         #9A014D 30.77%,
        //         #FF7DD6 37.02%,
        //         #000000 46.63%,
        //         #000000 63.94%
        //       )`,
        //           WebkitBackgroundClip: "text",
        //           backgroundClip: "text",
        //         }}
        //         dangerouslySetInnerHTML={{ __html: title }}
        //       />
        //     )}

        //     {subTitle && (
        //       <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal text-black max-w-2xl">
        //         {subTitle}
        //       </p>
        //     )}

        //     {cta.length > 0 && (
        //       <div className="mt-6 flex flex-wrap gap-4">
        //         {cta.map((btn, idx) => (
        //           <Link
        //             key={idx}
        //             href={btn.url}
        //             className="px-6 py-3 rounded-full font-medium text-center uppercase transition hover:opacity-90"
        //             style={{
        //               background: btn.backgroundColor,
        //               color: btn.textColor,
        //               border: `2px solid ${btn.backgroundColor}`,
        //             }}
        //           >
        //             {btn.text}
        //           </Link>
        //         ))}
        //       </div>
        //     )}
        //   </div>

        //   <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
        //     {bannerImage &&
        //       bannerImage.map((img, idx) => (
        //         <Image
        //           key={idx}
        //           src={img.icon}
        //           alt={`banner-${idx}`}
        //           width={400}
        //           height={400}
        //           className="w-[200px] sm:w-[250px] md:w-[400px] h-auto object-contain"
        //           priority={idx === 0}
        //         />
        //       ))}
        //   </div>
        // </section>
        <section className="md:min-h-screen">
          <Image
            src={"/image/digital-desk.webp"}
            alt="digital"
            width={1000}
            height={1000}
            className="w-full h-full hidden md:block"
            priority
          />
          <Image
            src={"/image/digital-mobile.webp"}
            alt="digital"
            width={1000}
            height={1000}
            className="w-full h-full block md:hidden"
            priority
          />
        </section>
      );

    case "gaming":
      return (
        <section className="relative w-full md:min-h-screen flex flex-col items-center pt-40">
          <div className="absolute inset-0 z-1 w-full h-[400px] md:h-full">
            <Galaxy
              mouseRepulsion={true}
              mouseInteraction={true}
              density={1}
              glowIntensity={0.3}
              saturation={0}
              hueShift={140}
              rotationSpeed={0.1}
              twinkleIntensity={0.3}
            />
          </div>

          <div
            className="absolute inset-0 -z-10"
            style={{ background: backgroundColor?.[0] || "#FCF4EC" }}
          ></div>

          <div className="relative z-10 mx-auto px-4 text-center max-w-4xl flex flex-col items-center gap-6">
            {title && (
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fff] leading-snug uppercase"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subTitle && (
              <p
                className="text-base sm:text-lg md:text-lg font-normal text-[#fff]"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              {cta?.map((btn: any, idx: any) => (
                <Link
                  key={idx}
                  href={btn.url}
                  className="px-6 py-3 rounded-full font-medium text-center w-full sm:w-auto transition hover:opacity-90 inline-flex uppercase"
                  style={{
                    background: btn.backgroundColor || "linear-gradient(90deg, #E0802E 0%, #F6A756 100%)",
                    color: btn.textColor || "white",
                    border: `2px solid ${btn.borderColor || "transparent"}`,
                  }}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

          {bannerImage && (
            <>
              {bannerImage.map((img: any, idx) => (
                <Image
                  key={idx}
                  src={img.icon}
                  alt={`banner-${idx}`}
                  width={1000}
                  height={1000}
                  className="relative w-[100%] h-auto"
                  priority={idx === 0}
                />
              ))}
            </>
          )}
        </section>
      );

    case "web-dev":
      return (
        <section className="relative pt-20 md:pb-[200px] overflow-hidden md:min-h-screen">
          <div className="absolute w-[1000px] h-[1000px] md:w-[1128px] md:h-[1128px] top-[22%] left-[10%] -translate-x-1/2 -translate-y-1/2 bg-[#DEF4FF] rounded-full shadow-[0px_4px_24.3px_4px_#00000040] -z-10" />
          <div className="custom-container mx-auto !px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              {title && (
                <h1
                  className="text-4xl md:text-5xl font-bold uppercase text-[#183153]"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {subTitle && (
                <p
                  className="mt-5 text-[#183153] text-3xl capitalize font-medium"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                />
              )}
              {renderCTA("services")}
            </div>
            {bannerImage && bannerImage.length > 0 && (
              <>
                {bannerImage.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.icon}
                    alt={`banner-${idx}`}
                    width={1000}
                    height={1000}
                    className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                    priority={idx === 0}
                  />
                ))}
              </>
            )}
          </div>
          <div className="absolute hidden md:block w-[217px] h-[217px] bottom-50 -right-[15%] -translate-x-1/2 translate-y-1/2 bg-[#DEF4FF] rounded-full shadow-[0px_4px_24.3px_4px_#00000040] -z-10 overflow-hidden" />
          <div className="absolute hidden md:block w-[272px] h-[272px] bottom-0 right-[10%] -translate-x-1/2 translate-y-1/2 bg-[#DEF4FF] rounded-full shadow-[0px_4px_24.3px_4px_#00000040] -z-10" />
        </section>
      );

    case "app-development":
      return (
        <section className="relative w-full flex items-center justify-center py-25 overflow-hidden">
          <div className="container mx-auto px-4">
            <div
              className="relative bg-cover bg-center rounded-[40px] shadow-2xl"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-[40px]"></div>
              <div className="relative flex items-center min-h-[400px] md:min-h-[450px] bg-opacity-0 rounded-[40px] overflow-hidden">
                <div className="absolute z-10  left-[-2%] top-1/2 transform -translate-y-1/2 w-[40%] max-w-[396px] h-[100%]">
                  {bannerImage && bannerImage.length > 0 && (
                    <>
                      {bannerImage.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img.icon}
                          alt={`banner-${idx}`}
                          width={1000}
                          height={1000}
                          className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                          priority={idx === 0}
                        />
                      ))}
                    </>
                  )}
                </div>

                <div className="w-full md:w-1/2 ml-auto text-white p-8 md:p-16 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                    Innovate. <br />
                    Create. <br />
                    Dominate.
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Revolutionary Mobile Experiences Starts Here.
                  </p>
                </div>
              </div>
              {renderCTA("app-development")}
            </div>
          </div>
        </section>
      );

    case "platform-development":
      return (
        <section
          className="relative pt-20 md:pb-[200px] min-h-screen overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="custom-container mx-auto !px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              {title && (
                <>
                  <h1
                    className="hidden md:block md:text-5xl text-center md:mt-15 font-medium uppercase bg-gradient-to-l from-[#72AFDD] to-[#E78667] bg-clip-text text-transparent break-after-all"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <h1 className="text-lg block md:hidden text-center md:mt-15 font-medium uppercase bg-gradient-to-l from-[#72AFDD] to-[#E78667] bg-clip-text text-transparent">
                    {title.split(" ").map((word, idx) => (
                      <span key={idx} className="block md:inline">
                        {word}
                      </span>
                    ))}
                  </h1>
                </>
              )}
              {subTitle && (
                <p
                  className="mt-5 text-[#183153] text-3xl capitalize font-medium"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                />
              )}
            </div>
          </div>
          <div className="flex absolute bottom-5 left-1/2 -translate-x-1/2 justify-center items-center gap-4">
            {bannerImage && bannerImage.length > 0 && (
              <>
                {bannerImage.map((img, idx) => (
                  <div
                    className="flex flex-col items-center w-[60px] h-[150px] md:w-[200px] md:h-[200px]"
                    key={idx}
                  >
                    <Image
                      src={img.icon}
                      alt={`banner-${idx}`}
                      width={1000}
                      height={1000}
                      className="w-full h-full"
                      priority={idx === 0}
                    />
                    <p className="text-white -mt-12 uppercase font-bold text-[10px] md:text-base">
                      {img.title}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      );

    case "services":
      return (
        <section className="relative bg-slate-900 text-white py-20">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              {title && (
                <h1
                  className="text-4xl md:text-5xl font-extrabold"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {subTitle && (
                <p
                  className="mt-5 text-gray-300"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                />
              )}
              {renderCTA("services")}
            </div>
            {bannerImage && bannerImage.length > 0 && (
              <>
                {bannerImage.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.icon}
                    alt={`banner-${idx}`}
                    width={1000}
                    height={1000}
                    className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                    priority={idx === 0}
                  />
                ))}
              </>
            )}
          </div>
        </section>
      );

    case "about":
      return (
        <section className="relative bg-gradient-to-r from-pink-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-5xl text-center px-6">
            {title && (
              <h1
                className="text-4xl md:text-5xl font-extrabold text-slate-900"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subTitle && (
              <p
                className="mt-5 text-lg text-slate-700"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            {renderCTA("about")}
            {bannerImage && bannerImage.length > 0 && (
              <>
                {bannerImage.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.icon}
                    alt={`banner-${idx}`}
                    width={1000}
                    height={1000}
                    className="relative w-[100px] sm:w-[250px] md:w-[400px] h-auto"
                    priority={idx === 0}
                  />
                ))}
              </>
            )}
          </div>
        </section>
      );

    default:
      return null;
  }
}
