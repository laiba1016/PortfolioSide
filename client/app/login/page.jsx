"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const changehandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/loggedin", user);
            if (res.data.success) {
                toast.success("User logged in successfully");

                localStorage.setItem('isLoggedIn', 'true');

                setUser({
                    email: "",
                    password: "",
                });
                setTimeout(() => {
                    router.push("/");
                    router.refresh();
                }, 1000);

            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.msg) {
                toast.error(error.response.data.msg);
            } else {
                toast.error("An error occurred, please try again later.");
            }

            console.log("Error: ", error.response ? error.response.data : error);
        }
    };

    return (
        <div>
            <section className="bg-[#1C1C22] text-white flex items-center justify-center">
                <div className="w-full lg:max-w-xl sm:w-4/5 md:w-3/4 space-y-8 sm:p-8 bg-[#151728] rounded-3xl shadow-xl border-accent">
                    <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold hover:text-accent text-center">Log In</h2>
                    <form className="mt-8 space-y-6" onSubmit={submithandler}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-base font-bold"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={user.email}
                                onChange={changehandler}
                                className="bg-[#151728] border border-accent text-white text-sm rounded-full focus:ring-accent focus:border-accent focus:outline-none block w-full p-4"
                                placeholder="name@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-base font-bold"
                            >
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

                        <div className="flex items-center justify-between">
                            <a
                                href="#"
                                className="text-sm font-medium text-accent hover:text-[#20ffa6]"
                            >
                                Forget Password
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-5 py-3 text-base font-bold text-center text-black bg-accent rounded-full hover:bg-[#20ffa6] focus:ring-4 focus:ring-[#20ffa6] mt-4"
                        >
                            Login
                        </button>
                        <div className="text-sm font-medium text-center mt-4">
                            Don't have an account?{" "}
                            <a
                                href="/signup"
                                className="text-accent hover:font-bold"
                            >
                                Signup
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;