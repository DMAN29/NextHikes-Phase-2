"use client";

import React, { createContext, useContext, useState, useMemo, useRef } from "react";

type HeaderColorContextType = {
  textColor: string;
  setTextColor: (color: string) => void;
};

const HeaderColorContext = createContext<HeaderColorContextType | undefined>(undefined);

export function HeaderColorProvider({ children }: { children: React.ReactNode }) {
  const [textColor, setTextColor] = useState<string>("#fff");
  const value = useMemo(() => ({ textColor, setTextColor }), [textColor]);

  return <HeaderColorContext.Provider value={value}>{children}</HeaderColorContext.Provider>;
}

export function useHeaderColor() {
  const ctx = useContext(HeaderColorContext);
  if (!ctx) throw new Error("useHeaderColor must be used inside HeaderColorProvider");
  return ctx;
}