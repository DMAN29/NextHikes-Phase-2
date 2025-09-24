"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MobileMenuContextProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(undefined);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) throw new Error("useMobileMenu must be used within MobileMenuProvider");
  return context;
};
