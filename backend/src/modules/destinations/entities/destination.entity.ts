import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { SpiritualPlace } from './spiritual-place.entity';
import { Hotel } from '../../hotels/entities/hotel.entity';

@Entity('destinations')
export class Destination {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    slug: string;

    @Column()
    name: string;

    @Column('text')
    overview: string;

    @Column('text')
    history: string;

    @Column({ nullable: true })
    how_to_reach: string; // JSON or text description

    @Column({ nullable: true })
    best_time_to_visit: string;

    @Column({ nullable: true })
    latitude: string;

    @Column({ nullable: true })
    longitude: string;

    @Column('simple-array', { nullable: true })
    images: string[];

    @OneToMany(() => SpiritualPlace, (place) => place.destination)
    places: SpiritualPlace[];

    @OneToMany(() => Hotel, (hotel) => hotel.destination)
    hotels: Hotel[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
