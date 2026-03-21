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
        permanent: true,
      },
      {
        source: "/odoo-customisation",
        destination: "/services/odoo-customisation",
        permanent: true,
      },

      // /privacy → /privacy-policy
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      // /services → /services/odoo-customisation (or your main service)
      {
        source: "/services",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      // /solutions/custom-software-development → /services/custom-software-development
      {
        source: "/solutions/custom-software-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },

      {
        source: "/solutions/housing-society-management",
        destination: "/solutions/housing-society",
        permanent: true, // 301
      },
    ];
  },
};

export default withMDX(nextConfig);
