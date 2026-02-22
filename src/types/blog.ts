export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: "Audit" | "Tax" | "Zoho" | "Consultancy" | "Business";
    author: {
        name: string;
        role: string;
        image?: string;
    };
    date: string;
    readingTime: string;
    image: string;
    tags: string[];
    relatedService?: {
        name: string;
        href: string;
    };
}

export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
}
