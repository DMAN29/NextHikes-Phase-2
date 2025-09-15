"use client";

import React from "react";
import clsx from "clsx";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  circle?: boolean;
  animation?: "pulse" | "wave" | "none";
  baseColor?: string;
  highlightColor?: string;
  duration?: number;
  style?: React.CSSProperties;
  containerClassName?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  className,
  circle = false,
  animation = "pulse",
  baseColor = "var(--skeleton-base, #e5e7eb)",
  highlightColor = "var(--skeleton-highlight, #f3f4f6)",
  duration = 1.5,
  style,
  containerClassName,
}) => {
  const isCircle = circle || borderRadius === "50%";

  const cssVariables = {
    "--skeleton-animation-duration": `${duration}s`,
    "--skeleton-base-color": baseColor,
    "--skeleton-highlight-color": highlightColor,
  } as React.CSSProperties;

  return (
    <div className={clsx("skeleton-container", containerClassName)}>
      <div
        className={clsx(
          "skeleton",
          animation === "pulse" && "skeleton-pulse",
          animation === "wave" && "skeleton-wave",
          className
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          borderRadius: isCircle
            ? "50%"
            : typeof borderRadius === "number"
            ? `${borderRadius}px`
            : borderRadius,
          ...cssVariables,
          ...style,
        }}
        aria-busy="true"
        aria-live="polite"
        role="status"
      />

      <style jsx global>{`
        .skeleton {
          background-color: var(--skeleton-base-color);
          position: relative;
          overflow: hidden;
        }

        .skeleton-pulse {
          animation: pulse var(--skeleton-animation-duration)
            cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .skeleton-wave::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            var(--skeleton-highlight-color),
            transparent
          );
          animation: wave var(--skeleton-animation-duration) linear infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Skeleton;
