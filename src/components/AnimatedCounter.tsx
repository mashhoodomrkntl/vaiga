"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
}

export function AnimatedCounter({ end, suffix = "+", label }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2000;
                    const steps = 60;
                    const increment = end / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, hasAnimated]);

    return (
        <div ref={ref} className="text-center">
            <motion.span
                className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-primary block"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {count}
                {suffix}
            </motion.span>
            <span className="text-text-secondary text-sm mt-2 block">{label}</span>
        </div>
    );
}
