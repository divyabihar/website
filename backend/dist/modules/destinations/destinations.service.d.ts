import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';
export declare class DestinationsService implements OnModuleInit {
    private destinationsRepository;
    constructor(destinationsRepository: Repository<Destination>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
    findAll(): Promise<Destination[]>;
    findOne(slug: string): Promise<Destination | null>;
}
