/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig = {
  output: "export",
  basePath: isPages ? "/aiso-development-innovation" : "",
  assetPrefix: isPages ? "/aiso-development-innovation/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};
export default nextConfig;
