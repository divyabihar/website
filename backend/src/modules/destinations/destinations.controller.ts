import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('destinations')
@UseInterceptors(CacheInterceptor)
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  findAll() {
    return this.destinationsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.destinationsService.findOne(slug);
  }
}
