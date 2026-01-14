import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import DestinationCard from "@/components/features/DestinationCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, HeartHandshake } from "lucide-react";
import { getDestinations, Destination } from "@/services/api";
import LeadForm from "@/components/features/LeadForm";
import Image from "next/image";

export default async function Home() {
  let featuredDestinations: Destination[] = [];
  try {
    featuredDestinations = await getDestinations();
  } catch (e) {
    console.error("Failed to fetch destinations", e);
    // Fallback or empty state could be handled here
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* Introduction Section */}
        <section className="py-20 bg-saffron-light/20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Discover the <span className="text-saffron">Soul of Bihar</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bihar is not just a destination; it's an experience of serenity, history, and culture.
              From the enlightened grounds of Bodh Gaya to the ancient ruins of Nalanda,
              every step you take is a journey through time.
            </p>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3 text-saffron">
                  <Star size={32} fill="currentColor" className="text-gold" />
                </div>
                <h3 className="font-semibold">Heritage</h3>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3 text-saffron">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="font-semibold">Safety</h3>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3 text-saffron">
                  <HeartHandshake size={32} />
                </div>
                <h3 className="font-semibold">Hospitality</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-24 bg-background relative">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -z-10"></div>

          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-saffron font-semibold tracking-wider text-sm">EXPLORE</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Top Spiritual Destinations</h2>
              </div>
              <Button variant="outline" className="hidden md:flex gap-2">
                View All Places <ArrowRight size={16} />
              </Button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations && featuredDestinations.length > 0 ? (
                featuredDestinations.map((dest) => (
                  <DestinationCard
                    key={dest.slug}
                    name={dest.name}
                    description={dest.overview}
                    image={dest.images && dest.images.length > 0 ? dest.images[0] : 'https://images.unsplash.com/photo-1544258296-1c070f4438fa?q=80&w=2069'}
                    location="Bihar, India"
                    slug={dest.slug}
                  />
                ))
              ) : (
                <p className="text-center col-span-3 text-gray-500">Loading destinations...</p>
              )}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
              <Button variant="outline">View All Places</Button>
            </div>
          </div>
        </section>

        {/* Featured Hotels Preview */}
        <section className="py-20 bg-saffron-light/10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-saffron font-semibold tracking-wider text-sm">COMFORT & LUXURY</span>
                <h2 className="text-3xl md:text-3xl font-bold mt-2 text-foreground">Featured Stays</h2>
              </div>
              <Button variant="outline" asChild className="hidden md:flex gap-2">
                <a href="/hotels">View All Hotels <ArrowRight size={16} /></a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Static Preview of Hotels (Dynamic in real app) */}

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
                    alt="Hotel 1"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Hotel Bodh Gaya Regency</h3>
                  <p className="text-sm text-gray-500 mb-2">Bodh Gaya</p>
                  <p className="font-bold text-saffron">₹3,500 <span className="text-gray-400 text-xs font-normal">/ night</span></p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025"
                    alt="Hotel 2"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Marasa Sarovar Premiere</h3>
                  <p className="text-sm text-gray-500 mb-2">Bodh Gaya</p>
                  <p className="font-bold text-saffron">₹6,000 <span className="text-gray-400 text-xs font-normal">/ night</span></p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049"
                    alt="Hotel 3"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Indo Hokke Hotel</h3>
                  <p className="text-sm text-gray-500 mb-2">Rajgir</p>
                  <p className="font-bold text-saffron">₹4,000 <span className="text-gray-400 text-xs font-normal">/ night</span></p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center md:hidden">
              <Button variant="outline" asChild>
                <a href="/hotels">View All Hotels</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Plan My Trip Section */}
        <section className="py-24 bg-foreground text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="text-left">
              <span className="text-saffron font-bold tracking-wider text-sm">CUSTOM PACKAGES</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Plan Your Spiritual Journey</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Whether you need a full tour package, a guided tour of Nalanda, or just a taxi for your pilgrimage, we handle everything.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><span className="text-saffron">✓</span> Customized Itineraries</li>
                <li className="flex items-center gap-3"><span className="text-saffron">✓</span> Verified Hotels & Guides</li>
                <li className="flex items-center gap-3"><span className="text-saffron">✓</span> 24/7 Support during Trip</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-1 rounded-2xl border border-white/10">
              <LeadForm />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
