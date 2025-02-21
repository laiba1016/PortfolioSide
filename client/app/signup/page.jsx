"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const changehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", user);
            if (res.data.success) {
                toast.success("User Signup successfully");

                setUser({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                });

                setTimeout(() => {
                    router.push("/login");
                }, 1500);
            }
        } catch (error) {
            toast.error(error.response.data.msg);
            console.log(error.response)
        }
    };

    return (
        <div>
            <section className="bg-[#1C1C22] text-white flex items-center justify-center ">
                <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl space-y-8 sm:p-8 bg-[#151728] rounded-3xl shadow-xl border-accent">
                    <h2 className="text-3xl sm:text-2xl font-bold text-center hover:text-accent">Sign Up</h2>
                    <form onSubmit={submithandler} className="mt-8 space-y-6" action="#">
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-base font-bold">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                value={user.firstname}
                                onChange={changehandler}
                                id="firstName"
                                className="bg-[#151728] border border-accent text-white text-sm rounded-full focus:ring-accent focus:border-accent focus:outline-none block w-full p-4"
                                placeholder="Enter your First Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-base font-bold">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                value={user.lastname}
                                onChange={changehandler}
                                id="lastName"
                                className="bg-[#151728] border border-accent text-white text-sm rounded-full focus:ring-accent focus:border-accent focus:outline-none block w-full p-4"
                                placeholder="Enter your Last Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-base font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={changehandler}
                                id="email"
                                className="bg-[#151728] border border-accent text-white text-sm rounded-full focus:ring-accent focus:border-accent focus:outline-none block w-full p-4"
                                placeholder="name@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-base font-bold">
                                Password
                            </label>
                            <div className="flex items-center bg-[#151728] border border-accent text-sm rounded-full focus-within:ring-accent focus-within:border-accent">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    value={user.password}
                                    onChange={changehandler}
                                    placeholder="••••••••"
                                    className="bg-transparent text-white focus:outline-none block w-full p-4"
                                    required
                                />
                                <span
                                    className="p-3 text-white cursor-pointer transition-opacity duration-300"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-5 py-3 text-base font-bold text-center text-black bg-accent rounded-full hover:bg-accent focus:ring-4 focus:ring-accent"
                        >
                            Sign Up
                        </button>

                        <div className="text-sm font-medium text-center">
                            Already registered?{" "}
                            <a href="/login" className="text-accent hover:font-bold">
                                Login here
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Signup;