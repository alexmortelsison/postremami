import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**", // Correct wildcard usage
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Allowing Google profile images
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
