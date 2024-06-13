export default async function sitemap() {
  return [
    {
      url: process.env.BASEURL + "/blog",
    },
    {
      url: process.env.BASEURL + "/contact",
    },
    {
      url: process.env.BASEURL + "/why-us",
    },
    {
      url: process.env.BASEURL + "/about-care-plus",
    },
    {
      url: process.env.BASEURL,
    },
  ];
}
