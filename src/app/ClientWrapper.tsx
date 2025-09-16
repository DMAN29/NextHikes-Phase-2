"use client";

import { HeaderColorProvider } from "./context/HeaderColorContext";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <HeaderColorProvider>
      <Header />
      {children}
      <Footer />
    </HeaderColorProvider>
  );
}
