"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}


const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    viewport: { once: true, margin: "-50px" },
};

const staggerItem = {
    initial: { opacity: 0, y: 15 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
};

export default function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="space-y-3"
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={staggerItem}
                    className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left group"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-[var(--font-heading)] font-semibold text-sm md:text-base text-text-primary group-hover:text-primary transition-colors pr-4">
                            {item.question}
                        </span>
                        <ChevronDown
                            size={18}
                            className={`text-text-muted shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""
                                }`}
                        />
                    </button>
                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="px-5 pb-4 md:px-6 md:pb-5 text-text-secondary text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </motion.div>
    );
}

