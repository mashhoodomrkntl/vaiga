"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
}

interface ServicePageLayoutProps {
    country: string;
    tagline: string;
    services: ServiceItem[];
}

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function ServicePageLayout({
    country,
    tagline,
    services,
}: ServicePageLayoutProps) {
    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden text-left">
                {/* Professional "Wow" Blending Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/8 rounded-full blur-[90px] animate-pulse" />
                    <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]" />

                    <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 via-white to-white" />

                    {/* Subtle Geometric Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`, backgroundSize: '64px 64px' }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-2 mb-10 text-text-muted/60 text-xs font-semibold tracking-widest uppercase">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <span>Services</span>
                            <span>/</span>
                            <span className="text-primary">{country}</span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10 backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary-800 text-[10px] font-bold uppercase tracking-[0.25em]">
                                Specialized Expertise
                            </span>
                        </motion.div>

                        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight leading-[1.2]">
                            Services in{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-700 to-primary-900">
                                    {country}
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="absolute -bottom-1 left-0 h-0.5 bg-primary/20 rounded-full"
                                />
                            </span>
                        </h1>
                        <p className="text-text-secondary/80 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                            {tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 md:py-28 bg-surface-secondary">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Our Expertise
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Our Services in {country}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 md:p-7 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon
                                        size={26}
                                        className="text-primary group-hover:text-white transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-5 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 border-t border-border pt-4">
                                    {service.details.map((detail) => (
                                        <li
                                            key={detail}
                                            className="flex items-start gap-2 text-text-muted text-xs"
                                        >
                                            <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Need Our Services in {country}?
                        </h2>
                        <p className="text-text-secondary text-sm md:text-base mb-8 max-w-xl mx-auto">
                            Get in touch with our {country} team for a free consultation and personalized solutions for your business.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                        >
                            Contact Our {country} Office
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
