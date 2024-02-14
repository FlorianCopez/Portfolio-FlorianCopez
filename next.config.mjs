/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr", // default lang fr
  },
  rewrites: async () => {
    return [
      {
        source: "/a-propos",
        destination: "/about",
      },
      {
        source: "/projets",
        destination: "/projects",
      },
      {
        source: "/projets/:slug*",
        destination: "/projects/:slug*",
      },
    ];
  },
};

export default nextConfig;
