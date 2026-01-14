"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const blog_post_entity_1 = require("./entities/blog-post.entity");
const uuid_1 = require("uuid");
const blog_seed_1 = require("./blog.seed");
let BlogService = class BlogService {
    blogRepository;
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    async onModuleInit() {
        await this.seed();
    }
    async seed() {
        for (const post of blog_seed_1.blogSeedData) {
            const exists = await this.blogRepository.findOneBy({ slug: post.slug });
            if (!exists) {
                await this.blogRepository.save(post);
            }
            else {
                await this.blogRepository.update(exists.id, {
                    image_url: post.image_url,
                    meta_description: post.meta_description,
                });
            }
        }
    }
    async findAll(language = blog_post_entity_1.BlogLanguage.EN, limit = 10, page = 1) {
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
    async findBySlug(slug, language = blog_post_entity_1.BlogLanguage.EN) {
        const post = await this.blogRepository.findOne({
            where: { slug, language },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Blog post not found`);
        }
        const translations = await this.blogRepository.find({
            where: { group_id: post.group_id },
            select: ['language', 'slug'],
        });
        return {
            ...post,
            translations,
        };
    }
    async create(data) {
        if (!data.group_id) {
            data.group_id = (0, uuid_1.v4)();
        }
        if (!data.slug && data.title) {
            data.slug = data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
        }
        const post = this.blogRepository.create(data);
        return this.blogRepository.save(post);
    }
    async update(id, data) {
        await this.blogRepository.update(id, data);
        return this.blogRepository.findOneBy({ id });
    }
    async delete(id) {
        return this.blogRepository.delete(id);
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_post_entity_1.BlogPost)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
//# sourceMappingURL=blog.service.js.map