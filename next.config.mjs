/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',    
  images: {
    unoptimized: true,   
  },
  basePath: '/eportfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;