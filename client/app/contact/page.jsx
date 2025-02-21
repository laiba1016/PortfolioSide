"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    // { icon: <FaPhoneAlt />, title: "Phone", description: "+92 3244722107" },
    { icon: <FaEnvelope />, title: "Email", description: "laibanadeem1026@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Address", description: "Lahore, Pakistan" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            alert(data.message); // Success message

            // Reset form data after successful submission
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error submitting your form.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-8">
                    <div className="xl:w-1/2">
                        <form
                            className="flex flex-col gap-6 p-8 bg-gray-800 rounded-xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-2xl font-bold text-accent">Let's work together</h3>
                            <p className="text-white/70">
                                We're excited to help bring your amazing project to life!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="firstname"
                                    placeholder="Firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="lastname"
                                    placeholder="Lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Select
                                value={formData.service}
                                onValueChange={(value) => setFormData({ ...formData, service: value })}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                name="message"
                                placeholder="Type your message"
                                value={formData.message}
                                onChange={handleChange}
                                className="h-32"
                            />
                            <Button type="submit" size="md" className="px-6 py-3 rounded bg-accent">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="flex-1 flex flex-col gap-10">
                        {info.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-800 text-accent rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">{item.title}</p>
                                    <h3 className="text-lg font-medium text-white">{item.description}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;