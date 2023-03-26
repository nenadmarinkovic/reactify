/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: [
      "www.datocms-assets.com",
      "i.scdn.co",
      "cdn.sanity.io",
      "images.ctfassets.net",
    ],
  },

  experimental: {
    legacyBrowsers: false,
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
