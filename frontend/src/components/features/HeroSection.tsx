"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-amber-500 to-orange-400">
            {/* Background Pattern Layer (Optional subtle noise/texture) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 center w-full h-full bg-gradient-to-b from-black/0 via-transparent to-black/20 pointer-events-none" />

            {/* Central Illustration (Faded behind text) */}
            <div
                className="absolute w-full h-full max-w-4xl mx-auto opacity-20 md:opacity-30 bg-contain bg-center bg-no-repeat z-0 transform translate-y-12 animate-in fade-in zoom-in duration-2000"
                style={{ backgroundImage: "url('/hero-illustration.png')" }}
            />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full items-center">

                    {/* Left Column: Text & Trust */}
                    <div className="text-center lg:text-left animate-in slide-in-from-bottom-10 fade-in duration-1000 order-2 lg:order-1">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 animate-pulse">
                            <span className="flex text-yellow-400">
                                {"★★★★★"}
                            </span>
                            <span className="text-sm font-medium">Trusted by 10k+ Pilgrims</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            Discover the <br />
                            <span className="text-amber-100 italic font-serif">Spiritual Heart</span> of India
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
                            Plan your journey to <span className="font-semibold text-white">Bodh Gaya, Nalanda, Rajgir</span>, and beyond. Experience peace with Bihar's most trusted travel partner.
                        </p>

                        {/* CTA Buttons - Hidden on Mobile to prioritize Form access or adjusted */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-white text-saffron-dark hover:bg-gray-100 font-bold px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
                                Explore Destinations
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 rounded-full font-medium">
                                Watch Video
                            </Button>
                        </div>

                        {/* Quick Trust Stats */}
                        <div className="mt-12 flex gap-8 justify-center lg:justify-start text-white/80 border-t border-white/10 pt-6">
                            <div>
                                <p className="text-2xl font-bold text-white">50+</p>
                                <p className="text-xs uppercase tracking-wider">Sacred Sites</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">24/7</p>
                                <p className="text-xs uppercase tracking-wider">Support</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">₹0</p>
                                <p className="text-xs uppercase tracking-wider">Booking Fees</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Mini Lead Form (Glassmorphism) */}
                    <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:ml-auto animate-in slide-in-from-right-10 fade-in duration-1000 delay-200">
                        <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron to-gold"></div>
                            <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h3>
                            <p className="text-white/80 text-sm mb-6">Expert travel planning for your spiritual journey.</p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full h-12 px-4 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-amber-400 text-gray-900 placeholder:text-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number (+91)"
                                        className="w-full h-12 px-4 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-amber-400 text-gray-900 placeholder:text-gray-500"
                                    />
                                </div>
                                <div>
                                    <select className="w-full h-12 px-4 rounded-lg bg-white/90 border-0 focus:ring-2 focus:ring-amber-400 text-gray-900">
                                        <option value="">Select Destination</option>
                                        <option value="bodhgaya">Bodh Gaya</option>
                                        <option value="rajgir">Rajgir</option>
                                        <option value="nalanda">Nalanda</option>
                                        <option value="varanasi">Varanasi</option>
                                    </select>
                                </div>
                                <Button className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold h-12 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                    Request Call Back
                                </Button>
                                <p className="text-xs text-white/60 text-center">
                                    <span className="opacity-75">🔒 Your details are safe with us.</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
