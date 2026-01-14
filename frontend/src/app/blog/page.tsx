import { getBlogPosts } from "@/services/api";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = {
    title: "Spiritual Travel Blog | Divya Bihar",
    description: "Explore guides, tips, and stories about Bihar's spiritual destinations like Bodh Gaya, Rajgir, and Nalanda.",
    alternates: {
        canonical: "https://divyabihar.com/blog",
        languages: {
            "hi": "https://divyabihar.com/hi/blog",
        },
    },
};

export default async function BlogIndex() {
    const { original: posts } = await getBlogPosts('en');

    return (
        <main className="min-h-screen bg-neutral-50">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold font-serif text-gray-900">Travel Journal</h1>
                        <Link href="/hi/blog" className="text-sm font-medium px-4 py-2 border rounded-full hover:bg-gray-50 flex items-center gap-2">
                            <span>🇮🇳</span> हिंदी में पढ़ें
                        </Link>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Deep dive into the history, spirituality, and culture of Bihar's most sacred sites.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                                    <div className="h-52 bg-gray-200 overflow-hidden relative">
                                        {post.image_url ? (
                                            <Image
                                                src={post.image_url}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-saffron/10 text-saffron">
                                                <span className="text-4xl">🕉️</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-saffron-dark uppercase tracking-wider">
                                            {post.category || 'Guide'}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-saffron-dark transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-1">
                                            {post.meta_description}
                                        </p>
                                        <div className="mt-auto flex items-center text-xs text-gray-400 gap-4">
                                            <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Recently'}</span>
                                            <span>•</span>
                                            <span>{post.author || 'Divya Bihar Team'}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-gray-500 text-lg">No articles found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="bg-saffron/5 py-20 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-serif text-gray-900">Plan Your Spiritual Journey</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">Get personalized itineraries and expert guidance for your trip to Bodh Gaya and beyond.</p>
                    <Button size="lg" className="bg-saffron text-white hover:bg-saffron-dark rounded-full px-8">
                        Start Planning
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
