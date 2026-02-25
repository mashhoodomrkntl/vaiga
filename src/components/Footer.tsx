"use client";
import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
    Building2,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";
import { useCountry, Country } from "@/context/CountryContext";

const getQuickLinks = (country: Country) => {
    const homeHref = country === "Global" ? "/" : `/${country.toLowerCase()}`;
    return [
        { label: "Home", href: homeHref },
        { label: "About Us", href: "/about" },
        { label: "Services — India", href: "/services/india" },
        { label: "Services — UAE", href: "/services/uae" },
        { label: "Services — Qatar", href: "/services/qatar" },
        { label: "Contact Us", href: "/contact" },
    ];
};

const services = [
    "Audit & Assurance",
    "Tax Advisory",
    "Accounting & Bookkeeping",
    "Management Consultancy",
    "GCC VAT Consultancy",
    "Business Valuation",
];

const offices = [
    {
        country: "India",
        address: "Vaiga Bhawan, Tirur Road, Puthanathani, Malappuram, Kerala 676551",
        phone: "+91 89432 02011",
        email: "services@vaiga.org",
    },
    {
        country: "UAE",
        address: "M16, RKM Building, Near Al Qiyadah Metro Station, Dubai",
        phone: "+971 52 390 2880",
        email: "services@vaiga.org",
    },
    {
        country: "Qatar",
        address: "Office 6, 2nd Floor, Building No. 67, Opposite Liverpool John Moores University | Oryx University Doha Qatar",
        phone: "+974 66437523",
        email: "audit@vaiga.org",
    },
];

export default function Footer() {
    const { country } = useCountry();

    const filteredOffices = offices.filter(o => country === "Global" || o.country === country);
    const homeHref = country === "Global" ? "/" : `/${country.toLowerCase()}`;
    const dynamicQuickLinks = getQuickLinks(country);

    return (
        <footer className="bg-dark text-white relative overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* CTA Banner */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
                    <div className="bg-gradient-to-br from-primary via-primary-600 to-primary-700 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20 bg-[length:200%_200%] animate-gradient-slow transition-all duration-700">
                        <div className="max-w-xl text-center md:text-left">
                            <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                                Ready to Elevate Your Business?
                            </h3>
                            <p className="text-white/80 mt-4 text-base md:text-lg font-medium">
                                {country === "Global"
                                    ? "Join 2000+ businesses globally who trust Vaiga for high-end consultancy and auditing excellence."
                                    : `Join hundreds of businesses in ${country} who trust Vaiga for high-end consultancy and auditing excellence.`}
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="group flex items-center gap-3 bg-white text-primary px-10 py-4.5 rounded-2xl font-bold text-sm hover:bg-white transition-all whitespace-nowrap shadow-xl hover:-translate-y-1 hover:shadow-2xl"
                        >
                            Get Started
                            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href={homeHref} className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/vaiga_logo.png"
                                    alt="Vaiga Consultancy Logo"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {country === "Global"
                                ? "Professional auditing, tax advisory, and financial consulting since 2011. Trusted by businesses across India, UAE, and Qatar."
                                : `Professional auditing, tax advisory, and financial consulting in ${country} since 2011.`}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/40 mb-6">
                            <Building2 size={14} />
                            <span>Established 2011</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.facebook.com/vaigaconsultancy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300 pointer-events-auto"
                                aria-label="Vaiga Facebook"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href="https://www.instagram.com/vaiga_consultancyservices/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300 pointer-events-auto"
                                aria-label="Vaiga Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href={country === "Qatar"
                                    ? "https://www.linkedin.com/company/vaiga-consultancy-services-qatar/posts/?feedView=all"
                                    : "https://www.linkedin.com/company/vaiga-consultancy-services/posts/?feedView=all"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300 pointer-events-auto"
                                aria-label="Vaiga LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-[var(--font-heading)] font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {dynamicQuickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-[var(--font-heading)] font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-white/60 text-sm flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Offices */}
                    <div>
                        <h4 className="font-[var(--font-heading)] font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Our Offices
                        </h4>
                        <div className="space-y-5">
                            {filteredOffices.map((office) => (
                                <div key={office.country}>
                                    <h5 className="text-primary font-semibold text-sm mb-1.5">
                                        {office.country}
                                    </h5>
                                    <div className="space-y-1.5">
                                        <p className="text-white/50 text-xs flex items-start gap-1.5">
                                            <MapPin size={12} className="mt-0.5 shrink-0" />
                                            {office.address}
                                        </p>
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                                            className="text-white/50 hover:text-primary text-xs flex items-center gap-1.5 transition-colors"
                                        >
                                            <Phone size={12} className="shrink-0" />
                                            {office.phone}
                                        </a>
                                        <a
                                            href={`mailto:${office.email}`}
                                            className="text-white/50 hover:text-primary text-xs flex items-center gap-1.5 transition-colors"
                                        >
                                            <Mail size={12} className="shrink-0" />
                                            {office.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Vaiga Consultancy Services (P) Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
