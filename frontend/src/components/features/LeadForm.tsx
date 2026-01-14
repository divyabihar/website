"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitLead, Lead } from "@/services/api";

interface LeadFormProps {
    destinationName?: string;
    onSuccess?: () => void;
}

const LeadForm = ({ destinationName, onSuccess }: LeadFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<Lead>({
        name: "",
        phone: "",
        destination: destinationName || "Bodh Gaya",
        service_type: "TOUR_PACKAGE",
        travel_date: "",
        email: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await submitLead(formData);
            setIsSuccess(true);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                <p className="text-gray-600">Our travel expert will call you shortly to plan your trip.</p>
                <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>Send Another Enquiry</Button>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <h3 className="text-xl font-bold mb-4 text-center">Get a Free Travel Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        required
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Amit Kumar"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        required
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                    />
                </div>

                {!destinationName && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron outline-none"
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        >
                            <option value="Bodh Gaya">Bodh Gaya</option>
                            <option value="Rajgir">Rajgir</option>
                            <option value="Nalanda">Nalanda</option>
                            <option value="Vaishali">Vaishali</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Ayodhya">Ayodhya</option>
                        </select>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            className="w-full px-2 py-2 border border-gray-300 rounded-md outline-none"
                            value={formData.travel_date}
                            onChange={(e) => setFormData({ ...formData, travel_date: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                        <select
                            className="w-full px-2 py-2 border border-gray-300 rounded-md outline-none"
                            value={formData.service_type}
                            onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                        >
                            <option value="TOUR_PACKAGE">Tour Package</option>
                            <option value="HOTEL">Hotel Only</option>
                            <option value="TAXI">Taxi Service</option>
                            <option value="GUIDE">Tour Guide</option>
                        </select>
                    </div>
                </div>

                <Button className="w-full bg-saffron hover:bg-saffron/90 text-white font-bold py-3" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Get Call Back"}
                </Button>
                <p className="text-xs text-center text-gray-400">We respect your privacy. No spam.</p>
            </form>
        </div>
    );
};

export default LeadForm;
