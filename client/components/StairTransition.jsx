"use client";
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const StairTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="sync">
            <motion.div
                key={pathname}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-screen w-screen fixed top-0 left-0 z-40 flex pointer-events-none"
            >
                <Stairs />
            </motion.div>

            <motion.div
                className="h-screen w-screen fixed top-0 left-0 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                }}
            />
        </AnimatePresence>
    );
};

export default StairTransition;