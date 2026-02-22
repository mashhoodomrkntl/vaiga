"use client";

import { useState, useRef, useEffect } from "react";
import { useCountry, Country } from "@/context/CountryContext";
import { Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const countries: { label: string; value: Country; flag?: string }[] = [
    { label: "Global", value: "Global" },
    { label: "India", value: "India" },
    { label: "UAE", value: "UAE" },
    { label: "Qatar", value: "Qatar" },
];

export default function CountrySelector({ scrolled }: { scrolled?: boolean }) {
    const { country, setCountry } = useCountry();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${scrolled
                    ? "border-primary/20 text-text-primary hover:bg-primary/5"
                    : "border-primary-dark/20 text-primary-dark hover:bg-primary-dark/5"
                    }`}
            >
                <Globe size={16} className="text-primary-dark" />
                <span className="text-xs font-semibold">{country}</span>
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl shadow-dark/10 border border-border overflow-hidden z-50"
                    >
                        <div className="py-1">
                            {countries.map((c) => (
                                <button
                                    key={c.value}
                                    onClick={() => {
                                        setCountry(c.value);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 text-xs transition-colors hover:bg-primary-50 ${country === c.value ? "text-primary bg-primary-50 font-bold" : "text-text-primary"
                                        }`}
                                >
                                    {c.label}
                                    {country === c.value && <Check size={14} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
