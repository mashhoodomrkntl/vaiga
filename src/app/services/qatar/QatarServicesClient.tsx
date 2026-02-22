"use client";

import {
    ShieldCheck,
    ClipboardCheck,
    Calculator,
    FileBarChart,
    MonitorSmartphone,
    Briefcase,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceItem } from "@/components/ServicePageLayout";

const services: ServiceItem[] = [
    {
        icon: ShieldCheck,
        title: "Internal Audit",
        description:
            "Independent assurance and consulting designed to add value and improve your organization's operations in Qatar.",
        details: [
            "Operational Audit",
            "Compliance Audit",
            "Financial Controls Review",
            "Risk Assessment",
            "Process Improvement",
        ],
    },
    {
        icon: ClipboardCheck,
        title: "Statutory Audit Support",
        description:
            "Ensuring compliance with Qatar's legal and regulatory requirements through thorough auditing.",
        details: [
            "Financial Statement Audit",
            "Regulatory Compliance",
            "Annual Audit Reports",
            "Legal Standards Review",
        ],
    },
    {
        icon: Calculator,
        title: "Accounting & Bookkeeping",
        description:
            "Meticulous support for accurate financial records, enabling informed decisions and compliance.",
        details: [
            "Daily Bookkeeping",
            "Financial Reporting",
            "Bank Reconciliation",
            "Accounts Management",
            "Payroll Services",
        ],
    },
    {
        icon: FileBarChart,
        title: "Project Report & Valuation",
        description:
            "Crucial project reports for assessing viability and potential success of your ventures.",
        details: [
            "Feasibility Studies",
            "Project Cost Analysis",
            "Business Valuation",
            "Investment Assessment",
        ],
    },
    {
        icon: MonitorSmartphone,
        title: "Accounting Software Implementation",
        description:
            "Expert implementation, training, and migration for Zoho Books, Tally Prime, and Odoo.",
        details: [
            "Zoho Books Setup",
            "Tally Prime Implementation",
            "Odoo Configuration",
            "Data Migration",
            "Team Training",
        ],
    },
    {
        icon: Briefcase,
        title: "Management Consultancy",
        description:
            "Comprehensive management consulting to enhance business efficiency and foster growth.",
        details: [
            "Strategy Development",
            "Operational Improvement",
            "Financial Advisory",
            "Business Growth Planning",
        ],
    },
];

export default function QatarServicesClient() {
    return (
        <ServicePageLayout
            country="Qatar"
            tagline="Offering precise and reliable audit, tax, and financial consulting services to meet Qatar's regulatory requirements and optimize your financial strategies."
            services={services}
        />
    );
}
