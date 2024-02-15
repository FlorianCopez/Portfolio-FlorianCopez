/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Rewrite configuration used only in development.
   * local development and will not be applied in production.
   */
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/a-propos",
  //       destination: "/about",
  //     },
  //     {
  //       source: "/projets",
  //       destination: "/projects",
  //     },
  //     {
  //       source: "/projets/:slug*",
  //       destination: "/projects/:slug*",
  //     },
  //   ];
  // },
};

export default nextConfig;
