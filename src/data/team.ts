import { Country } from "@/context/CountryContext";

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    country: Country;
    isGlobal: boolean;
    bio?: string;
    specialization?: string[];
}

export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "CMA Aslah",
        role: "Managing Director",
        image: "/aslah.png",
        country: "UAE",
        isGlobal: true,
        bio: "Visionary leader with over 15 years of experience in global auditing and tax advisory.",
        specialization: ["Financial Audit", "Strategic Planning", "Project Financing"]
    },
    {
        id: "2",
        name: "CMA Mubashir",
        role: "Managing Director",
        image: "/mubashir.jpeg",
        country: "Qatar",
        isGlobal: true,
        specialization: ["Internal Audit", "Corporate Governance", "SOX Advisory"]
    },
    {
        id: "3",
        name: "Abdurahim Changaranchola",
        role: "Director of Tax",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        country: "India",
        isGlobal: true,
        specialization: ["Direct Tax", "FEMA", "Company Laws"]
    },
    {
        id: "4",
        name: "Ahmad Al-Kuwari",
        role: "Senior Partner - Qatar",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop",
        country: "Qatar",
        isGlobal: false,
        specialization: ["Doha Regional Compliance", "Accounting Software", "IFRS Consulting"]
    },
    {
        id: "5",
        name: "Ravi Shankar",
        role: "Tax Manager - UAE",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
        country: "UAE",
        isGlobal: false,
        specialization: ["GCC VAT", "International Tax", "Transfer Pricing"]
    },
    {
        id: "6",
        name: "Fatima Al-Sayed",
        role: "Audit Associate - Qatar",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        country: "Qatar",
        isGlobal: false,
        specialization: ["Financial Reporting", "Risk Assurance"]
    },
    {
        id: "7",
        name: "Sandeep Nair",
        role: "Lead Consultant - India",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        country: "India",
        isGlobal: false,
        specialization: ["GST Compliance", "Internal Audit", "Costing"]
    },
    {
        id: "8",
        name: "Khaled Ben Ali",
        role: "Management Consultant - UAE",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop",
        country: "UAE",
        isGlobal: false,
        specialization: ["Business Strategy", "Operational Efficiency"]
    }
];
