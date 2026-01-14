import { getDestinationBySlug } from "@/services/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import LeadForm from "@/components/features/LeadForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        const destination = await getDestinationBySlug(slug);
        return {
            title: `${destination.name} Tourism | Best Time to Visit, History & Hotels | Divya Bihar`,
            description: destination.overview.substring(0, 160) + "...",
            alternates: {
                canonical: `https://divyabihar.com/destinations/${slug}`,
            },
            openGraph: {
                title: `${destination.name} - The Spiritual Heart of Bihar`,
                description: `Plan your trip to ${destination.name}. Discover temples, history, and best places to stay.`,
                images: destination.images || [],
                type: 'article',
            },
        };
    } catch (e) {
        return {
            title: 'Destination Not Found | Divya Bihar',
            description: 'The requested destination could not be found.',
        };
    }
}

export default async function DestinationDetails({ params }: PageProps) {
    const { slug } = await params;
    let destination;

    try {
        destination = await getDestinationBySlug(slug);
    } catch (e) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
                        <Link href="/">
                            <Button>Go Home</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: destination.name,
        description: destination.overview,
        image: destination.images,
        touristType: ['Spiritual', 'Historical', 'Cultural'],
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'Bihar',
            addressCountry: 'India'
        },
        geo: destination.latitude && destination.longitude ? {
            '@type': 'GeoCoordinates',
            latitude: destination.latitude,
            longitude: destination.longitude
        } : undefined
    };

    return (
        <div className="min-h-screen flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <main className="flex-grow">
                {/* Hero Banner */}
                <div className="relative h-[60vh] w-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${destination.images?.[0] || '/images/destinations/bodh-gaya.jpg'})` }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white bg-gradient-to-t from-black/80 to-transparent">
                        <div className="container mx-auto">
                            <Link href="/" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-4 transition-colors">
                                <ArrowLeft size={16} className="mr-1" /> Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
                            <div className="flex gap-6 text-sm md:text-base">
                                <span className="flex items-center gap-2"><MapPin size={18} className="text-saffron" /> Bihar, India</span>
                                <span className="flex items-center gap-2"><Calendar size={18} className="text-saffron" /> Best time: Oct - Mar</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-saffron pl-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {destination.overview}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-saffron pl-4">History & Significance</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {destination.history}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-saffron pl-4">Key Attractions</h2>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <p className="text-gray-500 italic">List of temples and monuments coming soon...</p>
                            </div>
                        </section>

                        <section>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-foreground border-l-4 border-saffron pl-4">Stay at {destination.name}</h2>
                                <Link href={`/hotels?destination=${destination.slug}`}>
                                    <Button variant="outline" size="sm">View All</Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Mock Hotel Cards for now - normally fetched via API based on destination */}
                                <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/images/hotels/hotel-1.jpg)' }}></div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-1">Luxury Stay</h3>
                                        <p className="text-saffron font-bold">₹4,500 <span className="text-gray-400 text-xs font-normal">/ night</span></p>
                                        <Button className="w-full mt-3 bg-saffron/10 text-saffron hover:bg-saffron hover:text-white">View Details</Button>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/images/hotels/hotel-4.jpg)' }}></div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-1">Comfort Inn</h3>
                                        <p className="text-saffron font-bold">₹2,200 <span className="text-gray-400 text-xs font-normal">/ night</span></p>
                                        <Button className="w-full mt-3 bg-saffron/10 text-saffron hover:bg-saffron hover:text-white">View Details</Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Plan Your Visit</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <MapPin size={16} className="text-saffron" /> How to Reach
                                    </h4>
                                    <p className="text-sm text-gray-600">{destination.how_to_reach || 'Contact us for travel details.'}</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <Calendar size={16} className="text-saffron" /> Best Time
                                    </h4>
                                    <p className="text-sm text-gray-600">{destination.best_time_to_visit || 'October to March is ideal.'}</p>
                                </div>

                            </div>

                            <div className="mt-8 border-t border-gray-100 pt-6">
                                <LeadForm destinationName={destination.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
