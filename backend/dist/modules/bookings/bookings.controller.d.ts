import { BookingsService } from './bookings.service';
import { Lead } from './entities/lead.entity';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    createLead(leadData: Partial<Lead>): Promise<Lead>;
    findAllLeads(): Promise<Lead[]>;
    updateLeadStatus(id: string, status: string): Promise<Lead | null>;
}
