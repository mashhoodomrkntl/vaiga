"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const blog = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
                {/* Back Button */}
                <motion.div {...fadeInUp} className="mb-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </motion.div>

                {/* Post Header */}
                <article>
                    <motion.div {...fadeInUp} className="mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            {blog.category}
                        </span>
                        <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-[1.2]">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary">
                                    <User size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-primary leading-none mb-1">{blog.author.name}</p>
                                    <p className="text-xs text-text-muted">{blog.author.role}</p>
                                </div>
                            </div>
                            <div className="h-10 w-px bg-border hidden sm:block"></div>
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Calendar size={18} className="text-primary" />
                                    <span className="text-sm font-medium">{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Clock size={18} className="text-primary" />
                                    <span className="text-sm font-medium">{blog.readingTime} read</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Post Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Post Content */}
                    <motion.div
                        {...fadeInUp}
                        className="prose prose-lg max-w-none prose-headings:font-[var(--font-heading)] prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-li:text-text-secondary prose-primary"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Tags */}
                    <motion.div {...fadeInUp} className="mt-12 pt-10 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-surface-secondary text-text-muted text-sm rounded-xl border border-border"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Related Service Connection */}
                    {blog.relatedService && (
                        <motion.div {...fadeInUp} className="mt-12 p-8 rounded-3xl bg-primary-50 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="font-bold text-text-primary mb-1 text-lg">Related Service</h4>
                                <p className="text-text-secondary text-sm">Need help with {blog.relatedService.name}?</p>
                            </div>
                            <Link
                                href={blog.relatedService.href}
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                            >
                                Learn More
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    )}

                    {/* Shared Section */}
                    <motion.div {...fadeInUp} className="mt-8 bg-surface-secondary p-8 rounded-3xl border border-border flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="font-bold text-text-primary mb-1">Found this helpful?</h4>
                            <p className="text-text-muted text-sm">Share this expert insight with your network.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-[#1877F2] hover:bg-primary-50 transition-colors">
                                <Facebook size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-[#1DA1F2] hover:bg-primary-50 transition-colors">
                                <Twitter size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-[#0A66C2] hover:bg-primary-50 transition-colors">
                                <Linkedin size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary hover:bg-primary-50 transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </motion.div>
                </article>
            </div>
        </div>
    );
}
