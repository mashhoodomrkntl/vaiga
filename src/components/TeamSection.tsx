"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCountry } from "@/context/CountryContext";
import { teamMembers } from "@/data/team";
import { User } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function TeamSection() {
    const { country } = useCountry();

    const filteredTeam = teamMembers.filter((member) => {
        if (country === "Global") {
            return member.isGlobal;
        }
        return member.country === country;
    });

    return (
        <section className="py-24 px-6 sm:px-10 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        Our Experts
                    </span>
                    <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                        {country === "Global" ? "Global Leadership" : `Team in ${country}`}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                        Meet the senior professionals driving excellence and delivering specialized
                        solutions across our {country === "Global" ? "global network" : `${country} operations`}.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredTeam.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col bg-surface-secondary rounded-xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-2">
                                        {member.specialization?.slice(0, 2).map((spec) => (
                                            <span key={spec} className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold rounded-lg border border-white/10">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User size={16} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                        {member.country}
                                    </span>
                                </div>
                                <h3 className="font-[var(--font-heading)] text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-text-secondary text-sm font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredTeam.length === 0 && (
                    <div className="text-center py-20 bg-surface-secondary rounded-[2rem] border border-dashed border-border">
                        <p className="text-text-secondary">No team members listed for this region yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
