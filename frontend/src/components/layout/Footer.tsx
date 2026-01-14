import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-foreground text-white pt-16 pb-8 border-t-8 border-saffron">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            Divya<span className="text-saffron">Bihar</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover the spiritual heart of India. We guide you through the sacred lands of Bodh Gaya, Rajgir, Nalanda, and beyond.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-saffron transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-saffron transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-saffron transition-colors"><Instagram size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-saffron">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                            <li><Link href="/hotels" className="hover:text-white transition-colors">Hotels</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Travel Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Top Destinations */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-saffron">Top Destinations</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/destinations/bodh-gaya" className="hover:text-white transition-colors">Bodh Gaya</Link></li>
                            <li><Link href="/destinations/rajgir" className="hover:text-white transition-colors">Rajgir</Link></li>
                            <li><Link href="/destinations/nalanda" className="hover:text-white transition-colors">Nalanda</Link></li>
                            <li><Link href="/destinations/vaishali" className="hover:text-white transition-colors">Vaishali</Link></li>
                            <li><Link href="/destinations/patna-sahib" className="hover:text-white transition-colors">Patna Sahib</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-saffron">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-saffron mt-1" />
                                <span>Patna, Bihar, India - 800001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-saffron" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-saffron" />
                                <span>hello@divyabihar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Divya Bihar. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
