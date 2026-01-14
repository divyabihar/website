import { getBlogPost } from "@/services/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/layout/BlogSidebar";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getBlogPost(slug, 'en');

        // Find Hindi translation slug
        const hiTranslation = post.translations?.find(t => t.language === 'hi');
        const alternates: any = {
            canonical: `https://divyabihar.com/blog/${post.slug}`,
            languages: {
                'en': `https://divyabihar.com/blog/${post.slug}`,
            },
        };

        if (hiTranslation) {
            alternates.languages['hi'] = `https://divyabihar.com/hi/blog/${hiTranslation.slug}`;
        }

        return {
            title: post.meta_title || post.title,
            description: post.meta_description,
            keywords: post.keywords,
            alternates,
            openGraph: {
                title: post.meta_title || post.title,
                description: post.meta_description,
                type: 'article',
                publishedTime: post.published_at,
                authors: [post.author || 'Divya Bihar'],
                images: post.image_url ? [post.image_url] : [],
            }
        };
    } catch (e) {
        return {
            title: 'Article Not Found | Divya Bihar',
        };
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPost(slug, 'en');

    // Find Hindi Link
    const hiLink = post.translations?.find(t => t.language === 'hi');

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image_url ? [post.image_url] : [],
        "author": {
            "@type": "Person",
            "name": post.author || "Divya Bihar Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Divya Bihar",
            "logo": {
                "@type": "ImageObject",
                "url": "https://divyabihar.com/logo.png"
            }
        },
        "datePublished": post.published_at,
        "description": post.meta_description,
        "articleBody": post.content?.substring(0, 150) + "..." // simplified for schema
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Header */}
            <header className="pt-32 pb-16 bg-neutral-50 border-b">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    {post.category && (
                        <span className="bg-saffron/10 text-saffron-dark px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                            {post.category}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-gray-500 text-sm mb-8">
                        <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Just Now'}</span>
                        <span>•</span>
                        <span>{post.author || 'Divya Bihar Team'}</span>
                    </div>

                    {/* Language Switch */}
                    {hiLink && (
                        <Link
                            href={`/hi/blog/${hiLink.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full text-sm font-medium hover:border-saffron hover:text-saffron transition-colors"
                        >
                            <span>🇮🇳</span> Read in Hindi (हिंदी में पढ़ें)
                        </Link>
                    )}
                </div>
            </header>

            {/* Content Area */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        {post.image_url && (
                            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                                <img src={post.image_url} alt={post.title} className="w-full h-auto" />
                            </div>
                        )}

                        <div
                            className="prose prose-lg prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-saffron prose-img:rounded-xl max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* FAQ Section */}
                        {post.faq_schema && (
                            <div className="mt-12 pt-12 border-t">
                                <h3 className="text-2xl font-bold font-serif mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    {/* Render standard FAQs from schema if needed, simplified here */}
                                    {post.faq_schema.mainEntity?.map((faq: any, i: number) => (
                                        <div key={i} className="bg-neutral-50 p-4 rounded-lg">
                                            <h4 className="font-bold mb-2">{faq.name}</h4>
                                            <p className="text-sm text-gray-600">{faq.acceptedAnswer?.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
