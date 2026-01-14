"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2, Plus } from "lucide-react";
import Link from "next/link";

// Mock Data for consistent Admin UI even if backend offline
const MOCK_HOTELS = [
    { id: 1, name: "Hotel Bodh Gaya Regency", destination: "Bodh Gaya", price: "₹3,500", is_featured: true },
    { id: 2, name: "Marasa Sarovar Premiere", destination: "Bodh Gaya", price: "₹6,000", is_featured: true },
    { id: 3, name: "Indo Hokke Hotel", destination: "Rajgir", price: "₹4,000", is_featured: false },
];

export default function AdminHotelsPage() {
    const [hotels, setHotels] = useState<any[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const secret = localStorage.getItem('admin_secret');
        if (secret === 'divyabihar-admin') {
            setIsAuthenticated(true);
            // In a real app, we would fetch from API: getHotels().then(setHotels);
            // For now, using mock to ensure UI works for demo
            setHotels(MOCK_HOTELS);
        } else {
            window.location.href = "/admin"; // Redirect to overview which handles auth logic implicitly or just use prompt
        }
    }, []);

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this hotel?")) {
            setHotels(hotels.filter(h => h.id !== id));
            // In API: deleteHotel(id);
        }
    };

    if (!isAuthenticated) return <div className="min-h-screen flex items-center justify-center">Verifying access...</div>;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin">
                            <Button variant="ghost" size="icon"><ArrowLeft size={18} /></Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Manage Hotels</h1>
                    </div>
                    <Button className="bg-saffron hover:bg-saffron/90"><Plus size={18} className="mr-2" /> Add Hotel</Button>
                </div>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {hotels.map((hotel, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium">{hotel.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{hotel.destination}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{hotel.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {hotel.is_featured ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Yes</span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">No</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                        <Button size="sm" variant="ghost" className="text-blue-600">Edit</Button>
                                        <Button size="sm" variant="ghost" className="text-red-600" onClick={() => handleDelete(hotel.id)}>
                                            <Trash2 size={16} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {hotels.length === 0 && <p className="p-8 text-center text-gray-500">No hotels found.</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
