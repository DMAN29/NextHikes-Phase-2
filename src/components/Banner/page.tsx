"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Aurora from "../Aurora";
import { useHeaderColor } from "@/app/context/HeaderColorContext";
import { useEffect, useRef } from "react";
import Galaxy from "../Galaxy";

type Platform =
  | "home"
  | "astrology"
  | "e-commerce"
  | "services"
  | "about"
  | "gaming"
  | "web-dev"
  | "app-development"
  | "platform-development";

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
            {cta.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.url}
                className="rounded-full p-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold flex items-center gap-1  transition hover:scale-105"
                style={{
                  backgroundColor: btn.backgroundColor || "#0f172a",
                  color: btn.textColor || "#fff",
                }}
              >
                {btn.text} <FaAngleRight />
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
        <section className="relative overflow-hidden md:min-h-screen">
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
                      className="text-2xl text-center md:text-start md:text-5xl font-extrabold text-slate-900"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                  {subTitle && (
                    <p
                      className="mt-5 text-center md:text-start text-xs md:text-sm text-slate-600"
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
          {/* Background */}
          <div
            className="absolute inset-0 -z-10"
            style={{ backgroundColor: backgroundColor?.[0] || "#FCF4EC" }}
          ></div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-[80px] sm:pt-[100px] md:pt-[120px] flex flex-col items-center text-center">
            {/* Heading */}
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

            {bannerImage && (
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

                {/* Banner Image */}
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
            )}
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

    case "gaming":
      return (
        <section className="relative w-full md:min-h-screen flex flex-col items-center pt-40">
          <div className="absolute inset-0 z-1 w-full h-full">
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
              {cta.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.url}
                  className="px-6 py-3 rounded-full font-medium text-center w-full sm:w-auto transition hover:opacity-90 inline-flex uppercase"
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
                <div className="absolute z-10 hidden md:block left-[-2%] top-1/2 transform -translate-y-1/2 w-[40%] max-w-[396px] h-[100%]">
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
          className="relative pt-20 md:pb-[200px] md:min-h-screen overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="custom-container mx-auto !px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              {title && (
                <h1
                  className="text-4xl md:text-5xl text-center mt-15 font-medium uppercase bg-gradient-to-l from-[#72AFDD] to-[#E78667] bg-clip-text text-transparent"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
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
                  <div className="flex flex-col items-center">
                    <Image
                      key={idx}
                      src={img.icon}
                      alt={`banner-${idx}`}
                      width={1000}
                      height={1000}
                      className="w-[50px] sm:w-[250px] md:w-[600px] h-auto"
                      priority={idx === 0}
                    />
                    <p className="text-white -mt-15 uppercase font-bold text-base">
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
