"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Aurora from "../Aurora";
import { useHeaderColor } from "@/app/context/HeaderColorContext";
import { useEffect, useRef } from "react";

type Platform = "home" | "astrology" | "e-commerce" | "services" | "about";

interface BannerCTA {
  text: string;
  url: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
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
  bannerImage?: string;
  cta: BannerCTA[];
  headerTextColor?: string;
}

export default function Banner({
  platform,
  backgroundColor,
  title,
  subTitle,
  bannerImage,
  cta,
  headerTextColor = "#000",
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
                className="rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-1.5  transition hover:scale-105"
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
                className="px-6 py-3 rounded-full font-medium border text-center transition hover:opacity- uppercase"
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

      default:
        return null;
    }
  };

  // switch-case for platform layout
  switch (platform) {
    case "home":
      return (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 [clip-path:polygon(0_0,100%_0,100%_18%,0_56%)]">
            <Aurora
              colorStops={["#9AE3FF", "#FED375", "#FF403D", "#B98AD9"]}
              blend={0.96}
              speed={1.7}
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-[150px] pb-24 md:pb-36">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                {title && (
                  <h1
                    className="text-4xl md:text-5xl font-extrabold text-slate-900"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
                {subTitle && (
                  <p
                    className="mt-5 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: subTitle }}
                  />
                )}
                {renderCTA("home")}
              </div>
              {bannerImage && (
                <Image
                  src={bannerImage}
                  alt="banner"
                  width={1000}
                  height={1000}
                  className="w-full"
                  priority
                />
              )}
            </div>
          </div>
        </section>
      );

    case "astrology":
      return (
        <section className="relative overflow-hidden mb-7 h-screen">
          <div
            className="absolute inset-0 -z-10"
            style={{ backgroundColor: backgroundColor?.[0] || "#FCF4EC" }}
          ></div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-[80px] sm:pt-[100px] md:pt-[120px] flex flex-col items-center text-center">
            {/* Heading */}
            {title && (
              <h1
                className="banner-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#393939] leading-snug"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subTitle && (
              <p
                className="mt-3 sm:mt-4 text-lg sm:text-3xl text-[#363636] font-light max-w-xl sm:max-w-2xl"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            <div className="mt-4 sm:mt-6">{renderCTA("astrology")}</div>
            {bannerImage && (
              <div className="relative w-full flex justify-center mt-8 sm:mt-10 h-[170px] sm:h-[350px] md:h-[500px]">
                <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 w-[300px] sm:w-[600px] md:w-[980px] h-[150px] sm:h-[300px] md:h-[497px] rounded-t-full">
                  <Image
                    src="/icons/inner-circle-4.svg"
                    alt="inner-circle-icon"
                    width={980}
                    height={497}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>
                <div className="absolute -bottom-12 sm:-bottom-20 md:-bottom-24 w-[280px] sm:w-[500px] md:w-[900px] h-[140px] sm:h-[280px] md:h-[475px] rounded-t-full">
                  <Image
                    src="/icons/inner-circle-3.svg"
                    alt="inner-circle-icon"
                    width={900}
                    height={475}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>
                <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 w-[250px] sm:w-[450px] md:w-[810px] h-[120px] sm:h-[250px] md:h-[428px] rounded-t-full">
                  <Image
                    src="/icons/inner-circle-2.svg"
                    alt="inner-circle-icon"
                    width={810}
                    height={428}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>

                <div className="absolute -bottom-12 sm:-bottom-18 md:-bottom-25 w-[220px] sm:w-[400px] md:w-[750px] h-[110px] sm:h-[220px] md:h-[400px] rounded-t-full overflow-visible bg-[#E7FFDB]">
                  <Image
                    src="/icons/inner-circle-1.svg"
                    alt="inner-circle-icon"
                    width={750}
                    height={400}
                    className="rounded-t- z-10 animate-spin [animation-duration:17s]"
                  />
                </div>

                {/* Banner image */}
                <Image
                  src={bannerImage}
                  alt="banner"
                  width={200}
                  height={200}
                  className="relative z-10 w-[120px] sm:w-[250px] md:w-[400px] h-auto"
                  priority
                />
              </div>
            )}
          </div>
        </section>
      );

    case "e-commerce":
      return (
        <section className="relative py-30 px-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: backgroundColor?.[0] || "#FCF4EC",
            }}
          ></div>

          <div className="mx-auto px-6">
            {title && (
              <h1
                className="text-5xl font-semibold text-[#000000]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subTitle && (
              <p
                className="mt-5 text-lg font-normal text-[#000000]"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            )}
            <div className="mt-8">{renderCTA("e-commerce")}</div>
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
            {bannerImage && (
              <Image
                src={bannerImage}
                alt="services-banner"
                width={600}
                height={600}
                className="rounded-xl shadow-lg"
                priority
              />
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
            {bannerImage && (
              <div className="mt-10 flex justify-center">
                <Image
                  src={bannerImage}
                  alt="about-banner"
                  width={700}
                  height={700}
                  className="rounded-2xl shadow-md"
                  priority
                />
              </div>
            )}
          </div>
        </section>
      );

    default:
      return null;
  }
}
