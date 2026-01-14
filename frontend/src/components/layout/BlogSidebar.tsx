import { Button } from "@/components/ui/button";

const BlogSidebar = () => {
    return (
        <aside className="sticky top-24 space-y-8">
            {/* CTA Box */}
            <div className="bg-saffron/10 border border-saffron/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Planning a Trip?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                    Get a customized itinerary for Bodh Gaya, Rajgir, and Nalanda.
                </p>
                <form className="space-y-3">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/50 outline-none" />
                    <input type="tel" placeholder="Phone (+91)" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-saffron/50 outline-none" />
                    <Button className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold">
                        Get Free Quote
                    </Button>
                </form>
            </div>

            {/* Popular Topics (Static for now) */}
            <div>
                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Popular Topics</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-saffron">History of Bodh Gaya</a></li>
                    <li><a href="#" className="hover:text-saffron">Best time to visit Rajgir</a></li>
                    <li><a href="#" className="hover:text-saffron">Patna Sahib Gurudwara Guide</a></li>
                    <li><a href="#" className="hover:text-saffron">Travel Tips for Bihar</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebar;
