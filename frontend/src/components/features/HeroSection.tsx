"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    typeof="video/mp4"
                    className="w-full h-full object-cover"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000">
                    <span className="inline-block py-1 px-3 rounded-full bg-saffron/20 text-saffron-light border border-saffron/30 text-sm font-medium mb-6 backdrop-blur-md">
                        Welcome to the Land of Enlightenment
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        The Spiritual Heart of <br className="md:hidden" /><span className="text-saffron-light/90">India</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Explore the timeless heritage of Bodh Gaya, Rajgir, Nalanda, and beyond. Plan your pilgrimage with Bihar's most trusted travel partner.
                    </p>

                    {/* Search Box */}
                    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 flex flex-col md:flex-row gap-2">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                            <input
                                type="text"
                                placeholder="Where do you want to find peace today?"
                                className="w-full h-12 pl-12 pr-4 bg-transparent text-white placeholder:text-gray-300 border-none outline-none rounded-full focus:ring-2 focus:ring-saffron/50"
                            />
                        </div>
                        <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-saffron/50 transition-shadow">
                            Plan My Trip
                        </Button>
                    </div>

                    {/* Quick Stats/Trust Items */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gold">50+</span>
                            <span className="text-xs uppercase tracking-wider">Spiritual Sites</span>
                        </div>
                        <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gold">10k+</span>
                            <span className="text-xs uppercase tracking-wider">Happy Pilgrims</span>
                        </div>
                        <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gold">24/7</span>
                            <span className="text-xs uppercase tracking-wider">Travel Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
