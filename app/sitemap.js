
const SITE_URL = "https://jawad-portfolio-olive.vercel.app";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/about`,
    },
    {
      url: `${SITE_URL}/contact`,
    },
    {
      url: `${SITE_URL}/projects`,
    },
    {
      url: `${SITE_URL}/projects/security-guard-management`,
    },
    {
      url: `${SITE_URL}/projects/application-tracking-system`,
    },
    {
      url: `${SITE_URL}/projects/ai-customer-support`,
    },
    {
      url: `${SITE_URL}/projects/disaster-management-system`,
    },
    {
      url: `${SITE_URL}/projects/dineflow`,
    },
    {
      url: `${SITE_URL}/projects/mini-ecommerce`,
    },
  ];
}
