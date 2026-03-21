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
      // broken nested blog link
      {
        source:
          "/blog/business-problems-without-erp/erp-software-for-indian-businesses",
        destination: "/blog/erp-software-for-indian-businesses",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
