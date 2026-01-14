import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Divya Bihar",
    description: "Learn how we collect, use, and protect your personal information at Divya Bihar.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold font-serif mb-8 text-gray-900 border-b pb-4">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-sm text-gray-500 italic">Last Updated: January 14, 2026</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">1. Introduction</h2>
                        <p>Welcome to Divya Bihar (divyabihar.com). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">2. Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number that you voluntarily give to us when you fill out lead forms or contact us.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">3. Use of Your Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Process your travel requests and bookings.</li>
                            <li>Send you newsletters, marketing communications, and other information regarding our services.</li>
                            <li>Improve our website and user experience.</li>
                            <li>Respond to customer service requests and support needs.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">4. Advertising and Analytics</h2>
                        <p>We use Google AdSense to serve ads on the Site. Google may use cookies to serve ads based on your prior visits to our website or other websites. We also use Google Analytics to track and analyze traffic on the Site.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">5. Contact Us</h2>
                        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <p className="font-medium">Email: privacy@divyabihar.com</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
