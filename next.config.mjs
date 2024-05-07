/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "/lists",
      permanent: true,
    },
  ],
};

export default nextConfig;
