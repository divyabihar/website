import Link from "next/link";
import { getDestinations } from "@/services/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Destinations in Bihar | Bodh Gaya, Rajgir, Nalanda",
    description: "Explore the most sacred pilgrimage sites in Bihar. Visit Bodh Gaya, Rajgir, Nalanda, and more with Divya Bihar.",
};

export default async function DestinationsIndex() {
    // Fetch real data from backend
    const destinations = await getDestinations();

    return (
        <main className="min-h-screen bg-neutral-50">
            <Navbar />

            <div className="pt-32 pb-12 bg-white border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-serif text-gray-900 mb-4">Sacred Destinations</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover the land where spirituality meets history.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <Link href={`/destinations/${dest.slug}`} key={dest.id} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                                <div className="h-64 overflow-hidden bg-gray-200 relative">
                                    {dest.images && dest.images.length > 0 ? (
                                        <img
                                            src={dest.images[0]}
                                            alt={dest.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                            No Image
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold mb-2 font-serif text-gray-900 group-hover:text-saffron transition-colors">{dest.name}</h2>
                                    <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{dest.overview}</p>
                                    <span className="text-saffron font-bold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">
                                        Explore Details &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
