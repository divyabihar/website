import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center pt-20">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-9xl font-bold text-saffron opacity-20 block">404</span>
                    <h1 className="text-4xl font-bold font-serif text-gray-900 -mt-20 mb-6">Article or Page Not Found</h1>
                    <p className="text-xl text-gray-600 max-w-lg mx-auto mb-10">
                        The spiritual path you're looking for seems to have moved or never existed. Let's get you back on track to enlightenment.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/">
                            <Button size="lg" className="bg-saffron hover:bg-saffron-dark text-white px-10 rounded-full">
                                Go Home
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button size="lg" variant="outline" className="px-10 rounded-full">
                                Read Blog
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
