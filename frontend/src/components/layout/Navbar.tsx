"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Destinations", href: "/destinations" },
        { name: "Trip Planner", href: "/plan-trip" },
        { name: "Hotels", href: "/hotels" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                "fixed w-full z-50 transition-all duration-300 py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/20"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform">
                        DB
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 transition-colors">
                        Divya<span className="text-saffron">Bihar</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:text-saffron transition-colors text-gray-700"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant={isScrolled ? "default" : "secondary"} size="sm" className="rounded-full px-6">
                        Book a Tour
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                >
                    {isOpen ? <X className="text-gray-900" /> : <Menu className="text-gray-900" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-5">
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground font-medium hover:text-saffron transition-colors p-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full bg-saffron text-white">Book a Tour</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
