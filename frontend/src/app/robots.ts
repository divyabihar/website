import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const URL = "https://divyabihar.com";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${URL}/sitemap.xml`,
    };
}
