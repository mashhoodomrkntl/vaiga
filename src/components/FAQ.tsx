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

export default function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
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
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
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
        </div>
    );
}
