"use client";

import { useEffect, useState } from "react";
import HomePage from "@/pages/Home/page";

export default function Home() {
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPixelRatio(window.devicePixelRatio || 1);
    }
  }, []);

  return (
    // <div className="">
    //   

    //   <div
    //     style={{
    //       position: "relative",
    //       height: "500px",
    //       overflow: "hidden",
    //       background: "#000",
    //     }}
    //   >
    //     <ShapeBlur
    //       variation={0}
    //       pixelRatioProp={pixelRatio}
    //       shapeSize={0.5}
    //       roundness={0.5}
    //       borderSize={0.05}
    //       circleSize={0.5}
    //       circleEdge={1}
    //     />
    //   </div>
    // </div>
    <HomePage />
  );
}
