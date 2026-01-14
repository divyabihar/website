import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from 'next';
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Contact Us | Divya Bihar",
    description: "Get in touch with Divya Bihar team for travel queries, bookings, or feedback.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-gray-900 mb-6">
                            Get in <span className="text-saffron">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Planning a trip or have a question? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-saffron/10 p-3 rounded-full text-saffron-dark">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                    <p className="text-gray-600">Patna, Bihar, India - 800001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-saffron/10 p-3 rounded-full text-saffron-dark">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600">hello@divyabihar.com</p>
                                    <p className="text-gray-600">support@divyabihar.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-saffron/10 p-3 rounded-full text-saffron-dark">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9am - 6pm IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/20 outline-none" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/20 outline-none" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/20 outline-none" placeholder="How can we help?" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/20 outline-none" placeholder="Your message here..." />
                            </div>

                            <Button className="w-full bg-saffron text-white hover:bg-saffron-dark text-lg py-6">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
