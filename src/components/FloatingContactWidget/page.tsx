"use client";

import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

interface FloatingProps {
  whatsappNumber?: string;
  contactNumber?: string;
}

const FloatingContactWidget = ({ whatsappNumber, contactNumber }: FloatingProps) => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <Link
        href={`tel:${contactNumber || "+919627865333"}`}
        className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 flex items-center justify-center ring-2 ring-blue-400/30 after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-blue-400/50 after:animate-pulse"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={28} />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber?.replace(/\D/g, "") || "919627865333"}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 flex items-center justify-center ring-2 ring-green-400/30 after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-green-400/50 after:animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </Link>
    </div>
  );
};

export default FloatingContactWidget;
