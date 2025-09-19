"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const iconMap: Record<string, IconType> = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  home: AiOutlineHome,
  email: HiOutlineMail,
  pin: FiMapPin,
  phone:FaPhoneAlt
};

export default function Icon({ name, size = 24, color = "currentColor", className = "" }: IconProps) {
  const IconComponent = iconMap[name.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
}
