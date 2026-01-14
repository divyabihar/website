import { Controller, Get, Param } from '@nestjs/common';
import { DestinationsService } from './destinations.service';

@Controller('destinations')
export class DestinationsController {
    constructor(private readonly destinationsService: DestinationsService) { }

    @Get()
    findAll() {
        return this.destinationsService.findAll();
    }

    @Get(':slug')
    findOne(@Param('slug') slug: string) {
        return this.destinationsService.findOne(slug);
    }
}
