import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'krlebrretmcdrnpvumtf.supabase.co',
      },
    ],
  },
};

export default nextConfig;
