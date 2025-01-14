/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
};

const config = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: "/offer-tuning",
        destination: "/oferta-tuning",
        permanent: true,
      },
      {
        source: "/offer-service",
        destination: "/oferta-serwis",
        permanent: true,
      },
      {
        source: "/offer-motorsport",
        destination: "/oferta-motorsport",
        permanent: true,
      },
    ];
  },
};

export default config;
