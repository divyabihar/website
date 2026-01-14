"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogSeedData = void 0;
const blog_post_entity_1 = require("./entities/blog-post.entity");
exports.blogSeedData = [
    {
        language: blog_post_entity_1.BlogLanguage.EN,
        group_id: 'group-1',
        title: 'Complete Travel Guide to Bodh Gaya: History & Timings',
        slug: 'bodh-gaya-travel-guide',
        image_url: 'https://images.unsplash.com/photo-1544258296-1c070f4438fa?q=80&w=2069',
        content: `
            <h2>Introduction</h2>
            <p>Bodh Gaya is the spiritual heart of Buddhism, where Prince Siddhartha attained enlightenment and became the Buddha. Located in Bihar, it invites millions of pilgrims annually.</p>
            
            <h3>Mahabodhi Temple</h3>
            <p>The **Mahabodhi Temple**, a UNESCO World Heritage site, stands as a testament to the Gupta era's architectural brilliance. Open from 5:00 AM to 9:00 PM, it is the focal point of devotion.</p>

            <h3>The Bodhi Tree</h3>
            <p>Directly behind the temple sits the sacred **Bodhi Tree**. It is believed to be a direct descendant of the original tree under which Buddha meditated.</p>

            <h3>Best Time to Visit</h3>
            <p>The best time to visit is between **October and March** when the weather is pleasant. The summer months can be extremely hot.</p>
        `,
        author: 'Rahul Verma',
        meta_title: 'Bodh Gaya Travel Guide 2026: History, Temple Timings & Tips',
        meta_description: 'Plan your trip to Bodh Gaya with our complete guide. Learn about Mahabodhi Temple timings, history, the Bodhi Tree, and how to reach.',
        keywords: ['Bodh Gaya Travel Guide', 'Mahabodhi Temple', 'Bodhi Tree', 'Bihar Tourism'],
        category: 'Guide',
        tags: ['Bodh Gaya', 'Buddhism', 'Pilgrimage'],
        faq_schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the timings for Mahabodhi Temple?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The temple is open daily from 5:00 AM to 9:00 PM."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is mobile allowed inside the temple?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mobile phones are generally not allowed inside the inner sanctum. Lockers are available at the entrance."
                    }
                }
            ]
        },
        published_at: new Date('2026-01-01T10:00:00Z'),
        is_published: true
    },
    {
        language: blog_post_entity_1.BlogLanguage.HI,
        group_id: 'group-1',
        title: 'बोधगया यात्रा की पूरी जानकारी: इतिहास और दर्शन का समय',
        slug: 'bodh-gaya-travel-guide-hindi',
        image_url: 'https://images.unsplash.com/photo-1544258296-1c070f4438fa?q=80&w=2069',
        content: `
            <h2>परिचय</h2>
            <p>बोधगया बौद्ध धर्म का आध्यात्मिक हृदय है, जहाँ राजकुमार सिद्धार्थ को ज्ञान प्राप्त हुआ और वे बुद्ध बने। बिहार में स्थित यह स्थल प्रतिवर्ष लाखों तीर्थयात्रियों को आमंत्रित करता है।</p>
            
            <h3>महाबोधि मंदिर</h3>
            <p>**महाबोधि मंदिर**, जो एक यूनेस्को विश्व धरोहर स्थल है, गुप्त काल की वास्तुकला का एक अद्भुत उदाहरण है। यह सुबह 5:00 बजे से रात 9:00 बजे तक खुला रहता है।</p>

            <h3>बोधि वृक्ष</h3>
            <p>मंदिर के ठीक पीछे पवित्र **बोधि वृक्ष** स्थित है। माना जाता है कि यह उसी मूल वृक्ष का वंशज है जिसके नीचे बुद्ध ने ध्यान किया था।</p>

            <h3>घूमने का सबसे अच्छा समय</h3>
            <p>यात्रा करने का सबसे अच्छा समय **अक्टूबर से मार्च** के बीच होता है जब मौसम सुहाना होता है। गर्मियों में यहाँ बहुत गर्मी हो सकती है।</p>
        `,
        author: 'राहुल वर्मा',
        meta_title: 'बोधगया यात्रा गाइड 2026: इतिहास, मंदिर का समय और सुझाव',
        meta_description: 'बोधगया की अपनी यात्रा की योजना बनाएं। महाबोधि मंदिर के समय, इतिहास, बोधि वृक्ष और पहुंचने के तरीके के बारे में जानें।',
        keywords: ['बोधगया यात्रा', 'महाबोधि मंदिर', 'बोधि वृक्ष', 'बिहार पर्यटन'],
        category: 'गाइड',
        tags: ['बोधगया', 'बौद्ध धर्म', 'तीर्थ यात्रा'],
        faq_schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "महाबोधि मंदिर खुलने का समय क्या है?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "मंदिर प्रतिदिन सुबह 5:00 बजे से रात 9:00 बजे तक खुला रहता है।"
                    }
                }
            ]
        },
        published_at: new Date('2026-01-01T10:00:00Z'),
        is_published: true
    },
    {
        language: blog_post_entity_1.BlogLanguage.EN,
        group_id: 'group-2',
        title: 'How to Perform Pind Daan in Gaya: Step-by-Step Guide',
        slug: 'pind-daan-gaya-guide',
        image_url: 'https://images.unsplash.com/photo-1600609842388-295989104764?q=80&w=2070',
        content: `
            <h2>The Significance of Pind Daan</h2>
            <p>Performing **Pind Daan** in Gaya is believed to bring salvation (Moksha) to one's ancestors. It is a mandatory rite for Hindus to ensure the peace of departed souls.</p>
            
            <h3>Vishnupad Temple</h3>
            <p>The rituals are centered around the **Vishnupad Temple**, located on the banks of the Falgu River. The temple houses a footprint of Lord Vishnu.</p>

            <h3>Procedure</h3>
            <p>Devotees generally offer balls of rice and wheat flour. It is recommended to perform these rituals under the guidance of a local Panda (priest).</p>
        `,
        author: 'Pandit Ji',
        meta_title: 'Pind Daan Gaya Procedure & Benefits | Complete Guide',
        meta_description: 'Learn how to perform Pind Daan in Gaya Ji. Understand the rituals, significance, best time to visit, and costs involved.',
        keywords: ['Pind Daan Gaya', 'Vishnupad Temple', 'Gaya Ji', 'Pitru Paksha'],
        category: 'Rituals',
        tags: ['Gaya', 'Hinduism', 'Rituals'],
        faq_schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why is Pind Daan performed in Gaya?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gaya is considered the most sacred place for Pind Daan due to a boon given by Lord Vishnu."
                    }
                }
            ]
        },
        published_at: new Date('2026-01-05T10:00:00Z'),
        is_published: true
    },
    {
        language: blog_post_entity_1.BlogLanguage.HI,
        group_id: 'group-2',
        title: 'गया जी में पिंड दान कैसे करें: संपूर्ण विधि और महत्व',
        slug: 'pind-daan-gaya-guide-hindi',
        image_url: 'https://images.unsplash.com/photo-1600609842388-295989104764?q=80&w=2070',
        content: `
            <h2>पिंड दान का महत्व</h2>
            <p>गया में **पिंड दान** करने से पूर्वजों को मोक्ष की प्राप्ति होती है। दिवंगत आत्माओं की शांति के लिए हिंदुओं के लिए यह एक आवश्यक संस्कार है।</p>
            
            <h3>विष्णुपद मंदिर</h3>
            <p>ये अनुष्ठान **विष्णुपद मंदिर** के आसपास केंद्रित हैं, जो फल्गु नदी के तट पर स्थित है। मंदिर में भगवान विष्णु के पदचिह्न हैं।</p>

            <h3>विधि</h3>
            <p>भक्त आम तौर पर चावल और गेहूं के आटे के पिंड चढ़ाते हैं। स्थानीय पंडा (पुजारी) के मार्गदर्शन में इन अनुष्ठानों को करने की सिफारिश की जाती है।</p>
        `,
        author: 'पंडित जी',
        meta_title: 'गया जी पिंड दान विधि और लाभ | संपूर्ण गाइड',
        meta_description: 'गया जी में पिंड दान कैसे करें, इसकी जानकारी प्राप्त करें। अनुष्ठानों, महत्व, यात्रा के सर्वोत्तम समय और खर्च के बारे में जानें।',
        keywords: ['गया पिंड दान', 'विष्णुपद मंदिर', 'गया जी', 'पितृ पक्ष'],
        category: 'अनुष्ठान',
        tags: ['गया', 'हिंदू धर्म', 'अनुष्ठान'],
        faq_schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "गया में पिंड दान क्यों किया जाता है?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "भगवान विष्णु द्वारा दिए गए वरदान के कारण गया को पिंड दान के लिए सबसे पवित्र स्थान माना जाता है।"
                    }
                }
            ]
        },
        published_at: new Date('2026-01-05T10:00:00Z'),
        is_published: true
    },
    {
        language: blog_post_entity_1.BlogLanguage.EN,
        group_id: 'group-3',
        title: 'Exploring the Ruins of Nalanda University',
        slug: 'nalanda-university-ruins',
        image_url: 'https://images.unsplash.com/photo-1591528659550-6cb463c22421?q=80&w=2067',
        content: `
            <h2>A Center of Ancient Learning</h2>
            <p>Nalanda was a renowned mahavihara (Buddhist monastic university) in ancient Magadha. It operated from 427 to 1197 CE.</p>
            
            <h3>What to See</h3>
            <p>Visitors can explore the red brick ruins of monasteries, temples, and lecture halls. The **Nalanda Archaeological Museum** nearby houses artifacts recovered from the site.</p>
        `,
        author: 'Divya Bihar Team',
        meta_title: 'Nalanda University Ruins Guide | History & Architecture',
        meta_description: 'Visit the ancient Nalanda University ruins. Discover the history of this great center of learning and what to see today.',
        keywords: ['Nalanda University', 'Bihar Heritage', 'Ancient India'],
        category: 'History',
        tags: ['Nalanda', 'History', 'Education'],
        published_at: new Date('2026-01-10T10:00:00Z'),
        is_published: true
    },
    {
        language: blog_post_entity_1.BlogLanguage.HI,
        group_id: 'group-3',
        title: 'नालंदा विश्वविद्यालय के खंडहर: इतिहास के पन्नों से',
        slug: 'nalanda-university-ruins-hindi',
        image_url: 'https://images.unsplash.com/photo-1591528659550-6cb463c22421?q=80&w=2067',
        content: `
            <h2>प्राचीन शिक्षा का केंद्र</h2>
            <p>नालंदा प्राचीन मगध में एक प्रसिद्ध महाविहार (बौद्ध मठवासी विश्वविद्यालय) था। यह 427 से 1197 ईस्वी तक संचालित रहा।</p>
            
            <h3>क्या देखें</h3>
            <p>आगंतुक मठों, मंदिरों और व्याख्यान कक्षों के लाल ईंटों के खंडहरों का पता लगा सकते हैं। पास ही स्थित **नालंदा पुरातत्व संग्रहालय** साइट से प्राप्त कलाकृतियों को सहेजता है।</p>
        `,
        author: 'दिव्य बिहार टीम',
        meta_title: 'नालंदा विश्वविद्यालय खंडहर गाइड | इतिहास और वास्तुकला',
        meta_description: 'प्राचीन नालंदा विश्वविद्यालय के खंडहरों की यात्रा करें। इस महान शिक्षा केंद्र के इतिहास और आज देखने लायक चीजों के बारे में जानें।',
        keywords: ['नालंदा विश्वविद्यालय', 'बिहार विरासत', 'प्राचीन भारत'],
        category: 'इतिहास',
        tags: ['नालंदा', 'इतिहास', 'शिक्षा'],
        published_at: new Date('2026-01-10T10:00:00Z'),
        is_published: true
    }
];
//# sourceMappingURL=blog.seed.js.map