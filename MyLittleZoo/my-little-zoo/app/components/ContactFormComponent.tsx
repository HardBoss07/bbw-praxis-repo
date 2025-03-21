"use client";

import React, { useState } from "react";
import InputComponent from "@/app/components/InputComponent";
import ButtonComponent from "@/app/components/ButtonComponent";

export default function ContactFormComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        setShowPopup(true); // Show popup

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg relative">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Form</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <InputComponent
                    type="text"
                    placeholder="John Smith"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputComponent
                    type="email"
                    placeholder="example@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputComponent
                    type="textarea"
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <ButtonComponent
                    type="submit"
                    label="Send Message"
                    onClick={() => {}}
                />
            </form>
            {showPopup && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto transform scale-95 transition-transform duration-300 ease-out animate-popup">
                        <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                        <p className="mb-4">
                            We will reply to your email <span className="font-medium">{email}</span> as soon as possible.
                        </p>
                        <button
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}