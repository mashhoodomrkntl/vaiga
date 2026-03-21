import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[90px]" />
                <div className="absolute bottom-[0%] left-[-5%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative text-center px-6 py-20 max-w-2xl mx-auto">
                <h1 className="font-[var(--font-heading)] text-8xl md:text-9xl font-bold text-primary/20 mb-4 leading-none">
                    404
                </h1>
                <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-text-primary mb-4">
                    Page Not Found
                </h2>
                <p className="text-text-secondary text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    The page you're looking for doesn't exist or has been moved. Let us help you find your way.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
