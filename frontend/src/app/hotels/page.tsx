"use client";

import { useEffect, useState, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Mock Data for now (since backend might be down)
// In production, this would be fetched from API
const MOCK_HOTELS = [
    {
        id: 1,
        name: "Hotel Bodh Gaya Regency",
        destination: "Bodh Gaya",
        rating: 4.5,
        price: "₹3,500 - ₹5,000",
        address: "Near Mahabodhi Temple, Bodh Gaya",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
        is_featured: true
    },
    {
        id: 2,
        name: "Marasa Sarovar Premiere",
        destination: "Bodh Gaya",
        rating: 4.8,
        price: "₹6,000 - ₹8,500",
        address: "Bodh Gaya, Bihar",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025",
        is_featured: true
    },
    {
        id: 3,
        name: "Indo Hokke Hotel",
        destination: "Rajgir",
        rating: 4.2,
        price: "₹4,000 - ₹6,000",
        address: "Rajgir, Nalanda",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049",
        is_featured: false
    },
    {
        id: 4,
        name: "Hotel Nalanda Regency",
        destination: "Rajgir",
        rating: 4.0,
        price: "₹2,500 - ₹4,000",
        address: "Rajgir, Bihar",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
        is_featured: false
    }
];

function HotelsContent() {
    const searchParams = useSearchParams();
    const destinationFilter = searchParams.get('destination');
    const [hotels, setHotels] = useState(MOCK_HOTELS);

    useEffect(() => {
        if (destinationFilter) {
            setHotels(MOCK_HOTELS.filter(h => h.destination.toLowerCase() === destinationFilter.toLowerCase()));
        } else {
            setHotels(MOCK_HOTELS);
        }
    }, [destinationFilter]);

    return (
        <div className="container mx-auto px-4 py-12 flex-grow">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Button variant={!destinationFilter ? "default" : "outline"} asChild>
                    <Link href="/hotels">All</Link>
                </Button>
                <Button variant={destinationFilter === 'bodh-gaya' ? "default" : "outline"} asChild>
                    <Link href="/hotels?destination=bodh-gaya">Bodh Gaya</Link>
                </Button>
                <Button variant={destinationFilter === 'rajgir' ? "default" : "outline"} asChild>
                    <Link href="/hotels?destination=rajgir">Rajgir</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow w-full">
                        <div className="h-48 bg-gray-200 relative">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                            {hotel.is_featured && (
                                <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                    FEATURED
                                </span>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-xs text-saffron uppercase font-bold tracking-wider">{hotel.destination}</span>
                                    <h3 className="font-bold text-xl text-foreground">{hotel.name}</h3>
                                </div>
                                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                                    {hotel.rating} ★
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                                <MapPin size={14} /> {hotel.address}
                            </p>

                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-xs">Starting from</p>
                                    <p className="font-bold text-lg text-foreground">{hotel.price}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" className="h-9 w-9 p-0 rounded-full border-green-500 text-green-600 hover:bg-green-50">
                                        <MessageCircle size={18} />
                                    </Button>
                                    <Button size="sm" className="bg-saffron hover:bg-saffron/90">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {hotels.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No hotels found for this filter.
                </div>
            )}
        </div>
    );
}

export default function HotelsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="bg-saffron/10 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-foreground">Find the Best Stays in Bihar</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Curated collection of spiritual retreats, luxury hotels, and comfortable guest houses.
                    </p>
                </div>
            </div>

            <Suspense fallback={<div className="container mx-auto p-12 text-center">Loading hotels...</div>}>
                <HotelsContent />
            </Suspense>

            <Footer />
        </div>
    );
}
