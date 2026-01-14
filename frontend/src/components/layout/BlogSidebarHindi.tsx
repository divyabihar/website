import { Button } from "@/components/ui/button";

const BlogSidebarHindi = () => {
    return (
        <aside className="sticky top-24 space-y-8">
            {/* CTA Box */}
            <div className="bg-saffron/10 border border-saffron/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">यात्रा की योजना बना रहे हैं?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                    बोधगया, राजगीर और नालंदा के लिए एक अनुकूलित यात्रा कार्यक्रम और मुफ्त सलाह प्राप्त करें।
                </p>
                <form className="space-y-3">
                    <input type="text" placeholder="नाम" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/50 outline-none" />
                    <input type="tel" placeholder="फ़ोन (+91)" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/50 outline-none" />
                    <Button className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold">
                        मुफ्त कोटेशन पाएं
                    </Button>
                </form>
            </div>

            {/* Popular Topics (Static for now) */}
            <div>
                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">लोकप्रिय विषय</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-saffron">बोधगया का इतिहास</a></li>
                    <li><a href="#" className="hover:text-saffron">राजगीर घूमने का सबसे अच्छा समय</a></li>
                    <li><a href="#" className="hover:text-saffron">पटना साहिब गुरुद्वारा गाइड</a></li>
                    <li><a href="#" className="hover:text-saffron">बिहार यात्रा सुझाव</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebarHindi;
