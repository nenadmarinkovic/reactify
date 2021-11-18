module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["www.datocms-assets.com", "i.scdn.co"],
  },
  async headers() {
    return [
      {
        source: "/data/strapi",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};
