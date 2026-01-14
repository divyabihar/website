import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';
// Import JSON data
import { destinationsSeedData as seedData } from './destinations.seed';

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
    const data = seedData;
    for (const item of data) {
      const exists = await this.destinationsRepository.findOneBy({
        slug: item.slug,
      });
      if (!exists) {
        await this.destinationsRepository.save(item);
      } else {
        // Update images if they changed
        await this.destinationsRepository.update(exists.id, {
          images: item.images,
          overview: item.overview, // update overview too in case text changed
        });
      }
    }
  }

  async findAll() {
    return this.destinationsRepository.find({
      order: { name: 'ASC' },
    });
  }

  async findOne(slug: string) {
    return this.destinationsRepository.findOne({
      where: { slug },
      relations: ['places', 'hotels'],
    });
  }
}
