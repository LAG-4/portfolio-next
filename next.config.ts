import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image config - using unoptimized for compatibility
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Generate static pages where possible (ISR without revalidate = static)
  // Pages with 'use client' are automatically static
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
