/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.it'],
      },
    eslint: {
    // Ignore linting errors during production build
    ignoreDuringBuilds: true,
  },
     
};

export default nextConfig;
