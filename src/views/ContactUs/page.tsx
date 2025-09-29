"use client";

import { useHeaderColor } from "@/app/context/HeaderColorContext";
import ContactInfo from "@/components/Contact/ContactInfo";
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
    <section className="mt-24">
      <ContactInfo />
      <ServiceFormPage backgroundColor="#452A7C1A" />
    </section>
  );
}
