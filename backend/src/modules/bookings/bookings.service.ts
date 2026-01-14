import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './entities/lead.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Lead)
    private leadsRepository: Repository<Lead>,
  ) {}

  async createLead(leadData: Partial<Lead>) {
    const lead = this.leadsRepository.create(leadData);
    return this.leadsRepository.save(lead);
  }

  async findAllLeads() {
    return this.leadsRepository.find({ order: { created_at: 'DESC' } });
  }

  async updateLeadStatus(id: number, status: string) {
    await this.leadsRepository.update(id, { status });
    return this.leadsRepository.findOneBy({ id });
  }
}
