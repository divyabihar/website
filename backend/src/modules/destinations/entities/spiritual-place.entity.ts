import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Destination } from './destination.entity';

export enum PlaceType {
  TEMPLE = 'temple',
  MONASTERY = 'monastery',
  GURUDWARA = 'gurudwara',
  MOSQUE = 'mosque',
  CHURCH = 'church',
  HISTORICAL_SITE = 'historical_site',
  OTHER = 'other',
}

@Entity('spiritual_places')
export class SpiritualPlace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: PlaceType,
    default: PlaceType.TEMPLE,
  })
  type: PlaceType;

  @Column('text', { nullable: true })
  description: string;

  @Column('simple-array', { nullable: true })
  images: string[];

  @ManyToOne(() => Destination, (destination) => destination.places)
  @JoinColumn({ name: 'destination_id' })
  destination: Destination;

  @Column()
  destination_id: number;
}
