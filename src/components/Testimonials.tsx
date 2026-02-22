"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialItem {
    name: string;
    role: string;
    company: string;
    text: string;
    location: string;
    rating?: number;
}

interface TestimonialsProps {
    items: TestimonialItem[];
}

export default function Testimonials({ items }: TestimonialsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Adjust scroll amount based on card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative">
            {/* Scroll Buttons - Positioned top right or can be integrated into section header in parent */}
            <div className="flex justify-end gap-3 mb-6">
                <button
                    onClick={() => scroll("left")}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 bg-white"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 bg-white"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-[85vw] md:w-[400px] relative bg-white border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group snap-center flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-5">
                                {/* Quote icon */}
                                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Quote size={18} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                {/* Star Rating */}
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${i < (item.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial text */}
                            <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                &ldquo;{item.text}&rdquo;
                            </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm shrink-0">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-[var(--font-heading)] font-semibold text-sm text-text-primary line-clamp-1">
                                    {item.name}
                                </p>
                                <p className="text-xs text-text-muted line-clamp-1">
                                    {item.role}, {item.company}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
