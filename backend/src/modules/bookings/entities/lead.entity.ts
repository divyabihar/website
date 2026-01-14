import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('leads')
export class Lead {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    email: string;

    @Column()
    destination: string; // Destination Name

    @Column()
    service_type: string; // 'HOTEL', 'GUIDE', 'TAXI'

    @Column({ type: 'date', nullable: true })
    travel_date: string;

    @Column({ default: 'PENDING' })
    status: string; // PENDING, CONTACTED, CONVERTED

    @CreateDateColumn()
    created_at: Date;
}
