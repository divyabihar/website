import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
export declare class HotelsService {
    private hotelsRepository;
    constructor(hotelsRepository: Repository<Hotel>);
    findAll(destinationId?: number): Promise<Hotel[]>;
    findFeatured(): Promise<Hotel[]>;
    create(hotelData: Partial<Hotel>): Promise<Hotel>;
    update(id: number, hotelData: Partial<Hotel>): Promise<Hotel | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
