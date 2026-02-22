"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import CountrySelector from "./CountrySelector";
import { useCountry } from "@/context/CountryContext";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "India", href: "/services/india" },
            { label: "UAE", href: "/services/uae" },
            { label: "Qatar", href: "/services/qatar" },
        ],
    },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
];

export default function Navbar() {
    const { country } = useCountry();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    const getServicesHref = () => {
        if (country === "India") return "/services/india";
        if (country === "UAE") return "/services/uae";
        if (country === "Qatar") return "/services/qatar";
        return "/services/india"; // Default or global
    };

    const dynamicNavLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        {
            label: "Services",
            href: getServicesHref(),
            children: country === "Global" ? [
                { label: "India", href: "/services/india" },
                { label: "UAE", href: "/services/uae" },
                { label: "Qatar", href: "/services/qatar" },
            ] : undefined,
        },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
    ];


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileOpen(false);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setServicesOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-primary/5"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Vaiga Consultancy Home">
                        <div className="relative w-14 h-14 transition-all duration-300 group-hover:scale-105">
                            <Image
                                src="/vaiga_logo.png"
                                alt="Vaiga Consultancy Logo"
                                fill
                                className="object-cover rounded-lg"
                                priority

                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {dynamicNavLinks.map((link) =>
                            link.children ? (
                                <div
                                    key={link.label}
                                    className="relative group"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <button
                                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname.startsWith("/services")
                                            ? "text-primary"
                                            : scrolled
                                                ? "text-text-primary hover:text-primary"
                                                : "text-text-primary hover:text-primary"
                                            }`}
                                        aria-expanded={servicesOpen}
                                        aria-haspopup="true"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-dark/5 border border-primary/10 overflow-hidden"
                                            >
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`block px-4 py-3 text-sm transition-all duration-200 hover:bg-primary-50 hover:text-primary ${pathname === child.href
                                                            ? "text-primary bg-primary-50 font-medium"
                                                            : "text-text-primary"
                                                            }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                        ? "text-primary"
                                        : scrolled
                                            ? "text-text-primary hover:text-primary"
                                            : "text-text-primary hover:text-primary"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Desktop & Mobile Actions */}
                    <div className="flex items-center gap-2 lg:gap-6">
                        <CountrySelector scrolled={scrolled} />

                        <Link
                            href="/contact"
                            className="hidden lg:flex bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                        >
                            Get a Consultation
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 rounded-lg transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? (
                                <X size={24} className="text-dark" />
                            ) : (
                                <Menu size={24} className="text-dark" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {dynamicNavLinks.map((link) =>
                                link.children ? (
                                    <div key={link.label}>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-text-primary font-medium rounded-lg hover:bg-primary-50 transition-colors"
                                        >
                                            {link.label}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="ml-4 space-y-1 overflow-hidden"
                                                >
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${pathname === child.href
                                                                ? "text-primary bg-primary-50 font-medium"
                                                                : "text-text-secondary hover:text-primary hover:bg-primary-50"
                                                                }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${pathname === link.href
                                            ? "text-primary bg-primary-50"
                                            : "text-text-primary hover:bg-primary-50 hover:text-primary"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <div className="pt-3">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl font-semibold transition-all"
                                >
                                    Get a Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
