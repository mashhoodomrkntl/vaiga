import { Country } from "@/context/CountryContext";

export interface Service {
    icon: string;
    title: string;
    description: string;
    items: string[];
}

export const servicesData: Record<Country, Service[]> = {
    Global: [
        {
            icon: "ShieldCheck",
            title: "Audit & Assurance",
            description: "IFRS Consulting, Internal Audit, Financial Audit, and Risk Assurance to safeguard your business.",
            items: ["Internal Audit", "Financial Audit", "IFRS Consulting", "Risk Assurance"],
        },
        {
            icon: "FileText",
            title: "Tax & Regulatory",
            description: "Comprehensive tax consultancy, GCC VAT, and regulatory compliance across India, UAE & Qatar.",
            items: ["Tax Consultancy", "GCC VAT", "Tax Filing", "Tax Strategy"],
        },
        {
            icon: "Calculator",
            title: "Accounting & Bookkeeping",
            description: "Full-spectrum outsourced accounting and bookkeeping tailored to your business needs.",
            items: ["Outsourced Accounting", "Bookkeeping", "Financial Reports", "Bank Reconciliation"],
        },
        {
            icon: "MonitorSmartphone",
            title: "Software Solutions",
            description: "Implementation and training for Tally Prime, Zoho Books, and Odoo accounting platforms.",
            items: ["Zoho Books", "Odoo", "Tally Prime", "Power BI Dashboards"],
        },
    ],
    India: [
        {
            icon: "ShieldCheck",
            title: "Auditing & Assurance",
            description: "Comprehensive audit services designed to meet regulatory compliance and business needs.",
            items: ["Internal Audit", "Statutory Audit", "Financial Audit", "Risk Assurance"],
        },
        {
            icon: "FileText",
            title: "Tax Advisory",
            description: "Complete tax consultancy in Income Tax, GST, and regulatory representation.",
            items: ["Income Tax Advisory", "GST Consultancy", "Tax Filing", "Tax Representation"],
        },
        {
            icon: "FileCheck",
            title: "Secretarial Compliance",
            description: "Full range of secretarial services for ROC and MCA filing requirements.",
            items: ["ROC Filings", "MCA Compliance", "Annual Returns", "Statutory Registers"],
        },
        {
            icon: "Calculator",
            title: "Accounting & Bookkeeping",
            description: "Meticulous accounting support for accurate financial records and compliance.",
            items: ["Full-cycle Bookkeeping", "Financial Reporting", "Payroll Processing", "Cash Flow"],
        },
    ],
    UAE: [
        {
            icon: "ShieldCheck",
            title: "Internal Audit",
            description: "Independent assurance and consulting designed to improve your organization's operations.",
            items: ["Operational Audit", "Compliance Audit", "Risk Assessment", "Process Optimization"],
        },
        {
            icon: "Receipt",
            title: "GCC VAT Consultancy",
            description: "Navigate VAT complexities ensuring your business remains compliant and efficient.",
            items: ["VAT Registration", "VAT Return Filing", "VAT Compliance Review", "VAT Strategy"],
        },
        {
            icon: "FileText",
            title: "Tax Filing",
            description: "Simplify corporate tax processes and enhance financial efficiency with expert filing.",
            items: ["Corporate Tax Filing", "Tax Computation", "Tax Planning", "Compliance"],
        },
        {
            icon: "Calculator",
            title: "Accounting & Bookkeeping",
            description: "Meticulous support for accurate financial records and informed decision-making.",
            items: ["Daily Bookkeeping", "Financial Reporting", "Bank Reconciliation", "Management Reports"],
        },
    ],
    Qatar: [
        {
            icon: "ShieldCheck",
            title: "Internal Audit",
            description: "Independent assurance and consulting designed to improve operations in Qatar.",
            items: ["Operational Audit", "Compliance Audit", "Risk Assessment", "Process Improvement"],
        },
        {
            icon: "ClipboardCheck",
            title: "Statutory Audit Support",
            description: "Ensuring compliance with Qatar's legal and regulatory requirements.",
            items: ["Financial Statement Audit", "Regulatory Compliance", "Annual Audit Reports", "Standards Review"],
        },
        {
            icon: "MonitorSmartphone",
            title: "Software Implementation",
            description: "Expert implementation, training, and migration for Zoho Books, Tally Prime, and Odoo.",
            items: ["Zoho Books Setup", "Tally Prime", "Odoo Configuration", "Team Training"],
        },
        {
            icon: "Calculator",
            title: "Accounting & Bookkeeping",
            description: "Meticulous support for accurate financial records and regulatory compliance.",
            items: ["Daily Bookkeeping", "Financial Reporting", "Bank Reconciliation", "Payroll Services"],
        },
    ],
};
