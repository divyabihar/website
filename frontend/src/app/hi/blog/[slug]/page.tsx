import { getBlogPost } from "@/services/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebarHindi from "@/components/layout/BlogSidebarHindi";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from 'next';
import AdSlot from "@/components/ads/AdSlot";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getBlogPost(slug, 'hi');

        // Find English translation slug
        const enTranslation = post.translations?.find(t => t.language === 'en');
        const alternates: any = {
            canonical: `https://divyabihar.com/hi/blog/${post.slug}`,
            languages: {
                'hi': `https://divyabihar.com/hi/blog/${post.slug}`,
            },
        };

        if (enTranslation) {
            alternates.languages['en'] = `https://divyabihar.com/blog/${enTranslation.slug}`;
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
                locale: 'hi_IN',
            }
        };
    } catch (e) {
        return {
            title: 'लेख नहीं मिला | दिव्य बिहार',
        };
    }
}

export default async function BlogPostPageHindi({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPost(slug, 'hi');

    // Find English Link
    const enLink = post.translations?.find(t => t.language === 'en');

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image_url ? [post.image_url] : [],
        "author": {
            "@type": "Person",
            "name": post.author || "दिव्य बिहार टीम"
        },
        "publisher": {
            "@type": "Organization",
            "name": "दिव्य बिहार",
            "logo": {
                "@type": "ImageObject",
                "url": "https://divyabihar.com/logo.png"
            }
        },
        "datePublished": post.published_at,
        "description": post.meta_description,
        "inLanguage": "hi",
        "articleBody": post.content?.substring(0, 150) + "..."
    };

    return (
        <main className="min-h-screen bg-white font-sans-hindi">
            <Navbar />
            <Script
                id="blog-schema-hi"
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
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-gray-500 text-sm mb-8">
                        <span>{post.published_at ? new Date(post.published_at).toLocaleDateString('hi-IN') : 'अभी प्रकाशित'}</span>
                        <span>•</span>
                        <span>{post.author || 'दिव्य बिहार टीम'}</span>
                    </div>

                    {/* Language Switch */}
                    {enLink && (
                        <Link
                            href={`/blog/${enLink.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full text-sm font-medium hover:border-saffron hover:text-saffron transition-colors"
                        >
                            <span>🇬🇧</span> Read in English
                        </Link>
                    )}
                </div>
            </header>

            {/* Content Area */}
            <div className="container mx-auto px-4 py-12">

                {/* AD SLOT: Top of Page */}
                <AdSlot slotId="TOP_BANNER_SLOT_ID" description="Article Top Banner (HI)" className="max-w-5xl mx-auto mb-12" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        {post.image_url && (
                            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                                <img src={post.image_url} alt={post.title} className="w-full h-auto" />
                            </div>
                        )}

                        {/* Article Content */}
                        <div
                            className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-saffron prose-img:rounded-xl max-w-none text-gray-700 font-sans-hindi"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* AD SLOT: Middle/End of Content */}
                        <AdSlot slotId="CONTENT_BOTTOM_SLOT_ID" description="In-Article Bottom (HI)" format="auto" />

                        {/* FAQ Section */}
                        {post.faq_schema && (
                            <div className="mt-12 pt-12 border-t">
                                <h3 className="text-2xl font-bold mb-6">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h3>
                                <div className="space-y-4">
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
                        <div className="sticky top-24 space-y-8">
                            <BlogSidebarHindi />
                            {/* AD SLOT: Sidebar Sticky */}
                            <AdSlot slotId="SIDEBAR_STICKY_SLOT_ID" description="Sidebar Sticky Ad (HI)" format="rectangle" style={{ minHeight: '300px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
