"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";

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
  email: MdEmail,
  pin: IoMdPin,
  phone:FaPhoneAlt
};

export default function Icon({ name, size = 24, color = "currentColor", className = "" }: IconProps) {
  const IconComponent = iconMap[name.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
}
