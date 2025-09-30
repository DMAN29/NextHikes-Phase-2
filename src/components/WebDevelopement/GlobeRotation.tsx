import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import { gsap } from "gsap";

export default function AIIntegration() {
  const imageRef = useRef(null);
  const textRefs = [useRef(null), useRef(null), useRef(null)];
  const imageRotationDuration = 40; // seconds

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Larger screens (md and up)
    mm.add("(min-width: 768px)", () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          rotation: 360,
          duration: imageRotationDuration,
          ease: "linear",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }

      const textAnimDuration = 1;
      const timeline = gsap.timeline({ repeat: -1 });

      textRefs.forEach((ref, i) => {
        if (ref.current) {
          const position = i * textAnimDuration * 2;
          timeline.to(
            ref.current,
            {
              scale: 1.2,
              duration: textAnimDuration,
              ease: "power1.inOut",
              transformOrigin: "center center",
            },
            position
          );
          timeline.to(
            ref.current,
            {
              scale: 1,
              duration: textAnimDuration,
              ease: "power1.inOut",
              transformOrigin: "center center",
            },
            position + textAnimDuration
          );
        }
      });

      return () => {
        timeline.kill();
      };
    });

    // Smaller screens (below md)
    mm.add("(max-width: 767px)", () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          rotation: 360,
          duration: imageRotationDuration,
          ease: "linear",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }

      const timeline = gsap.timeline({ repeat: -1 });

      gsap.set(
        textRefs.map((r) => r.current),
        {
          opacity: 0,
          display: "flex",
          position: "absolute",
          bottom: "12px",
          left: "50%",
          xPercent: -50,
        }
      );

      textRefs.forEach((ref, i) => {
        if (ref.current) {
          const position = i * 4;

          timeline.to(
            ref.current,
            {
              opacity: 1,
              y: 0,
              scale: 1.2,
              duration: 2,
              ease: "power1.out",
              transformOrigin: "center center",
            },
            position
          );
          timeline.to(
            ref.current,
            {
              opacity: 0,
              y: 40,
              scale: 1,
              duration: 2,
              ease: "power1.in",
              transformOrigin: "center center",
            },
            position + 2
          );
        }
      });

      return () => {
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[900px] bg-black text-white my-20 w-full overflow-hidden"
        style={{
          boxShadow:
            "0 0 40px 0 rgba(0,0,0,0.9), 0 20px 40px 0 rgba(0,0,0,0.9)",
        }}
      >
        <div className="absolute top-12 md:left-16 left-1/2 transform md:translate-x-0 -translate-x-1/2 text-center md:text-left w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
            <span className="text-cyan-400 font-bold">AI</span> Integration
          </h1>
        </div>

        {/* Responsive rotating image container without padding, with will-change */}
        <div
          ref={imageRef}
          className="relative w-72 h-72 md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden flex items-center justify-center"
          style={{ willChange: "transform" }}
        >
          <Image
            src="/icons/web1.svg"
            alt="AI Globe"
            layout="fill"
            objectFit="contain"
            priority
          />
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
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

        {/* Text elements */}
        <div
          ref={textRefs[0]}
          className="absolute left-1/2 bottom-20 -translate-x-1/2 md:left-[20px] lg:left-[100px] xl:left-[250px] md:translate-x-0 flex items-center w-60 md:opacity-100 opacity-0"
        >
          <div className="w-4 h-4 rounded-full bg-white shrink-0"></div>
          <div style={{ transformOrigin: "center center", opacity: 1 }}>
            <SplitText
              text="AI Astrologer Implementation step 1"
              className="text-base md:text-2xl font-medium ml-2"
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

        <div
          ref={textRefs[1]}
          className="absolute left-1/2 bottom-20 -translate-x-1/2 md:top-28 md:bottom-auto md:translate-x-0 md:left-auto md:right-[20px] lg:right-[100px] xl:right-[250px] flex items-center w-60 md:opacity-100 opacity-0"
        >
          <div className="w-4 h-4 rounded-full bg-white shrink-0"></div>
          <div style={{ transformOrigin: "center center", opacity: 1 }}>
            <SplitText
              text="AI Doctor Implementation"
              className="text-base md:text-2xl font-medium ml-2"
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

        <div
          ref={textRefs[2]}
          className="absolute left-1/2 bottom-20 -translate-x-1/2 md:bottom-28 md:translate-x-0 md:left-auto md:right-[20px] lg:right-[100px] xl:right-[250px] flex items-center w-60 md:opacity-100 opacity-0"
        >
          <div className="w-4 h-4 rounded-full bg-white shrink-0"></div>
          <div style={{ transformOrigin: "center center", opacity: 1 }}>
            <SplitText
              text="AI Astrologer Implementation"
              className="text-base md:text-2xl font-medium ml-2"
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
    </>
  );
}
