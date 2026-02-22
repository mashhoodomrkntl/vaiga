"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MapPin, ShieldCheck, FileText, Calculator, MonitorSmartphone } from "lucide-react";

const countryServices = [
    {
        name: "India",
        description: "Comprehensive audit, tax, and secretarial compliance services tailored for the Indian regulatory landscape.",
        href: "/services/india",
        icon: "/india_flag.png", // Or a generic icon if flag not available, using MapPin for now
        highlights: ["Audit & Assurance", "Tax Advisory", "Secretarial Compliance"]
    },
    {
        name: "UAE",
        description: "Expert VAT consultancy, internal audit, and corporate tax filing for businesses across the Emirates.",
        href: "/services/uae",
        icon: "/uae_flag.png",
        highlights: ["Internal Audit", "Corporate Tax", "GCC VAT Services"]
    },
    {
        name: "Qatar",
        description: "Precision-focused financial consulting, statutory audit support, and software implementation in Doha.",
        href: "/services/qatar",
        icon: "/qatar_flag.png",
        highlights: ["Statutory Audit", "Accounting Support", "Project Appraisals"]
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function ServicesLandingClient() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            {/* Hero Section */}
            <section className="px-6 sm:px-10 lg:px-12 mb-20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div {...fadeInUp}>
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                            Global Expertise
                        </span>
                        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                            Our Global <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
                            VAIGA provides world-class auditing, taxation, and business consultancy services across major financial hubs.
                            Select a region to explore our localized expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Countries Grid */}
            <section className="px-6 sm:px-10 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {countryServices.map((country, index) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-surface-secondary border border-border rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Globe className="text-primary" size={40} />
                                </div>
                                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-text-primary mb-4">
                                    {country.name}
                                </h2>
                                <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                                    {country.description}
                                </p>
                                <div className="space-y-3 mb-10 w-full text-left">
                                    {country.highlights.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-text-primary/80 group-hover:text-primary transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-xs font-medium uppercase tracking-wider">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href={country.href}
                                    className="mt-auto w-full py-4 bg-white border border-border rounded-xl text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                >
                                    Explore {country.name} Services <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Capabilities Section */}
            <section className="py-20 md:py-32 bg-navy mt-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-6">
                                Integrated Financial <br className="hidden md:block" /> Solutions Worldwide
                            </h2>
                            <p className="text-white/70 text-lg mb-10 leading-relaxed">
                                Whether you are a multi-national corporation or a growing startup, our professionals provide
                                cross-border insights that help you navigate complex regulatory environments with confidence.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-primary font-bold text-2xl">12+</span>
                                    <span className="text-white/60 text-sm">Years Expertise</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-primary font-bold text-2xl">4</span>
                                    <span className="text-white/60 text-sm">Global Hubs</span>
                                </div>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, title: "Risk Management" },
                                { icon: FileText, title: "Tax Compliance" },
                                { icon: Calculator, title: "Accounting" },
                                { icon: MonitorSmartphone, title: "Digital Solutions" }
                            ].map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-all cursor-default"
                                >
                                    <feature.icon className="text-primary" size={32} />
                                    <span className="text-white text-sm font-semibold">{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
