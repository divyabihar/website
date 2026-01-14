import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';
// Import JSON data
const seedData = require('./destinations.seed');

@Injectable()
export class DestinationsService implements OnModuleInit {
    constructor(
        @InjectRepository(Destination)
        private destinationsRepository: Repository<Destination>,
    ) { }

    async onModuleInit() {
        await this.seed();
    }

    async seed() {
        const count = await this.destinationsRepository.count();
        if (count === 0) {
            // Seeding logic
            const data = Array.isArray(seedData) ? seedData : (seedData.default || []);
            for (const item of data) {
                const exists = await this.destinationsRepository.findOneBy({ slug: item.slug });
                if (!exists) {
                    await this.destinationsRepository.save(item);
                }
            }
        }
    }

    async findAll() {
        return this.destinationsRepository.find({
            order: { name: 'ASC' }
        });
    }

    async findOne(slug: string) {
        return this.destinationsRepository.findOne({
            where: { slug },
            relations: ['places', 'hotels']
        });
    }
}
