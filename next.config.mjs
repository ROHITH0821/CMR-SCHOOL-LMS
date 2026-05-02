/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 92],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;
