export declare enum BlogLanguage {
    EN = "en",
    HI = "hi"
}
export declare class BlogPost {
    id: number;
    language: BlogLanguage;
    group_id: string;
    title: string;
    slug: string;
    content: string;
    image_url: string;
    author: string;
    meta_title: string;
    meta_description: string;
    keywords: string[];
    category: string;
    tags: string[];
    faq_schema: any;
    published_at: Date;
    is_published: boolean;
    created_at: Date;
    updated_at: Date;
}
