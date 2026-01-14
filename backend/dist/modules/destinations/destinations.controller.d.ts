import { DestinationsService } from './destinations.service';
export declare class DestinationsController {
    private readonly destinationsService;
    constructor(destinationsService: DestinationsService);
    findAll(): Promise<import("./entities/destination.entity").Destination[]>;
    findOne(slug: string): Promise<import("./entities/destination.entity").Destination | null>;
}
