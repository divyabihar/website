import { getBlogPosts } from "@/services/api";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "आध्यात्मिक यात्रा ब्लॉग | दिव्य बिहार",
    description: "बोधगया, राजगीर और नालंदा जैसे बिहार के आध्यात्मिक स्थलों के बारे में गाइड, सुझाव और कहानियां पढ़ें।",
};

export default async function BlogIndexHindi() {
    const { original: posts } = await getBlogPosts('hi');

    return (
        <main className="min-h-screen bg-neutral-50">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold font-serif text-gray-900">आध्यात्मिक ब्लॉग</h1>
                        <Link href="/blog" className="text-sm font-medium px-4 py-2 border rounded-full hover:bg-gray-50 flex items-center gap-2">
                            <span>🇺🇸</span> Read in English
                        </Link>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        बिहार के पवित्र स्थलों के इतिहास, आध्यात्मिकता और संस्कृति के बारे में विस्तार से जानें।
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link href={`/hi/blog/${post.slug}`} key={post.id} className="group">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                                    <div className="h-52 bg-gray-200 overflow-hidden relative">
                                        {post.image_url ? (
                                            <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-saffron/10 text-saffron">
                                                <span className="text-4xl">🕉️</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-saffron-dark uppercase tracking-wider">
                                            {post.category || 'गाइड'}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-saffron-dark transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                            {post.meta_description}
                                        </p>
                                        <div className="mt-auto flex items-center text-xs text-gray-400 gap-4">
                                            <span>{post.published_at ? new Date(post.published_at).toLocaleDateString('hi-IN') : 'हाल ही में'}</span>
                                            <span>•</span>
                                            <span>{post.author || 'दिव्य बिहार टीम'}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-gray-500 text-lg">लेख अभी उपलब्ध नहीं हैं। कृपया बाद में चेक करें।</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="bg-saffron/5 py-20 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-serif text-gray-900">अपनी आध्यात्मिक यात्रा की योजना बनाएं</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">बोधगया और अन्य स्थलों के लिए व्यक्तिगत यात्रा कार्यक्रम और विशेषज्ञ मार्गदर्शन प्राप्त करें।</p>
                    <Button size="lg" className="bg-saffron text-white hover:bg-saffron-dark rounded-full px-8">
                        अभी योजना बनाएं
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
