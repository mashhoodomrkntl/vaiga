import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import BlogPostContent from "./BlogPostContent";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!blog) {
        return { title: "Blog Post Not Found" };
    }

    return {
        title: `${blog.title} | Vaiga Consultancy Blog`,
        description: blog.excerpt,
        keywords: blog.tags,
        authors: [{ name: blog.author.name }],
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author.name],
            images: [blog.image],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.excerpt,
        },
        alternates: {
            canonical: `https://vaiga-xi.vercel.app/blog/${resolvedParams.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    // Pass blog to client component for rendering
    // Content sanitization happens client-side via isomorphic-dompurify
    return <BlogPostContent blog={blog} sanitizedContent={blog.content} />;
}
