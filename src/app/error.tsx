"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdHome, IoMdRefresh } from "react-icons/io";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center px-6 max-w-md"
      >
        {/* Icon */}
        <div className="p-4 rounded-full bg-red-500/20 border border-red-400/30 mb-6">
          <FaTriangleExclamation className="text-red-400 w-10 h-10" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
        <p className="text-gray-400 mb-6">
          We encountered an unexpected error. Please try again.
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition cursor-pointer"
          >
            <IoMdRefresh className="w-4 h-4" />
            Try Again
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-700 transition"
          >
            <IoMdHome className="w-4 h-4" />
            Go Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
