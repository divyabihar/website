const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Destination {
    id: number;
    slug: string;
    name: string;
    overview: string;
    history: string;
    how_to_reach: string;
    best_time_to_visit: string;
    images: string[];
    latitude?: string;
    longitude?: string;
}

export interface Lead {
    name: string;
    phone: string;
    destination: string;
    service_type: string;
    travel_date?: string;
    email?: string;
}

const MOCK_DESTINATIONS: Destination[] = [
    {
        id: 1,
        slug: 'bodh-gaya',
        name: 'Bodh Gaya',
        overview: 'Bodh Gaya is the place where Gautama Buddha is said to have obtained Enlightenment. It is the most important of the main four pilgrimage sites related to the life of Gautama Buddha.',
        history: 'For Buddhists, Bodh Gaya is the most important of the main four pilgrimage sites related to the life of Gautama Buddha.',
        how_to_reach: 'Nearest airport is Gaya Airport (12km).',
        best_time_to_visit: 'October to March',
        images: ['https://images.unsplash.com/photo-1544258296-1c070f4438fa?q=80&w=2069'],
        latitude: '24.6961',
        longitude: '84.9870'
    },
    {
        id: 2,
        slug: 'rajgir',
        name: 'Rajgir',
        overview: 'Rajgir was the first capital of the kingdom of Magadha. It is a major Buddhist and Jain pilgrimage site.',
        history: 'It dates back to 1000 BC and is mentioned in ancient scriptures.',
        how_to_reach: 'Nearest airport is Patna (100km).',
        best_time_to_visit: 'October to March',
        images: ['https://images.unsplash.com/photo-1622699895697-39cb3232860a?q=80&w=1964'],
        latitude: '25.0194',
        longitude: '85.4184'
    },
    {
        id: 3,
        slug: 'nalanda',
        name: 'Nalanda',
        overview: 'Nalanda was a renowned mahavihara (Buddhist monastic university) in ancient Magadha.',
        history: 'Founded in the 5th century CE, it was a center of learning.',
        how_to_reach: '90km from Patna.',
        best_time_to_visit: 'October to March',
        images: ['https://images.unsplash.com/photo-1591528659550-6cb463c22421?q=80&w=2067'],
        latitude: '25.1288',
        longitude: '85.4475'
    }
];

export const getDestinations = async (): Promise<Destination[]> => {
    try {
        const res = await fetch(`${API_URL}/destinations`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch destinations');
        return res.json();
    } catch (error) {
        console.error("API Error: Using mock data for destinations.", error);
        return MOCK_DESTINATIONS;
    }
};

export const getDestinationBySlug = async (slug: string): Promise<Destination> => {
    try {
        const res = await fetch(`${API_URL}/destinations/${slug}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch destination');
        return res.json();
    } catch (error) {
        console.error(`API Error: Using mock data for destination ${slug}.`, error);
        const dest = MOCK_DESTINATIONS.find(d => d.slug === slug);
        if (!dest) throw new Error('Destination not found');
        return dest;
    }
};

export const submitLead = async (data: Lead) => {
    const res = await fetch(`${API_URL}/bookings/leads`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to submit lead');
    return res.json();
};

export const getLeads = async (): Promise<Lead[]> => {
    try {
        const res = await fetch(`${API_URL}/bookings/leads`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch leads');
        return res.json();
    } catch (e) {
        console.error("API Error: Failed to fetch leads.", e);
        throw e; // Fail loud in production-ready mode
        /* 
        console.warn("API Error: Using mock leads.", e);
        return [
            { name: "Test User 1", phone: "9999999999", destination: "Bodh Gaya", service_type: "TOUR_PACKAGE", travel_date: "2026-02-01" },
            { name: "Test User 2", phone: "8888888888", destination: "Rajgir", service_type: "TAXI", travel_date: "2026-02-05" }
        ];
        */
    }
};
