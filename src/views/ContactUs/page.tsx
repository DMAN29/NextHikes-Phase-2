"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import ServiceFormPage from "@/components/ServiceForm/page";
import { useEffect, useRef } from "react";

export default function ContactUs() {
  const { textColor, setTextColor } = useHeaderColor();
  const prevColorRef = useRef(textColor);

  useEffect(() => {
    prevColorRef.current = textColor;
    setTextColor("#000");

    return () => {
      setTextColor(prevColorRef.current);
    };
  }, ["#000", setTextColor]);
  return (
    <section>
        <div className="flex">
            <div className="flex flex-col">
                <h1 className="capitalize text-black">get in <span>touch</span></h1>
            </div>
        </div>
      <ServiceFormPage backgroundColor="#452A7C1A" />
    </section>
  );
}
