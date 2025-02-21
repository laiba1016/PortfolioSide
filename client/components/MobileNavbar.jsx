"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNavbar = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-2xl text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

                <div className="mt-10 mb-10 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Labi<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`text-xl capitalize hover:text-accent transition-all ${pathname === link.path ? "text-accent border-b-2 border-accent" : "text-muted"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
