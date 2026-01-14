import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { getBlogPosts } from "@/services/api";

export default async function BlogAdminList() {
    const { original: posts } = await getBlogPosts('en', 1);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 py-12 flex-grow pt-32">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Blog Posts</h1>
                    <Link href="/admin/blog/create">
                        <Button className="bg-saffron hover:bg-saffron-dark text-white">+ Create New Post</Button>
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="p-4 font-semibold text-gray-700">Title</th>
                                <th className="p-4 font-semibold text-gray-700">Language</th>
                                <th className="p-4 font-semibold text-gray-700">Status</th>
                                <th className="p-4 font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <tr key={post.id} className="border-b hover:bg-gray-50">
                                        <td className="p-4 font-medium">{post.title}</td>
                                        <td className="p-4 uppercase text-xs font-bold text-gray-500">
                                            {post.language === 'en' ? '🇬🇧 EN' : '🇮🇳 HI'}
                                        </td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Published</span>
                                        </td>
                                        <td className="p-4">
                                            <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-500">No posts found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
