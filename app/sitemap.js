export default async function sitemap() {
    return [
        {
            url: process.env.BASE_URL + "contact",
        },
        {
            url: process.env.BASE_URL + "why-us",
        },
        {
            url: process.env.BASE_URL + "about-care-plus",
        },
        {
            url: process.env.BASE_URL
        }
    ];
}
