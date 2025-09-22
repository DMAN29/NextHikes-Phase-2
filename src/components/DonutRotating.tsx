// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const ROTATION_DURATION = 10000; // rotation duration in ms
// const rotateSpeedFactor = 0.5; // slower rotation speed
// const img = "/image/circle1.png";

// const items = [
//   "item1",
//   "item2",
//   "item3",
//   "item4",
//   "item5",
//   "item6",
//   "item7",
//   "item8",
//   "item9",
//   "item10",
//   "item11",
//   "item12",
//   "item13",
//   "item14",
//   "item15",
//   "item16",
//   "item17",
//   "item18",
//   "item19",
//   "item20",
// ];

// const SEGMENT_COUNT = 8;
// const ITEMS_PER_UPDATE = 2;

// const segmentAngles = Array.from(
//   { length: SEGMENT_COUNT },
//   (_, i) => -90 + i * 45
// );

// const normalizeAngle = (angle: number): number => {
//   let a = angle % 360;
//   if (a < 0) a += 360;
//   return a;
// };

// const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
//   const rad = (angle * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// };

// const updateBoundaries = [180, 270];

// const SemiCircleRotating: React.FC = () => {
//   const [rotation, setRotation] = useState(180);
//   const requestRef = useRef<number | null>(null);
//   const previousTimestamp = useRef<DOMHighResTimeStamp | null>(null);
//   const previousRotation = useRef(normalizeAngle(180));
//   const totalUpdates = useRef(0);

//   const animate = (timestamp: DOMHighResTimeStamp) => {
//     if (previousTimestamp.current !== null) {
//       const elapsed = timestamp - previousTimestamp.current;
//       const degreesPerMs = (360 / ROTATION_DURATION) * rotateSpeedFactor;

//       setRotation((prev) => {
//         const newRotationRaw = prev - degreesPerMs * elapsed;
//         const newRotation = normalizeAngle(newRotationRaw);

//         const crossedBoundary = (boundary: number): boolean => {
//           if (previousRotation.current > boundary && newRotation <= boundary)
//             return true;
//           if (boundary === 270 && newRotation > previousRotation.current)
//             return true;
//           return false;
//         };

//         if (
//           crossedBoundary(updateBoundaries[0]) ||
//           crossedBoundary(updateBoundaries[1])
//         ) {
//           totalUpdates.current += 1;
//         }

//         previousRotation.current = newRotation;
//         return newRotationRaw;
//       });
//     }

//     previousTimestamp.current = timestamp;
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: 800,
//         height: 400,
//         margin: "auto",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: 800,
//           height: 800,
//           position: "absolute",
//           top: 0,
//           left: 0,
//           transformOrigin: "50% 50%",
//           transform: `rotate(${rotation}deg)`,
//         }}
//       >
//         <Image src={img} alt="Rotating" width={800} height={800} priority />
//         {segmentAngles.map((angle, idx) => {
//           const itemIndex =
//             (totalUpdates.current * ITEMS_PER_UPDATE + idx) % items.length;
//           const item = items[itemIndex];
//           const { x, y } = polarToCartesian(400, 400, 320, angle);

//           return (
//             <div
//               key={idx}
//               style={{
//                 position: "absolute",
//                 left: x - 50,
//                 top: y - 10,
//                 width: 100,
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 color: "#333",
//                 textShadow: "1px 1px 3px white",
//                 userSelect: "none",
//                 pointerEvents: "none",
//                 fontSize: 18,
//                 whiteSpace: "nowrap",
//                 transform: `rotate(${-rotation}deg)`,
//                 transformOrigin: "50% 50%",
//               }}
//             >
//               {item}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SemiCircleRotating;
