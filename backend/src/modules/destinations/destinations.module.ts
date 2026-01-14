import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';
import { SpiritualPlace } from './entities/spiritual-place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Destination, SpiritualPlace])],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class DestinationsModule {}
