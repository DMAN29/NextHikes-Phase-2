import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import { gsap } from "gsap";

export default function AIIntegration() {
  const imageRef = useRef(null);
  const borderRef = useRef(null);
  // Create refs for inner wrappers that will be scaled
  const textRefs = [useRef(null), useRef(null), useRef(null)];
  const imageRotationDuration = 40; // seconds

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotation: 360, // clockwise rotation
        duration: imageRotationDuration,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }

    if (borderRef.current) {
      gsap.to(borderRef.current, {
        rotation: -360, // anticlockwise rotation
        duration: imageRotationDuration * 2,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }

    // Define animation duration as a variable so it can be easily changed
    const textAnimDuration = 1; // seconds for each phase (up and down)

    // Create a sequential timeline that will animate each text one after another
    const timeline = gsap.timeline({ repeat: -1 });

    textRefs.forEach((ref, i) => {
      if (ref.current) {
        // Calculate position based on previous animations
        // Each text gets textAnimDuration*2 seconds (up and down) before the next starts
        const position = i * textAnimDuration * 2;

        // First animation: scale from 1 to 1.5
        timeline.to(
          ref.current,
          {
            scale: 1.2,
            duration: textAnimDuration,
            ease: "power1.inOut",
            transformOrigin: "center center",
          },
          position // Start at calculated position
        );

        // Second animation: scale from 1.5 back to 1
        timeline.to(
          ref.current,
          {
            scale: 1,
            duration: textAnimDuration,
            ease: "power1.inOut",
            transformOrigin: "center center",
          },
          position + textAnimDuration // Start after first animation completes
        );
      }
    });
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-black text-white my-20 w-full"
      style={{
        boxShadow: "0 0 40px 0 rgba(0,0,0,0.9), 0 20px 40px 0 rgba(0,0,0,0.9)",
      }}
    >
      <div className="absolute md:top-12 md:left-16 left-1/2 top-4 sm:transform md:translate-x-0 -translate-x-1/2 text-center md:text-left w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
          <span className="text-cyan-400 font-bold">AI</span> Integration
        </h1>
      </div>

      <div
        ref={imageRef}
        className="relative w-[600px] h-[600px] rounded-full overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/icons/web1.svg"
          alt="AI Globe"
          layout="fill"
          objectFit="contain"
          priority
        />
        <svg
          ref={borderRef}
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="120"
            cy="120"
            r="115"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            strokeDasharray="20 25"
          />
        </svg>
      </div>

      {/* Text 0 */}
      <div className="absolute left-[250px] bottom-20 flex items-center w-60">
        <div className="w-4 h-4 rounded-full bg-white shrink-0"></div>
        <div ref={textRefs[0]} style={{ transformOrigin: "center center" }}>
          <SplitText
            text="AI Astrologer Implementation step 1"
            className="text-2xl font-medium ml-2"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>

      {/* Text 1 */}
      <div className="absolute right-[250px] top-28 flex items-center w-60">
        <div className="w-4 h-4 rounded-full bg-white shrink-0"></div>
        <div ref={textRefs[1]} style={{ transformOrigin: "center center" }}>
          <SplitText
            text="AI Doctor Implementation"
            className="text-2xl font-medium ml-2"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px50px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>

      {/* Text 2 */}
      <div className="absolute right-[250px] bottom-28 flex items-center w-60">
        <div className="w-4 h-4 rounded-full bg-white shrink-0"></div>
        <div ref={textRefs[2]} style={{ transformOrigin: "center center" }}>
          <SplitText
            text="AI Astrologer Implementation"
            className="text-2xl font-medium ml-2"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px50px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>
    </div>
  );
}
