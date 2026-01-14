import { Controller, Get, Post, Body, Query, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { Hotel } from './entities/hotel.entity';
import { AuthGuard } from '../../common/guards/auth/auth.guard';

@Controller('hotels')
export class HotelsController {
    constructor(private readonly hotelsService: HotelsService) { }

    @Get()
    findAll(@Query('destination_id') destinationId?: string) {
        return this.hotelsService.findAll(destinationId ? parseInt(destinationId) : undefined);
    }

    @Get('featured')
    findFeatured() {
        return this.hotelsService.findFeatured();
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() hotelData: Partial<Hotel>) {
        return this.hotelsService.create(hotelData);
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() hotelData: Partial<Hotel>) {
        return this.hotelsService.update(+id, hotelData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.hotelsService.remove(+id);
    }
}
