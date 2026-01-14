import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export enum BlogLanguage {
    EN = 'en',
    HI = 'hi',
}

@Entity('blog_posts')
@Index(['slug', 'language'], { unique: true })
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: BlogLanguage,
        default: BlogLanguage.EN
    })
    language: BlogLanguage;

    @Column()
    @Index()
    group_id: string; // shared UUID for translations of the same post

    @Column()
    title: string;

    @Column()
    slug: string;

    @Column('text')
    content: string; // HTML or Markdown

    @Column({ nullable: true })
    image_url: string;

    @Column({ nullable: true })
    author: string;

    // SEO Meta
    @Column({ nullable: true })
    meta_title: string;

    @Column('text', { nullable: true })
    meta_description: string;

    @Column('simple-array', { nullable: true })
    keywords: string[];

    // Organization
    @Column({ nullable: true })
    category: string;

    @Column('simple-array', { nullable: true })
    tags: string[];

    @Column('jsonb', { nullable: true })
    faq_schema: any; // JSON-LD Schema for FAQs

    @Column({ type: 'timestamp', nullable: true })
    published_at: Date;

    @Column({ default: false })
    is_published: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
