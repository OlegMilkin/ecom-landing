import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'kinsta.com',
      'res.cloudinary.com',
      'assets.intersystems.com',
      'media.licdn.com',
      'codewithmosh.com',
      'bs-uploads.toptal.io'
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
