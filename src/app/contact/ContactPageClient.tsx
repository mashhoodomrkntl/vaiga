"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
} from "lucide-react";
import { useCountry } from "@/context/CountryContext";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const offices = [
    {
        country: "India",
        city: "Malappuram, Kerala",
        address: "Vaiga Bhawan, Tirur Road, Puthanathani, Malappuram, Kerala 676551, India",
        phone: "+91 89432 02011",
        email: "services@vaiga.org",
        hours: "Mon – Sat: 10:00 AM – 5:00 PM",
        mapUrl: "https://www.google.com/maps?q=Vaiga+Bhawan+Puthanathani+Malappuram+Kerala",
        whatsapp: "918943202011",
    },
    {
        country: "UAE",
        city: "Dubai",
        address: "M16, RKM Building, Near Al Qiyadah Metro Station, Dubai, UAE",
        phone: "+971 52 390 2880",
        email: "services@vaiga.org",
        hours: "Sun – Thu: 9:00 AM – 6:00 PM",
        mapUrl: "https://www.google.com/maps?q=RKM+Building+Al+Qiyadah+Metro+Station+Dubai",
        whatsapp: "971523902880",
    },
    {
        country: "Qatar",
        city: "Doha",
        address: "Office 6, 2nd Floor, Building No. 67, Opposite Liverpool John Moores University | Oryx University Doha, Qatar",
        phone: "+974 66437523",
        email: "audit@vaiga.org",
        hours: "Sun – Thu: 8:00 AM – 5:00 PM",
        mapUrl: "https://www.google.com/maps?q=Barwa+Commercial+Avenue+Doha+Qatar",
        whatsapp: "97466437523",
    },
];

export default function ContactPageClient() {
    const { country } = useCountry();

    const filteredOffices = offices.filter(office =>
        country === "Global" || office.country === country
    );

    const contactHeroContent = {
        Global: "Have questions? We'd love to hear from you. Reach out to any of our offices across India, UAE, or Qatar.",
        India: "Reach out to our India headquarters in Kerala for expert audits, tax consultancy, and financial advisory services.",
        UAE: "Contact our Dubai office for specialized GCC VAT consultancy, audit services, and management consulting.",
        Qatar: "Get in touch with our Doha team for auditing, accounting software implementation, and tax advisory services.",
    };

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
                                Connect With Us
                            </span>
                        </motion.div>

                        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight leading-[1.2]">
                            Get in{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-700 to-primary-900">
                                    Touch
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
                            {contactHeroContent[country]}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Office Cards */}
            <section className="py-20 md:py-28 bg-surface-secondary">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <motion.div {...fadeInUp} className="text-center mb-14">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Our Offices
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary">
                            {country === "Global" ? "Visit Us Worldwide" : `Visit Our Office in ${country}`}
                        </h2>
                    </motion.div>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${filteredOffices.length === 1 ? 'flex justify-center md:flex' : ''}`}>
                        {filteredOffices.map((office, index) => (
                            <motion.div
                                key={office.country}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ${filteredOffices.length === 1 ? 'max-w-md w-full' : ''}`}
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                                        <MapPin size={22} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-[var(--font-heading)] font-bold text-xl text-text-primary">
                                            {office.country}
                                        </h3>
                                        <p className="text-primary text-sm font-medium">
                                            {office.city}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={16} className="text-text-muted shrink-0 mt-0.5" />
                                        <p className="text-text-secondary text-sm">{office.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-text-muted shrink-0" />
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                                            className="text-text-secondary text-sm hover:text-primary transition-colors"
                                        >
                                            {office.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail size={16} className="text-text-muted shrink-0" />
                                        <a
                                            href={`mailto:${office.email}`}
                                            className="text-text-secondary text-sm hover:text-primary transition-colors"
                                        >
                                            {office.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={16} className="text-text-muted shrink-0" />
                                        <p className="text-text-secondary text-sm">{office.hours}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-6 pt-5 border-t border-border">
                                    <a
                                        href={office.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-primary-50 text-primary px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-all"
                                    >
                                        <MapPin size={14} />
                                        Directions
                                    </a>
                                    <a
                                        href={`https://wa.me/${office.whatsapp}?text=Hello%20Vaiga%20Consultancy%2C%20I%27m%20reaching%20out%20from%20your%20website%20with%20an%20enquiry.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#25D366] hover:text-white transition-all"
                                    >
                                        <MessageCircle size={14} />
                                        WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <motion.div {...fadeInUp}>
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                                Send a Message
                            </span>
                            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
                                Have Questions? Get in Touch!
                            </h2>
                            <p className="text-text-secondary text-sm md:text-base mb-8 leading-relaxed">
                                Fill out the form below and our team will get back to you within 24 hours. You can also reach us directly via phone or email at any of our offices.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary/10">
                                    <Mail size={20} className="text-primary shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-text-primary">Email Us</p>
                                        <a href="mailto:services@vaiga.org" className="text-primary text-sm">
                                            services@vaiga.org
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary/10">
                                    <Phone size={20} className="text-primary shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-text-primary">Call Us</p>
                                        <a href="tel:+918943202011" className="text-primary text-sm">
                                            +91 89432 02011
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form className="bg-surface-secondary rounded-2xl p-6 md:p-8 border border-border">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-text-primary mb-1.5"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-text-primary mb-1.5"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-text-primary mb-1.5"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-text-primary mb-1.5"
                                        >
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="audit">Audit & Assurance</option>
                                            <option value="tax">Tax Advisory</option>
                                            <option value="accounting">Accounting Services</option>
                                            <option value="vat">GCC VAT Consultancy</option>
                                            <option value="management">Management Consultancy</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-text-primary mb-1.5"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                                >
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
