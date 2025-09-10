import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 2,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className="relative inline-block rounded-[20px] overflow-hidden p-[2px]" // padding makes room for the animated border
      {...(rest as any)}
    >
      {/* Sparkle layers (move around border) */}
      <div
        className="absolute inset-0 opacity-70 animate-star-movement-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 25%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute inset-0 opacity-70 animate-star-movement-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 25%)`,
          animationDuration: speed,
        }}
      />

      {/* Inner content with gradient */}
      <div
        className={`relative z-10 rounded-[18px] ${className}`}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
