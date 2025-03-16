"use client"

import React, {useState} from "react";
import InputComponent from "@/app/components/InputComponent";
import ButtonComponent from "@/app/components/ButtonComponent";

export default function ContactFormComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg">
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
        </div>
    );
}