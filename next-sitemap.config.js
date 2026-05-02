/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://cmr-malakpet.example.com",
  generateRobotsTxt: true,
  exclude: ["/portal/dashboard"],
};
