import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogPost, BlogLanguage } from './entities/blog-post.entity';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('blog')
@UseInterceptors(CacheInterceptor)
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(
    @Query('lang') lang: string = 'en',
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
  ) {
    const language = lang === 'hi' ? BlogLanguage.HI : BlogLanguage.EN;
    return this.blogService.findAll(language, limit, page);
  }

  @Get(':slug')
  async findOne(
    @Param('slug') slug: string,
    @Query('lang') lang: string = 'en',
  ) {
    const language = lang === 'hi' ? BlogLanguage.HI : BlogLanguage.EN;
    return this.blogService.findBySlug(slug, language);
  }

  @Post()
  async create(@Body() createBlogDto: Partial<BlogPost>) {
    return this.blogService.create(createBlogDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBlogDto: Partial<BlogPost>,
  ) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogService.delete(+id);
  }
}
