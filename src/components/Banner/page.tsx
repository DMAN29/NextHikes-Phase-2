"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Aurora from "../Aurora";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 [clip-path:polygon(0_0,100%_0,100%_18%,0_56%)]">
        <Aurora
          colorStops={[
            "#9AE3FF",
            "#FED375",
            "#FF403D",
            "#B98AD9"
          ]}
          blend={0.96}
          speed={1.7}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-[150px] pb-24 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              We Are Here To
              <br />
              Transform Your
              <br />
              Business with Our
              <br />
              <span className="text-slate-800">IT Solutions</span>
            </h1>

            <p className="mt-5 max-w-xl text-slate-600">
              At NextHike IT Solution, we offer cutting-edge digital and web
              solutions to help take business to the next level. Whether a
              stunning website, a powerful app, or custom software—expertise and
              experience deliver it.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 flex items-center gap-1.5"
              >
                Explore Now <FaAngleRight />
              </Link>
              <Link
                href="#"
                className="text-slate-800 hover:underline flex items-center gap-1.5"
              >
                Contact sales <FaAngleRight />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/icons/banner.svg"
              alt="banner-icon"
              width={1000}
              height={1000}
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
