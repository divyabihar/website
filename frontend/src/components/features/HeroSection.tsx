"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { toast } from "sonner";

const HeroSection = () => {
    return (
        <div className="relative h-[90vh] w-full bg-[#2c0b0b] overflow-hidden flex flex-col items-center justify-center">

            {/* 1. Background Effects */}
            {/* Golden Central Glow (The Halo) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[100px] animate-pulse" />

            {/* Spiraling Mandala Effect (CSS Radial Pattern) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-color-dodge"></div>

            {/* 2. Main Content Z-Index 10 */}
            <div className="relative z-10 container mx-auto px-4 text-center h-full flex flex-col items-center justify-center pt-12">

                {/* Sanskrit/Spiritual Mantra (Optional Subtle Top) */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-amber-500/80 tracking-[0.3em] text-sm md:text-base font-medium mb-6 uppercase"
                >
                    || Atma Deepo Bhava ||
                </motion.p>

                {/* Main Headline - Hindi Typing Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-amber-100 to-white mb-6 drop-shadow-2xl leading-tight font-serif min-h-[1.2em]"
                >
                    <Typewriter
                        options={{
                            strings: ['दिव्य बिहार'],
                            autoStart: true,
                            loop: true,
                            delay: 150,
                            deleteSpeed: 100,
                            cursor: '|'
                        }}
                    />
                </motion.div>

                {/* Subheadline - Clean & Precise */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-2xl text-amber-100/80 max-w-2xl mx-auto mb-10 font-light"
                >
                    Journey to the <span className="text-amber-400 font-normal">Land of Enlightenment</span>. <br className="hidden md:block" />
                    Discover peace in Bodh Gaya, Rajgir & Nalanda.
                </motion.p>

                {/* Single Premium CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 text-lg px-10 py-6 rounded-full shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_50px_-5px_rgba(245,158,11,0.7)]"
                        onClick={() => toast.success("Welcome! Our team will contact you soon.")}
                    >
                        Begin Your Pilgrimage
                    </Button>
                </motion.div>
            </div>

        </div>
    );
};

export default HeroSection;
