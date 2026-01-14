"use client";

import { useEffect, useState } from "react";
import { getLeads, Lead } from "@/services/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Added isAuthenticated state

    useEffect(() => {
        const secret = localStorage.getItem('admin_secret');
        if (secret === 'divyabihar-admin') { // Simple client-side check for MVP
            setIsAuthenticated(true);
            getLeads().then(setLeads);
        } else {
            const input = prompt("Enter Admin Secret:");
            if (input === 'divyabihar-admin') {
                localStorage.setItem('admin_secret', input);
                setIsAuthenticated(true);
                getLeads().then(setLeads);
            } else {
                alert("Unauthorized");
                window.location.href = "/";
            }
        }
    }, []);

    if (!isAuthenticated) return <div className="min-h-screen flex items-center justify-center">Verifying access...</div>; // Conditional render for authentication

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Lead Management</h1>
                    <Button variant="outline" onClick={() => getLeads().then(setLeads)}>Refresh</Button>
                </div>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> {/* Added Actions header */}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {leads.map((lead, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{lead.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{lead.destination}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            {lead.service_type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{lead.travel_date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            NEW {/* Changed "New" to "NEW" */}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Button size="sm" variant="ghost" className="text-blue-600">Edit</Button> {/* Added Edit button */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {leads.length === 0 && <p className="p-8 text-center text-gray-500">No leads found.</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
