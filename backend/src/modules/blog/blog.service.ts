import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost, BlogLanguage } from './entities/blog-post.entity';
import { v4 as uuidv4 } from 'uuid';
import { blogSeedData } from './blog.seed';

@Injectable()
export class BlogService implements OnModuleInit {
  constructor(
    @InjectRepository(BlogPost)
    private blogRepository: Repository<BlogPost>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    // Seeding blog posts
    for (const post of blogSeedData) {
      const exists = await this.blogRepository.findOneBy({ slug: post.slug });
      if (!exists) {
        await this.blogRepository.save(post);
      } else {
        // Update image URL if it changed
        await this.blogRepository.update(exists.id, {
          image_url: post.image_url,
          meta_description: post.meta_description,
        });
      }
    }
  }

  async findAll(
    language: BlogLanguage = BlogLanguage.EN,
    limit: number = 10,
    page: number = 1,
  ) {
    const [posts, total] = await this.blogRepository.findAndCount({
      where: {
        language,
        is_published: true,
      },
      order: { published_at: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      original: posts,
      total,
      page,
      last_page: Math.ceil(total / limit),
    };
  }

  async findBySlug(slug: string, language: BlogLanguage = BlogLanguage.EN) {
    const post = await this.blogRepository.findOne({
      where: { slug, language },
    });

    if (!post) {
      throw new NotFoundException(`Blog post not found`);
    }

    // Fetch translations links
    const translations = await this.blogRepository.find({
      where: { group_id: post.group_id },
      select: ['language', 'slug'],
    });

    return {
      ...post,
      translations,
    };
  }

  async create(data: Partial<BlogPost>) {
    if (!data.group_id) {
      data.group_id = uuidv4();
    }

    // Auto-generate slug if missing (basic implementation)
    if (!data.slug && data.title) {
      data.slug = data.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
    }

    const post = this.blogRepository.create(data);
    return this.blogRepository.save(post);
  }

  async update(id: number, data: Partial<BlogPost>) {
    await this.blogRepository.update(id, data);
    return this.blogRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.blogRepository.delete(id);
  }
}
