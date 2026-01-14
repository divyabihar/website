import { Destination } from '../../destinations/entities/destination.entity';
export declare class Hotel {
    id: number;
    name: string;
    address: string;
    rating: number;
    price_range: string;
    amenities: string[];
    contact_number: string;
    whatsapp_number: string;
    location_url: string;
    is_featured: boolean;
    commission_type: string;
    images: string[];
    destination: Destination;
    destination_id: number;
}
