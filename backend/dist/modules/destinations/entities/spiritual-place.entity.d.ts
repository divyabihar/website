import { Destination } from './destination.entity';
export declare enum PlaceType {
    TEMPLE = "temple",
    MONASTERY = "monastery",
    GURUDWARA = "gurudwara",
    MOSQUE = "mosque",
    CHURCH = "church",
    HISTORICAL_SITE = "historical_site",
    OTHER = "other"
}
export declare class SpiritualPlace {
    id: number;
    name: string;
    type: PlaceType;
    description: string;
    images: string[];
    destination: Destination;
    destination_id: number;
}
