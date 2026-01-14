import { getDestinations, getBlogPosts } from "@/services/api";

const URL = "https://divyabihar.com";

export default async function sitemap() {
    const destinations = await getDestinations().catch(() => []);
    const { original: blogPostsEn } = await getBlogPosts('en', 1).catch(() => ({ original: [] }));
    const { original: blogPostsHi } = await getBlogPosts('hi', 1).catch(() => ({ original: [] }));

    const destinationUrls = destinations.map((dest) => ({
        url: `${URL}/destinations/${dest.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const blogUrlsEn = blogPostsEn.map((post) => ({
        url: `${URL}/blog/${post.slug}`,
        lastModified: new Date(post.published_at || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    const blogUrlsHi = blogPostsHi.map((post) => ({
        url: `${URL}/hi/blog/${post.slug}`,
        lastModified: new Date(post.published_at || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: URL,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: `${URL}/hotels`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.9,
        },
        {
            url: `${URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        {
            url: `${URL}/hi/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        ...destinationUrls,
        ...blogUrlsEn,
        ...blogUrlsHi,
    ];
}
