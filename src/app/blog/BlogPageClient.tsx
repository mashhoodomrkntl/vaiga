"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, User } from "lucide-react";
import { blogs } from "@/data/blogs";

const categories = ["All", "Audit", "Tax", "Zoho", "Consultancy", "Business"];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function BlogPageClient() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <section className="relative px-6 sm:px-10 lg:px-12 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                            Insights & Expertise
                        </span>
                        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                            Our Latest <span className="gradient-text">Perspectives</span>
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Expert analysis and updates on tax regulations, auditing standards,
                            and digital transformation for global businesses.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="px-6 sm:px-10 lg:px-12 mb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-surface-secondary p-4 rounded-2xl border border-border">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat
                                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                                            : "bg-white text-text-secondary hover:bg-primary-50 hover:text-primary border border-border"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="px-6 sm:px-10 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col bg-white rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                                >
                                    <Link href={`/blog/${blog.slug}`} className="relative h-60 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-primary text-xs font-bold shadow-sm">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </Link>

                                    <div className="p-7 flex flex-col flex-grow">
                                        <div className="flex flex-wrap gap-4 text-xs text-text-muted mb-4 uppercase tracking-wider font-semibold">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-primary" />
                                                {blog.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={14} className="text-primary" />
                                                {blog.readingTime} read
                                            </span>
                                        </div>

                                        <h2 className="font-[var(--font-heading)] text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h2>

                                        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                                            {blog.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary">
                                                    <User size={16} />
                                                </div>
                                                <span className="text-xs font-medium text-text-primary">{blog.author.name}</span>
                                            </div>
                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                            >
                                                Read More <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-text-primary mb-2">No articles found</h3>
                            <p className="text-text-secondary">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
