import { BlogService } from './blog.service';
import { BlogPost, BlogLanguage } from './entities/blog-post.entity';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    findAll(lang?: string, limit?: number, page?: number): Promise<{
        original: BlogPost[];
        total: number;
        page: number;
        last_page: number;
    }>;
    findOne(slug: string, lang?: string): Promise<{
        translations: BlogPost[];
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
    }>;
    create(createBlogDto: Partial<BlogPost>): Promise<BlogPost>;
    update(id: string, updateBlogDto: Partial<BlogPost>): Promise<BlogPost | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
