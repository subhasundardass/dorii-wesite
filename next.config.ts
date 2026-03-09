import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});
const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  async redirects() {
    return [
      {
        source: "/service/odoo-customisation",
        destination: "/services/odoo-customisation",
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default withMDX(nextConfig);
