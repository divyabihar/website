"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import { toast } from "sonner";
import { Star, MapPin, Sparkles, ArrowDown, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax & Fade Effects
    const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth"
        });
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#2c0b0b]"
        >
            {/* 1. Immersive Spiritual Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 opacity-60 mix-blend-overlay"
                    style={{ backgroundImage: "url('/hero-spiritual-soul.png')" }}
                />
                {/* Spiritual Warm Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2c0b0b]/80 via-transparent to-[#2c0b0b]" />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* 2. Ethereal Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />

            {/* 3. Sacred Content Container */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center pt-20 pb-40 lg:py-0"
            >


                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-amber-100 via-white to-white mb-6 md:mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-tight font-serif"
                >
                    Discover the <br />
                    <span className="italic text-amber-400">Spiritual Heart</span> <br />
                    of India.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-base md:text-3xl text-amber-100/70 max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4"
                >
                    Journey to the <span className="text-amber-400 font-normal">Land of Enlightenment</span>. <br className="hidden md:block" />
                    Discover profound peace in Bodh Gaya, Rajgir & Nalanda.
                </motion.p>

                {/* Conversion Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12"
                >
                    <Button
                        size="lg"
                        className="h-14 md:h-16 px-10 md:px-12 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 text-base md:text-lg rounded-full shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] transition-all hover:scale-105"
                        onClick={() => {
                            const element = document.getElementById('plan-trip');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Plan Your Trip
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        className="h-14 md:h-16 px-8 md:px-10 text-white border border-white/20 hover:bg-white/10 rounded-full text-base md:text-lg transition-all"
                        onClick={() => {
                            const element = document.getElementById('destinations');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Explore Places
                    </Button>
                </motion.div>

                {/* Arrow Down Indicator */}
                <motion.button
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={scrollToContent}
                    className="absolute bottom-10 text-white/40 hover:text-amber-400 transition-colors hidden lg:block"
                >
                    <ArrowDown size={32} />
                </motion.button>
            </motion.div>

            {/* 4. Bottom Social Proof Bar (The "Footer" of Hero) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-0 w-full z-20"
            >
                <div className="bg-black/30 backdrop-blur-xl border-t border-white/10 py-8">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg md:rounded-xl flex items-center justify-center text-amber-500 shadow-inner">
                                <Sparkles size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-[8px] md:text-[10px] text-amber-500 font-bold uppercase tracking-widest leading-none mb-1">Authentic Experience</p>
                                <p className="text-white text-[12px] md:text-base font-medium">Bodh Gaya: Meditation</p>
                            </div>
                        </div>

                        <div className="hidden md:block h-10 w-px bg-white/10" />

                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2 md:-space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#2c0b0b] bg-neutral-800 overflow-hidden shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="traveler" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left ml-1 md:ml-2">
                                <div className="flex gap-0.5 mb-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={8} className="text-gold fill-gold" />)}
                                </div>
                                <p className="text-white/60 text-[10px] md:text-xs">
                                    <span className="text-white font-bold">1.2k+</span> seekers
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:block h-10 w-px bg-white/10" />

                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center text-amber-400">
                                <ShieldCheck size={18} />
                            </div>
                            <div className="text-left text-[10px] md:text-xs">
                                <p className="text-white font-medium">Verified Guides</p>
                                <p className="text-white/40">Secure Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Scrolling Mantra Sub-Footer */}
            <div className="absolute bottom-0 w-full bg-amber-500/10 py-1.5 whitespace-nowrap overflow-hidden">
                <div className="flex animate-scroll-text gap-20 opacity-30">
                    {[1, 2, 3, 4].map(i => (
                        <span key={i} className="text-[9px] text-white tracking-[1em] uppercase">
                            || Buddham Saranam Gacchami || Sangham Saranam Gacchami || Dharmam Saranam Gacchami ||
                        </span>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default HeroSection;
