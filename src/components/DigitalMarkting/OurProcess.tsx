// import Image from "next/image";
// import { useEffect, useState } from "react";

// export function OurProcess() {
//   const img2 = "/image/digital2.png";
//   const img3 = "/image/digital3.png";
//   const img4 = "/image/digital4.png";

//   const processData = {
//     headline: "Data-Led. Client-Focused. Growth-Oriented.",
//     subheadline: "Our Results-Driven Process",
//     steps: [
//       {
//         number: 1,
//         title: "Discovery & Research",
//         description:
//           "We Start By Understanding Your Business, Target Audience, Competitive Landscape, And Specific Growth Objectives.",
//       },
//       {
//         number: 2,
//         title: "Strategy & Planning",
//         description:
//           "Developing A Customized Digital Marketing Roadmap With Clear KPIs, Channel Selection, And A Detailed Plan For Execution.",
//       },
//       {
//         number: 3,
//         title: "Implementation & Optimization",
//         description:
//           "Launching Campaigns, Creating Compelling Assets, Continuous A/B Testing, And Real-Time Adjustments To Maximize Performance.",
//       },
//       {
//         number: 4,
//         title: "Reporting & Analysis",
//         description:
//           "Providing Transparent, Easy-To-Understand Reports With Actionable Insights To Inform Future Strategies And Demonstrate ROI.",
//       },
//     ],
//   };

//   // Responsive breakpoint hook
//   function useBreakpoint() {
//     const [breakpoint, setBreakpoint] = useState("base");
//     useEffect(() => {
//       const check = () => {
//         if (window.innerWidth >= 1280) return setBreakpoint("xl");
//         if (window.innerWidth >= 1024) return setBreakpoint("lg");
//         if (window.innerWidth >= 768) return setBreakpoint("md");
//         setBreakpoint("base");
//       };
//       check();
//       window.addEventListener("resize", check);
//       return () => window.removeEventListener("resize", check);
//     }, []);
//     return breakpoint;
//   }

//   const breakpoint = typeof window !== "undefined" ? useBreakpoint() : "xl";

//   const getTranslateX = (index: number) => {
//     if (breakpoint === "xl") return index === 0 || index === 3 ? -200 : -100;
//     if (breakpoint === "lg") return index === 0 || index === 3 ? -80 : 10;
//     if (breakpoint === "md") return index === 0 || index === 3 ? -50 : 30;
//     return 0; // base/mobile
//   };

//   return (
//     <>
//       {/* Mobile process, with circle + steps */}
//       <div
//         className="block md:hidden w-full py-5 px-4"
//         style={{
//           background:
//             "linear-gradient(180deg, #FFFFFF 0%, #EDEBFF 50%, #FFFFFF 99%)",
//         }}
//       >
//         {/* Circle headline with arc */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="relative w-[250px] h-[250px] flex items-center justify-center mb-3">
//             <Image
//               src={img3}
//               alt="Process Headline"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* Vertical steps list */}
//         <div className="w-full flex flex-col gap-4">
//           {processData.steps.map((step) => (
//             <div key={step.number} className="flex items-center">
//               {/* Purple ring image with number overlaid */}
//               <div className="relative w-10 h-10 flex-shrink-0 mr-4">
//                 <Image
//                   className="object-contain"
//                   src={img4}
//                   alt="Step Number Ring"
//                   width={40}
//                   height={40}
//                 />
//                 <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold select-none">
//                   {step.number}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="font-medium">{step.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop process, split layout */}
//       <div className="hidden md:flex w-full items-stretch my-10 mb-20 md:h-[550px] lg:h-[600px] mx-auto">
//         {/* Left side - Image container */}
//         <div className="relative w-1/2 aspect-[1.355] justify-center">
//           <Image
//             src={img2}
//             alt="Process Visual"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//         {/* Right side - fill full height */}
//         <div className="w-2/5 h-full ">
//           <div className="flex flex-col justify-between h-full py-5">
//             {processData.steps.map((step, index) => (
//               <div
//                 key={step.number}
//                 style={{ transform: `translateX(${getTranslateX(index)}px)` }}
//               >
//                 <div>
//                   <h3 className="font-semibold lg:text-lg">{step.title}</h3>
//                   <p className="text-gray-600 text-sm lg:text-base">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
