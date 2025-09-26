import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.nexthikes.in",
      "res.cloudinary.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "cdn.sanity.io",
      "media.istockphoto.com",
      "www.nexthikes.in",
      "35.208.89.220",
      "example.com",
      "cdn.example.com",
      "img.freepik.com", // ✅ Add Freepik here
    ],
  },
};

export default nextConfig;
