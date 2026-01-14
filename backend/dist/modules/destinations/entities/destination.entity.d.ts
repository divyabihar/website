import { SpiritualPlace } from './spiritual-place.entity';
import { Hotel } from '../../hotels/entities/hotel.entity';
export declare class Destination {
    id: number;
    slug: string;
    name: string;
    overview: string;
    history: string;
    how_to_reach: string;
    best_time_to_visit: string;
    latitude: string;
    longitude: string;
    images: string[];
    places: SpiritualPlace[];
    hotels: Hotel[];
    created_at: Date;
    updated_at: Date;
}
