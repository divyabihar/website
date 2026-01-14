import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Disclaimer | Divya Bihar",
    description: "Disclaimer and legal notice for Divya Bihar website.",
};

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold font-serif mb-8 text-gray-900 border-b pb-4">Disclaimer</h1>

                <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-sm text-gray-500 italic">Last Updated: January 14, 2026</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">1. Information Accuracy</h2>
                        <p>The information provided by Divya Bihar (divyabihar.com) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">2. External Links Disclaimer</h2>
                        <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not researched, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">3. Professional Disclaimer</h2>
                        <p>The Site cannot and does not contain travel or legal advice. The travel information is provided for general informational and educational purposes only and is not a substitute for professional advice. Before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">4. Affiliate Disclaimer</h2>
                        <p>This Site may contain links to affiliate websites, and we may receive an affiliate commission for any purchases/bookings made by you on the affiliate website using such links.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">5. Errors and Omissions</h2>
                        <p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Divya Bihar is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
