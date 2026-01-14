import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const URL = "https://divyabihar.com";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${URL}/sitemap.xml`,
    };
}
