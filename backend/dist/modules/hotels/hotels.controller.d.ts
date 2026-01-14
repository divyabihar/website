import { HotelsService } from './hotels.service';
import { Hotel } from './entities/hotel.entity';
export declare class HotelsController {
    private readonly hotelsService;
    constructor(hotelsService: HotelsService);
    findAll(destinationId?: string): Promise<Hotel[]>;
    findFeatured(): Promise<Hotel[]>;
    create(hotelData: Partial<Hotel>): Promise<Hotel>;
    update(id: string, hotelData: Partial<Hotel>): Promise<Hotel | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
