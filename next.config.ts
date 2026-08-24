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

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/cli',
          has: [{ type: 'query', key: 'cli', value: '1' }],
        },
        {
          source: '/',
          destination: '/cli',
          has: [{ type: 'header', key: 'user-agent', value: '.*curl/.*' }],
        },
        {
          source: '/',
          destination: '/cli',
          has: [{ type: 'header', key: 'accept', value: '.*text/plain.*' }],
        },
      ],
    };
  },
};

export default nextConfig;
