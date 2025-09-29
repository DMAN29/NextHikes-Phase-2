"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

// ✅ Animated Checkmark Icon Component
const AnimatedCheckmark = () => {
  const circleVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const checkVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <svg
      className="w-24 h-24 text-green-500 mx-auto"
      style={{ filter: "drop-shadow(0px 0px 8px rgba(74, 222, 128, 0.8))" }}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="26"
        cy="26"
        r="25"
        stroke="currentColor"
        strokeWidth="3"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M14 27l8 8 16-16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={checkVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
};

export default function Success({ onClose }: { onClose: () => void }) {
  const [runConfetti, setRunConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRunConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Typed Variants
  const contentContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6, // Delay after checkmark animation
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-slate-900/70 backdrop-blur-md z-50 p-4"
    >
      {/* 🎉 Confetti */}
      <Confetti
        numberOfPieces={runConfetti ? 200 : 0}
        gravity={0.1}
        recycle={false}
      />

      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
      >
        <AnimatedCheckmark />

        {/* ✅ Staggered content */}
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            variants={contentVariants}
            className="text-2xl font-bold text-slate-800 mt-6"
          >
            Success!
          </motion.h3>
          <motion.p variants={contentVariants} className="text-slate-500 mt-2">
            Thank you for reaching out! 🎉 Our team will get back to you as soon
            as possible.
          </motion.p>

          <motion.div variants={contentVariants}>
            <button
              onClick={onClose}
              className="mt-8 w-full px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold
                         hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2
                         transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Awesome!
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
