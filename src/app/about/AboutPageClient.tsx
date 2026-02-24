"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Target,
    Eye,
    Heart,
    Shield,
    Users,
    Star,
    Handshake,
    TrendingUp,
    ArrowRight,
    Download,
    Calendar,
    MapPin,
    Globe,
    Award,
} from "lucide-react";
import { useCountry } from "@/context/CountryContext";
import { AnimatedCounter as Counter } from "@/components/AnimatedCounter";
import TeamSection from "@/components/TeamSection";
// import TeamSection from "@/components/TeamSection";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const coreValues = [
    { icon: Shield, title: "Integrity", desc: "Ethical practices at every step" },
    { icon: Heart, title: "Dedication", desc: "Committed to client success" },
    { icon: Star, title: "Professionalism", desc: "Highest industry standards" },
    { icon: Award, title: "Quality of Service", desc: "Excellence in every engagement" },
    { icon: Handshake, title: "Client Relationships", desc: "Long-term partnerships" },
    { icon: TrendingUp, title: "Continuous Improvement", desc: "Always evolving" },
];

const timeline = [
    { year: "2011", title: "Founded", desc: "Established in Malappuram, Kerala with a vision to provide world-class consultancy." },
    { year: "2014", title: "Expanded Services", desc: "Added comprehensive tax advisory and management consultancy services." },
    { year: "2017", title: "UAE Office Opened", desc: "Expanded to Dubai to serve the growing Middle Eastern market." },
    { year: "2019", title: "Qatar Operations", desc: "Opened our Doha office, strengthening our GCC presence." },
    { year: "2022", title: "2000+ Clients", desc: "Crossed the milestone of serving 2000 global clients across industries." },
    { year: "2025", title: "Digital Transformation", desc: "Embracing technology with advanced accounting software solutions." },
    { year: "2026", title: "Zoho & Tally Partnerships", desc: "Became official partners for Zoho and Tally, leading the digital transformation in auditing." },
];

export default function AboutPageClient() {
    const { country } = useCountry();

    const aboutHeroContent = {
        Global: "A premier consulting firm and official Zoho & Tally partner headquartered in Kerala, India, with operations extending to Qatar and UAE. Specializing in audits, tax advisory, and digital accounting solutions since 2011.",
        India: "A premier consulting firm and official Tally & Zoho partner headquartered in Kerala. Specializing in local audits, GST compliance, and financial advisory since 2011.",
        UAE: "Expert consultancy firm and official Zoho partner in Dubai. Specializing in GCC VAT, audit services, and strategic digital accounting solutions since 2017.",
        Qatar: "Leading Zoho Books partner and financial consultancy in Doha. Specializing in auditing, Tally implementation, and financial advisory for Qatar's diverse business landscape.",
    };

    const currentStats = country === "Global"
        ? [
            { icon: Calendar, label: "Established", value: "2011" },
            { icon: Users, label: "Team Size", value: "50+" },
            { icon: Globe, label: "Countries", value: "3" },
            { icon: MapPin, label: "Offices", value: "3" },
        ]
        : [
            { icon: Calendar, label: "Established", value: "2011" },
            { icon: Users, label: "Team Size", value: "50+" },
            { icon: Globe, label: "Focus", value: country },
            { icon: MapPin, label: "Offices", value: "1" },
        ];

    const timelineItems = timeline.filter(item => {
        if (country === "Global") return true;
        if (country === "India") return item.year === "2011" || item.year === "2014" || item.year === "2022" || item.year === "2025";
        if (country === "UAE") return item.year === "2017" || item.year === "2022" || item.year === "2025";
        if (country === "Qatar") return item.year === "2019" || item.year === "2022" || item.year === "2025";
        return true;
    });

    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden text-left">
                {/* Professional "Wow" Blending Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/8 rounded-full blur-[90px] animate-pulse" />
                    <div className="absolute bottom-[0%] left-[-5%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]" />

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
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10 backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary-800 text-[10px] font-bold uppercase tracking-[0.25em]">
                                Our Story & Vision
                            </span>
                        </motion.div>

                        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight leading-[1.2]">
                            Welcome to{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-700 to-primary-900">
                                    Vaiga Consultancy
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="absolute -bottom-1 left-0 h-0.5 bg-primary/20 rounded-full"
                                />
                            </span>
                        </h1>
                        <p className="text-text-secondary/80 text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-medium">
                            {aboutHeroContent[country]}
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Link
                                href="/contact"
                                className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-xl shadow-primary/20 flex items-center gap-3"
                            >
                                Get in Touch
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#story"
                                className="px-10 py-4 bg-white/80 hover:bg-white text-text-primary border border-primary/10 rounded-2xl font-bold text-sm transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
                            >
                                Read Our Story
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div {...fadeInUp}>
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                                Our Story
                            </span>
                            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-6">
                                Building Trust Through Excellence
                            </h2>
                            <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
                                <p>
                                    Vaiga Consultancy Services (P) Ltd is a premier consulting firm headquartered in Kerala, India. {country === "Global"
                                        ? "With operations extending across India, Qatar, and UAE, we serve a multinational clientele as official partners for leading accounting software."
                                        : `With a strong presence and specialized expertise in ${country}, we serve businesses as official Zoho and Tally partners, combining local insight with global standards.`} Founded in 2011, we have grown from a small team of dedicated professionals to a multinational organization serving over 2000 clients.
                                </p>
                                <p>
                                    We specialize in Internal Audits, System Audits, Indirect Tax, Direct Tax, Company Laws, and comprehensive Accounting Software Implementation (Zoho Books, Tally Prime, Odoo). Our team of seasoned professionals brings deep expertise in auditing, financial analysis, tax planning, and digital business advisory.
                                </p>
                                <p>
                                    As trusted Zoho Partners and Financial Consultants, we are known for our unwavering commitment to professional ethics and quality client relationships. We deliver top-notch consultancy solutions at competitive rates, ensuring client success through integrity and digital excellence.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {currentStats.map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-surface-secondary rounded-2xl p-6 text-center border border-border"
                                >
                                    <item.icon size={28} className="text-primary mx-auto mb-3" />
                                    <p className="font-[var(--font-heading)] text-2xl font-bold text-text-primary">
                                        {item.value}
                                    </p>
                                    <p className="text-text-muted text-sm">{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 md:py-28 bg-surface-secondary">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            {...fadeInUp}
                            className="bg-white rounded-2xl p-8 md:p-10 border border-border hover:shadow-lg transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                                <Target size={28} className="text-primary" />
                            </div>
                            <h3 className="font-[var(--font-heading)] text-2xl font-bold text-text-primary mb-4">
                                Our Mission
                            </h3>
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                To deliver comprehensive and high-quality consultancy solutions that empower businesses to achieve their full potential. Through our expertise in internal audits, tax regulations, company laws, and a wide range of financial and management advisory services, we strive to provide exceptional guidance and support, fostering growth and innovation for our clients {country === "Global" ? "across India, Qatar, UAE, and all over the world" : `specifically within ${country} and beyond`}.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 md:p-10 border border-border hover:shadow-lg transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                                <Eye size={28} className="text-primary" />
                            </div>
                            <h3 className="font-[var(--font-heading)] text-2xl font-bold text-text-primary mb-4">
                                Our Vision
                            </h3>
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                To be a globally recognized leader in the consulting industry, known for our unwavering commitment to integrity, quality, and client satisfaction. We aim to continuously expand our reach and enhance our service offerings, ensuring that we remain at the forefront of industry developments and provide unparalleled value to our diverse clientele.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Core Values */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Our Values
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary">
                            What Drives Us
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl hover:bg-primary-50/50 transition-colors"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                                    <value.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="font-[var(--font-heading)] font-semibold text-text-primary mb-1">
                                    {value.title}
                                </h3>
                                <p className="text-text-muted text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 md:py-28 bg-dark text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Our Journey
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
                            Key Milestones
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

                        <div className="space-y-10">
                            {timelineItems.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Year dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-dark z-10 mt-1.5" />

                                    <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                        <span className="text-primary font-bold text-lg">{item.year}</span>
                                        <h3 className="font-[var(--font-heading)] text-white font-semibold text-lg mt-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 md:py-20 bg-primary-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { end: 2000, suffix: "+", label: "Happy Clients" },
                            { end: 500, suffix: "+", label: "Projects Finished" },
                            { end: 50, suffix: "+", label: "Professionals" },
                            { end: country === "Global" ? 3 : 1, suffix: "", label: country === "Global" ? "Countries" : "Country Focus" },
                        ].map((stat) => (
                            <Counter key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brochure Download */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Discover Our Solutions
                        </h2>
                        <p className="text-text-secondary text-sm md:text-base mb-8 max-w-2xl mx-auto">
                            Download our comprehensive brochure to learn more about our services and how we can help your business thrive.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://vaiga-xi.vercel.app/assets/VaigaConsultanyServices.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                            >
                                <Download size={18} />
                                Download Brochure
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                            >
                                Get in Touch
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
