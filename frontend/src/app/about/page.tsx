import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | Divya Bihar - Your Spiritual Guide",
    description: "Learn about Divya Bihar, our mission to promote Bihar's spiritual heritage, and the team dedicated to your sacred journey.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-saffron/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                        About <span className="text-saffron">Divya Bihar</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Connecting seekers with the sacred. We are dedicated to showcasing the profound spiritual heritage of Bihar to the world.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1622699895697-39cb3232860a?q=80&w=1964"
                                alt="Spiritual Monk in Bihar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-serif text-gray-900">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Divya Bihar was born from a passion to reveal the often-overlooked spiritual treasures of Bihar. From the enlightenment of Buddha in Bodh Gaya to the Jain sanctuaries of Rajgir and the Sikh heritage at Patna Sahib, Bihar is a land of supreme sanctity.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our mission is to provide authentic, reliable, and comprehensive information for pilgrims and travelers. We simplify your journey so you can focus on your spiritual experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Values */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-4xl font-bold text-saffron mb-2">50+</div>
                        <div className="text-gray-400">Sacred Sites Covered</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-saffron mb-2">10k+</div>
                        <div className="text-gray-400">Monthly Readers</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-saffron mb-2">24/7</div>
                        <div className="text-gray-400">Travel Assistance</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
