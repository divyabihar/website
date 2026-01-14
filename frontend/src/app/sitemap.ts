import { getDestinations } from "@/services/api";

const URL = "https://divyabihar.com";

export default async function sitemap() {
    const destinations = await getDestinations().catch(() => []);

    const destinationUrls = destinations.map((dest) => ({
        url: `${URL}/destinations/${dest.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [
        {
            url: URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${URL}/hotels`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        ...destinationUrls,
    ];
}
