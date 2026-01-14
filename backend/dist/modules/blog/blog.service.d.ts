import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BlogPost, BlogLanguage } from './entities/blog-post.entity';
export declare class BlogService implements OnModuleInit {
    private blogRepository;
    constructor(blogRepository: Repository<BlogPost>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
    findAll(language?: BlogLanguage, limit?: number, page?: number): Promise<{
        original: BlogPost[];
        total: number;
        page: number;
        last_page: number;
    }>;
    findBySlug(slug: string, language?: BlogLanguage): Promise<{
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
    create(data: Partial<BlogPost>): Promise<BlogPost>;
    update(id: number, data: Partial<BlogPost>): Promise<BlogPost | null>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
