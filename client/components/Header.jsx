"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // useEffect(() => {
    //     const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    //     setIsLoggedIn(loginStatus);
    // }, []);

    // const handleLogout = () => {
    //     localStorage.removeItem("isLoggedIn");
    //     setIsLoggedIn(false);
    //     router.push("/login");
    // };

    return (
        <header className="py-2 xl:py-10 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Labi<span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* <div className="flex items-center gap-8">
                    {isLoggedIn ? (
                        <Button onClick={handleLogout}>Logout</Button>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button>Login</Button>
                            </Link>
                            {/* <Link href="/signup">
                                <Button>Signup</Button>
                            </Link> */}
                {/* </>
                    )}
                </div> */}

                <div className="xl:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </header>
    );
};

export default Header;