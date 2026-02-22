"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useCountry } from "@/context/CountryContext";

// Authentic client logo data
const clients = [
    { name: "Client seashore residency", logo: "/clients/1.jpg" },
    { name: "Client silver storm", logo: "/clients/2.jpg" },
    { name: "Client snow storm", logo: "/clients/3.jpg" },
    { name: "Client marc", logo: "/clients/4.jpg" },
    { name: "Client noble international school", logo: "/clients/5.jpg" },
    { name: "Client group 10 holding llc", logo: "/clients/6.jpg" },
    { name: "Client malabar silks", logo: "/clients/7.jpg" },
    { name: "Client silvan tiles gallery", logo: "/clients/8.jpg" },
    { name: "Client giffex", logo: "/clients/9.jpg" },
    { name: "Client baby vita", logo: "/clients/10.jpg" },
    { name: "Client lamiya silks", logo: "/clients/11.jpg" },
    { name: "Client little bee", logo: "/clients/12.jpg" },
    { name: "Client chazias", logo: "/clients/13.jpg" },
    { name: "Client smlash ispat", logo: "/clients/14.jpg" },
    { name: "Client dsp", logo: "/clients/15.jpg" },
    { name: "Client canara bank", logo: "/clients/16.jpg" },
    { name: "Client emirates mall", logo: "/clients/17.jpg" },
    { name: "Client raaha eats", logo: "/clients/18.jpg" },
    { name: "Client ap group", logo: "/clients/19.jpg" },
    { name: "Client kottakkal farook arts and science college", logo: "/clients/20.jpg" },
    { name: "Client banwet", logo: "/clients/21.jpg" },
    { name: "Client eminence", logo: "/clients/22.jpg" },
    { name: "Client malcotex", logo: "/clients/23.jpg" },
    { name: "Client asarva tiles", logo: "/clients/24.jpg" },
    { name: "Client sea", logo: "/clients/25.jpg" },
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function ClientsSection() {
    const { country } = useCountry();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Duplicate clients for a seamless infinite loop
    const displayClients = [...clients, ...clients];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationId: number;
        let isPaused = false;

        const scroll = () => {
            if (!isPaused && container) {
                container.scrollLeft += 0.5; // Very slow crawl

                // If we've scrolled past the first set of items, reset for seamless loop
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        const handleMouseEnter = () => { isPaused = true; };
        const handleMouseLeave = () => { isPaused = false; };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        animationId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <motion.div {...fadeInUp} className="max-w-2xl">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                            Trusted Partners
                        </span>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-text-secondary text-sm md:text-base">
                            {country === "Global"
                                ? "Partnering with forward-thinking organizations globally."
                                : `Partnering with forward-thinking organizations in ${country}.`}
                        </p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayClients.map((client, index) => (
                        <motion.div
                            key={`${client.name}-${index}`}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex-shrink-0 w-[180px] md:w-[220px] flex items-center justify-center p-5 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default h-32"
                        >
                            <div className="relative w-full h-full transition-all duration-500 p-2">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center text-text-muted text-sm mt-4 font-medium"
                >
                    {country === "Global"
                        ? "...and 2000+ more satisfied clients worldwide"
                        : `...and hundreds more satisfied clients in ${country}`}
                </motion.p>
            </div>
        </section>
    );
}
