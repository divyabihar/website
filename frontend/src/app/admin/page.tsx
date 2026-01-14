import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-12 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link href="/admin/leads">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-transparent hover:border-saffron">
                            <h2 className="text-xl font-bold mb-2">Manage Leads</h2>
                            <p className="text-gray-500 mb-4">View and manage customer enquiries.</p>
                            <Button className="w-full">View Leads</Button>
                        </div>
                    </Link>

                    <Link href="/admin/hotels">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-transparent hover:border-saffron">
                            <h2 className="text-xl font-bold mb-2">Manage Hotels</h2>
                            <p className="text-gray-500 mb-4">Add, edit, or delete hotel listings.</p>
                            <Button variant="outline" className="w-full">Manage Hotels</Button>
                        </div>
                    </Link>

                    <div className="bg-white p-6 rounded-xl shadow opacity-75 cursor-not-allowed">
                        <h2 className="text-xl font-bold mb-2">Manage Destinations</h2>
                        <p className="text-gray-500 mb-4">Update destination details (Coming Soon).</p>
                        <Button variant="outline" className="w-full" disabled>Coming Soon</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
