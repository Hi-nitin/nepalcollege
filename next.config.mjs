/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.edusanjal.com",
          },
        ],
      }
};

export default nextConfig;
