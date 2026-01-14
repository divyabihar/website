import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('travel_agents')
export class TravelAgent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    agency_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({ default: false })
    is_verified: boolean;
}
