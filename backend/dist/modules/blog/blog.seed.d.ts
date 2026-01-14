import { BlogLanguage } from './entities/blog-post.entity';
export declare const blogSeedData: ({
    language: BlogLanguage;
    group_id: string;
    title: string;
    slug: string;
    image_url: string;
    content: string;
    author: string;
    meta_title: string;
    meta_description: string;
    keywords: string[];
    category: string;
    tags: string[];
    faq_schema: {
        "@context": string;
        "@type": string;
        mainEntity: {
            "@type": string;
            name: string;
            acceptedAnswer: {
                "@type": string;
                text: string;
            };
        }[];
    };
    published_at: Date;
    is_published: boolean;
} | {
    language: BlogLanguage;
    group_id: string;
    title: string;
    slug: string;
    image_url: string;
    content: string;
    author: string;
    meta_title: string;
    meta_description: string;
    keywords: string[];
    category: string;
    tags: string[];
    published_at: Date;
    is_published: boolean;
    faq_schema?: undefined;
})[];
