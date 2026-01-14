import { Repository } from 'typeorm';
import { Lead } from './entities/lead.entity';
export declare class BookingsService {
    private leadsRepository;
    constructor(leadsRepository: Repository<Lead>);
    createLead(leadData: Partial<Lead>): Promise<Lead>;
    findAllLeads(): Promise<Lead[]>;
    updateLeadStatus(id: number, status: string): Promise<Lead | null>;
}
