"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    FileText,
    Calculator,
    MonitorSmartphone,
    ArrowRight,
    Building2,
    Cpu,
    Car,
    Hotel,
    Pill,
    HardHat,
    Truck,
    Factory,
    Landmark,
    Globe,
    MapPin,
    Users,
    Briefcase,
    CheckCircle2,
    Award,
    Calendar,
    Clock,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { blogs } from "@/data/blogs";
import { useCountry, Country } from "@/context/CountryContext";
import ClientsSection from "@/components/ClientsSection";
import { useEffect } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const services = [
    {
        icon: ShieldCheck,
        title: "Audit & Assurance",
        description:
            "IFRS Consulting, Internal Audit, Financial Audit, and Risk Assurance to safeguard your business.",
        items: ["Internal Audit", "Financial Audit", "IFRS Consulting", "Risk Assurance"],
    },
    {
        icon: FileText,
        title: "Tax & Regulatory",
        description:
            "Comprehensive tax consultancy, GCC VAT, and regulatory compliance across India, UAE & Qatar.",
        items: ["Tax Consultancy", "GCC VAT", "Tax Filing", "Tax Strategy"],
    },
    {
        icon: Calculator,
        title: "Accounting Services",
        description:
            "Full-spectrum outsourced accounting and bookkeeping tailored to your business needs.",
        items: ["Bookkeeping", "Financial Reports", "Bank Reconciliation", "Payroll"],
    },
    {
        icon: MonitorSmartphone,
        title: "Software Solutions",
        description:
            "Implementation and training for Tally Prime, Zoho Books, and Odoo accounting platforms.",
        items: ["Tally Prime", "Zoho Books", "Odoo", "Migration"],
    },
];

const industries = [
    { icon: Landmark, name: "Financial Services" },
    { icon: Cpu, name: "Technology" },
    { icon: Car, name: "Automotive" },
    { icon: Hotel, name: "Hospitality" },
    { icon: Pill, name: "Pharma & Life Sciences" },
    { icon: Building2, name: "Real Estate" },
    { icon: HardHat, name: "Engineering" },
    { icon: Truck, name: "Transport & Logistics" },
    { icon: Factory, name: "Manufacturing" },
];

const stats = [
    { end: 2000, suffix: "+", label: "Happy Clients" },
    { end: 500, suffix: "+", label: "Projects Finished" },
    { end: 50, suffix: "+", label: "Professionals" },
    { end: 3, suffix: "", label: "Countries" },
];

const testimonials = [
    {
        name: "Mohammed Al Rashid",
        role: "CEO",
        company: "Gulf Trading Co.",
        text: "Vaiga's tax advisory services have been invaluable for our business operations across the GCC. Their knowledge of VAT regulations is unmatched.",
        location: "Dubai, UAE",
        rating: 5,
    },
    {
        name: "Priya Menon",
        role: "Managing Director",
        company: "TechVentures India",
        text: "Working with Vaiga for our internal audit has brought exceptional transparency and compliance to our operations. Highly professional team.",
        location: "Kerala, India",
        rating: 5,
    },
    {
        name: "Ahmad Hassan",
        role: "Finance Director",
        company: "Doha Construction Group",
        text: "Their accounting software implementation was seamless. The Zoho Books setup and team training transformed how we manage our finances.",
        location: "Doha, Qatar",
        rating: 5,
    },
    {
        name: "Sarah Williams",
        role: "CFO",
        company: "Horizon Logistics",
        text: "Vaiga's expertise in international taxation helped us navigate complex cross-border regulations with ease. A truly reliable partner.",
        location: "Dubai, UAE",
        rating: 5,
    },
    {
        name: "Rajesh Kumar",
        role: "Partner",
        company: "Kumar & Associates",
        text: "Exceptional quality in statutory audit services. Their attention to detail and regulatory knowledge is remarkable. They deliver on time, every time.",
        location: "Malappuram, India",
        rating: 5,
    },
    {
        name: "Fatima Al Sulaiti",
        role: "Operations Head",
        company: "Al Sulaiti Holdings",
        text: "From business registration to ongoing compliance, Vaiga handled everything professionally. Their management consultancy insights have been game-changing.",
        location: "Doha, Qatar",
        rating: 5,
    },
];

const faqItems = [
    {
        question: "What services does Vaiga Consultancy provide?",
        answer:
            "We offer a comprehensive range of services including Internal & Statutory Audits, Tax Advisory & Filing, GCC VAT Consultancy, Accounting & Bookkeeping, Management Consultancy, Business Valuation, Secretarial Compliance, Trade Mark Consultancy, and Accounting Software Implementation.",
    },
    {
        question: "In which countries does Vaiga operate?",
        answer:
            "We have offices in three countries — India (Malappuram, Kerala), UAE (Dubai), and Qatar (Doha). We serve clients globally from these locations, offering both on-site and remote consulting services.",
    },
    {
        question: "How can Vaiga help with VAT compliance in the GCC?",
        answer:
            "Our GCC VAT Consultancy services cover VAT registration, return filing, compliance reviews, and strategic planning to ensure your business meets all VAT obligations across the Gulf Cooperation Council countries.",
    },
    {
        question: "What accounting software does Vaiga implement?",
        answer:
            "We specialize in implementing Tally Prime, Zoho Books, and Odoo. Our services include full setup, data migration from legacy systems, customization, and comprehensive team training.",
    },
    {
        question: "How long has Vaiga been in business?",
        answer:
            "Vaiga Consultancy Services was established in 2011. With over 13 years of experience, we have served more than 2000 clients across multiple industries and three countries.",
    },
    {
        question: "How do I get started with Vaiga Consultancy?",
        answer:
            "Simply reach out to us via our contact page, email us at services@vaiga.org, or call any of our offices. We offer a free initial consultation to understand your business requirements and propose tailored solutions.",
    },
];

interface HomePageClientProps {
    forcedCountry?: Country;
}

export default function HomePageClient({ forcedCountry }: HomePageClientProps) {
    const { country, setCountry } = useCountry();
    const effectiveCountry = forcedCountry || country;

    // Sync state if forcedCountry is provided (for regional routes)
    useEffect(() => {
        if (forcedCountry && forcedCountry !== country) {
            setCountry(forcedCountry);
        }
    }, [forcedCountry, country, setCountry]);

    const heroContent = {
        Global: {
            title: "Unlock Your Business's Full Potential",
            desc: "Professional auditing, tax advisory, and financial consulting across India, UAE & Qatar. We help businesses navigate complexities with integrity and expertise.",
        },
        India: {
            title: "Elevate Your Business in India",
            desc: "Expert internal & statutory audit, tax consultancy, and financial advisory tailored for the Indian market from our Kerala base.",
        },
        UAE: {
            title: "Scale Your Business in UAE",
            desc: "Specialized GCC VAT consultancy, audit services, and management consulting to help your business thrive in the Emirates.",
        },
        Qatar: {
            title: "Empower Your Business in Qatar",
            desc: "Comprehensive auditing, accounting software implementation, and tax advisory for businesses across Doha and beyond.",
        },
    };

    const currentHero = heroContent[effectiveCountry];

    const filteredTestimonials = testimonials.filter(t =>
        effectiveCountry === "Global" || t.location.includes(effectiveCountry)
    );

    const filteredStats = effectiveCountry === "Global" ? stats : stats.map(s => {
        if (s.label === "Countries") return { ...s, end: 1, label: "Country Focus" };
        return s;
    });

    const filteredOffices = [
        {
            country: "India",
            city: "Malappuram, Kerala",
            address: "Vaiga Bhawan, Tirur Road, Puthanathani",
            phone: "+91 89432 02011",
            services: "Audit, Tax, Compliance, Bookkeeping",
            href: "/services/india",
        },
        {
            country: "UAE",
            city: "Dubai",
            address: "M16, RKM Building, Near Al Qiyadah Metro",
            phone: "+971 52 390 2880",
            services: "Audit, VAT, Tax Filing, Consultancy",
            href: "/services/uae",
        },
        {
            country: "Qatar",
            city: "Doha",
            address: "Office 6, 2nd Floor, Building No. 67, Opposite Liverpool John Moores University | Oryx University Doha, Qatar",
            phone: "+974 66437523",
            services: "Audit, Accounting, Software, Consultancy",
            href: "/services/qatar",
        },
    ].filter(o => effectiveCountry === "Global" || o.country === effectiveCountry);

    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary/15">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white" />
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`, backgroundSize: '64px 64px' }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-12 pb-12 text-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10 backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary-800 text-[10px] font-bold uppercase tracking-[0.25em]">
                                {effectiveCountry === "Global" ? "Global Consultancy Excellence" : `${effectiveCountry} Operations`}
                            </span>
                        </motion.div>

                        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 tracking-tight leading-[1.15]">
                            {currentHero.title.split(' ').slice(0, -2).join(' ')}{" "}
                            <span className="inline-block relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-800">
                                    {currentHero.title.split(' ').slice(-2).join(' ')}
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="absolute -bottom-2 left-0 h-1 bg-primary/20 rounded-full"
                                />
                            </span>
                        </h1>

                        <p className="text-text-secondary/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14 font-medium">
                            {currentHero.desc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="group relative w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                Start Your Journey
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/about"
                                className="w-full sm:w-auto px-7 py-3.5 bg-white/80 hover:bg-white text-text-primary border border-primary/10 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md backdrop-blur-sm"
                            >
                                Learn Our Story
                            </Link>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-14 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <span className="text-xs font-bold tracking-widest text-navy uppercase">Trusted by 2000+ Businesses</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <section id="services" className="py-20 md:py-28 bg-surface-secondary">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            What We Offer
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                            Our Core Services
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
                            {effectiveCountry === "Global"
                                ? "Comprehensive financial and consultancy solutions tailored to empower businesses across India, UAE, and Qatar."
                                : `Comprehensive financial and consultancy solutions tailored to empower businesses in ${effectiveCountry}.`}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 md:p-7 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon
                                        size={26}
                                        className="text-primary group-hover:text-white transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="font-[var(--font-heading)] font-bold text-lg text-text-primary mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 text-text-muted text-xs"
                                        >
                                            <CheckCircle2 size={14} className="text-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeInUp} className="text-center mt-12">
                        <Link
                            href={effectiveCountry === "Global" ? "/services" : `/services/${effectiveCountry.toLowerCase()}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                        >
                            Explore All {effectiveCountry === "Global" ? "" : effectiveCountry} Services
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -ml-96" />
                <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {filteredStats.map((stat) => (
                            <AnimatedCounter key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </section>

            <ClientsSection />

            {/* ===== INDUSTRIES SECTION ===== */}
            <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Industries
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                            Deep expertise across diverse sectors, providing specialized consultancy solutions for every industry.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 hover:bg-white/10 transition-all duration-300 group cursor-default hover:border-primary/30"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                                    <industry.icon
                                        size={24}
                                        className="text-primary group-hover:scale-110 transition-transform"
                                    />
                                </div>
                                <span className="text-white/90 text-sm md:text-base font-bold tracking-tight group-hover:text-white transition-colors leading-tight">
                                    {industry.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== GLOBAL PRESENCE SECTION ===== */}
            <section className="py-20 md:py-28 bg-surface-secondary">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            {effectiveCountry === "Global" ? "Global Reach" : `${effectiveCountry} Focus`}
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                            {effectiveCountry === "Global" ? "Our Global Presence" : `Our Presence in ${effectiveCountry}`}
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
                            {effectiveCountry === "Global"
                                ? "Strategically located across three countries to serve your business wherever you operate."
                                : `Strategically located in ${effectiveCountry} to provide specialized local expertise with global standards.`}
                        </p>
                    </motion.div>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${filteredOffices.length === 1 ? 'flex justify-center md:flex' : ''}`}>
                        {filteredOffices.map((office, index) => (
                            <motion.div
                                key={office.country}
                                className={filteredOffices.length === 1 ? 'max-w-md w-full mx-auto md:mx-0' : ''}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={office.href}
                                    className="block bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group h-full"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-[var(--font-heading)] font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                                                {office.country}
                                            </h3>
                                            <p className="text-primary text-sm font-medium">
                                                {office.city}
                                            </p>
                                        </div>
                                        <MapPin size={20} className="text-primary" />
                                    </div>
                                    <p className="text-text-secondary text-sm mb-3 line-clamp-1">
                                        {office.address}
                                    </p>
                                    <p className="text-text-muted text-xs mb-4">
                                        {office.services}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                                        View Services <ArrowRight size={14} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Client Testimonials
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">
                            {effectiveCountry === "Global"
                                ? "Hear from businesses across India, UAE, and Qatar who trust Vaiga for their financial and advisory needs."
                                : `Hear from businesses in ${effectiveCountry} who trust Vaiga for their financial and advisory needs.`}
                        </p>
                    </motion.div>

                    <Testimonials items={filteredTestimonials} />
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="py-20 md:py-28 bg-surface-secondary">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <motion.div {...fadeInUp}>
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                                FAQ
                            </span>
                            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-text-secondary text-sm md:text-base mb-6">
                                Find answers to common questions about our services, operations, and how we can help your business grow.
                            </p>
                            <div className="bg-primary-50 rounded-xl p-5 border border-primary/10">
                                <p className="text-sm text-text-primary font-medium mb-1">
                                    Still have questions?
                                </p>
                                <p className="text-xs text-text-secondary mb-3">
                                    Our team is happy to assist you with any inquiries.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                                >
                                    Contact Us <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>

                        <div>
                            <FAQ items={faqItems} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US & PARTNERS SECTION ===== */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-primary/3 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div {...fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border border-primary/10">
                                <ShieldCheck size={14} />
                                The Vaiga Advantage
                            </div>
                            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-navy mb-8 tracking-tight leading-[1.1]">
                                Your Strategic Partner for <br />
                                <span className="text-primary-dark">Global Growth.</span>
                            </h2>
                            <p className="text-text-secondary/70 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                                At Vaiga Consultancy, we bridge the gap between traditional professional services and
                                modern digital implementation. Our 13+ years of expertise ensures your business
                                remains compliant and competitive.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h4 className="text-navy text-2xl font-bold mb-1">13+</h4>
                                    <p className="text-text-secondary/60 text-xs font-bold uppercase tracking-widest">Years of Trust</p>
                                </div>
                                <div>
                                    <h4 className="text-navy text-2xl font-bold mb-1">2000+</h4>
                                    <p className="text-text-secondary/60 text-xs font-bold uppercase tracking-widest">Success Stories</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid gap-6">
                            <div className="grid sm:grid-cols-2 gap-6 mb-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-7 rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 group transition-all duration-300"
                                >
                                    <div className="w-32 h-20 rounded-2xl bg-white border border-primary/10 flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform overflow-hidden p-2">
                                        <Image
                                            src="/zoho_logo.png"
                                            alt="Zoho Partner"
                                            width={100}
                                            height={100}
                                            className="object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg text-navy mb-2">Zoho Partner</h3>
                                    <p className="text-text-secondary/60 text-xs leading-relaxed font-medium mb-4">
                                        Official Authorised Partner for global cloud accounting implementation.
                                    </p>
                                    <span className="text-primary text-[10px] font-black uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                        Implementation
                                    </span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -5 }}
                                    transition={{ delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-7 rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 group transition-all duration-300"
                                >
                                    <div className="w-32 h-20 rounded-2xl bg-white border border-navy/10 flex items-center justify-center mb-6 shadow-sm group-hover:-rotate-6 transition-transform overflow-hidden p-2">
                                        <Image
                                            src="/tally_logo.webp"
                                            alt="Tally Partner"
                                            width={100}
                                            height={100}
                                            className="object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg text-navy mb-2">Tally Partner</h3>
                                    <p className="text-text-secondary/60 text-xs leading-relaxed font-medium mb-4">
                                        Authorized Partner for Tally.ERP9 and TallyPrime solutions.
                                    </p>
                                    <span className="text-navy text-[10px] font-black uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full border border-navy/10">
                                        Expert Solutions
                                    </span>
                                </motion.div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Users, title: "Elite Team", desc: "Senior global specialists." },
                                    {
                                        icon: Globe,
                                        title: effectiveCountry === "Global" ? "Global Reach" : `${effectiveCountry} Reach`,
                                        desc: effectiveCountry === "Global" ? "India, UAE, Qatar presence." : `Strategic ${effectiveCountry} presence.`
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-primary-50/30 p-6 rounded-[1.75rem] border border-primary/5 flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy text-sm mb-1">{item.title}</h4>
                                            <p className="text-text-secondary/70 text-[11px] leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <motion.div {...fadeInUp} className="max-w-2xl">
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                                Knowledge Hub
                            </span>
                            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                                Latest Insights & <span className="gradient-text">Updates</span>
                            </h2>
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                Stay informed with professional analysis on the latest auditing standards,
                                tax regulations, and business trends in the GCC.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                            >
                                View All Articles
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogs.slice(0, 3).map((blog, index) => (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col"
                            >
                                <Link href={`/blog/${blog.slug}`} className="relative h-64 rounded-3xl overflow-hidden mb-6 block border border-border">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-primary text-xs font-bold">
                                            {blog.category}
                                        </span>
                                    </div>
                                </Link>
                                <div className="flex items-center gap-4 text-xs text-text-muted mb-3 font-semibold uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-primary" />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-primary" />
                                        {blog.readingTime} read
                                    </span>
                                </div>
                                <h3 className="font-[var(--font-heading)] text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="mt-auto text-primary font-bold text-sm flex items-center gap-1 group/link"
                                >
                                    Read Post
                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
