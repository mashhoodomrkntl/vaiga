"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
}

export function AnimatedCounter({ end, suffix = "+", label }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true);
            let startTimestamp: number | null = null;
            const duration = 2000;

            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Ease out cubic
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                
                setCount(Math.floor(easedProgress * end));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, end, hasStarted]);

    return (
        <div ref={ref} className="text-center">
            <motion.span
                className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-primary block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {count}
                {suffix}
            </motion.span>
            <span className="text-text-secondary text-sm mt-2 block font-medium">{label}</span>
        </div>
    );
}

