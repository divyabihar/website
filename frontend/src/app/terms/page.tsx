import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | Divya Bihar",
    description: "Read our terms and conditions for using Divya Bihar's services and website.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold font-serif mb-8 text-gray-900 border-b pb-4">Terms of Service</h1>

                <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-sm text-gray-500 italic">Last Updated: January 14, 2026</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">1. Acceptance of Terms</h2>
                        <p>By accessing or using divyabihar.com, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, you are prohibited from using this site.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Divya Bihar's website for personal, non-commercial transitory viewing only.</p>
                        <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on Divya Bihar's website;</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">3. Disclaimer</h2>
                        <p>The materials on Divya Bihar's website are provided on an 'as is' basis. Divya Bihar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">4. Limitations</h2>
                        <p>In no event shall Divya Bihar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Divya Bihar's website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold font-serif text-gray-900">5. Governing Law</h2>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Bihar.</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
