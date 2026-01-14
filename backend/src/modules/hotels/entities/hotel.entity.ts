import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Destination } from '../../destinations/entities/destination.entity';

@Entity('hotels')
export class Hotel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column({ type: 'float', default: 0 })
    rating: number;

    @Column({ nullable: true })
    price_range: string;

    @Column('simple-array', { nullable: true })
    amenities: string[];

    @Column({ nullable: true })
    contact_number: string;

    @Column({ nullable: true })
    whatsapp_number: string;

    @Column({ nullable: true })
    location_url: string; // Google Maps Link

    @Column({ default: false })
    is_featured: boolean;

    @Column({ nullable: true })
    commission_type: string; // 'PER_BOOKING', 'SUBSCRIPTION', 'LEAD_FEE'

    @Column('simple-array', { nullable: true })
    images: string[];

    @ManyToOne(() => Destination, (destination) => destination.hotels)
    @JoinColumn({ name: 'destination_id' })
    destination: Destination;

    @Column()
    destination_id: number;
}
