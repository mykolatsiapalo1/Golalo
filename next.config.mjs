/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "img-cdn.pixlr.com" }],
  },
};

export default nextConfig;
