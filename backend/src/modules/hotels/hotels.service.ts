import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private hotelsRepository: Repository<Hotel>,
  ) {}

  async findAll(destinationId?: number) {
    if (destinationId) {
      return this.hotelsRepository.find({
        where: { destination_id: destinationId },
      });
    }
    return this.hotelsRepository.find();
  }

  async findFeatured() {
    return this.hotelsRepository.find({
      where: { is_featured: true },
      take: 6,
    });
  }

  async create(hotelData: Partial<Hotel>) {
    const hotel = this.hotelsRepository.create(hotelData);
    return this.hotelsRepository.save(hotel);
  }

  async update(id: number, hotelData: Partial<Hotel>) {
    await this.hotelsRepository.update(id, hotelData);
    return this.hotelsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return this.hotelsRepository.delete(id);
  }
}
