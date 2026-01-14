import { Controller, Post, Body, Get, Patch, Param, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Lead } from './entities/lead.entity';
import { AuthGuard } from '../../common/guards/auth/auth.guard';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingsService: BookingsService) { }

    @Post('leads')
    createLead(@Body() leadData: Partial<Lead>) {
        return this.bookingsService.createLead(leadData);
    }

    @UseGuards(AuthGuard)
    @Get('leads')
    findAllLeads() {
        return this.bookingsService.findAllLeads();
    }

    @UseGuards(AuthGuard)
    @Patch('leads/:id')
    updateLeadStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.bookingsService.updateLeadStatus(+id, status);
    }
}
