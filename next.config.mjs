/** @type {import('next').NextConfig} */
const nextConfig = {
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
