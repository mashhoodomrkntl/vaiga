import { Country } from "@/context/CountryContext";

export interface Office {
    country: Country;
    city: string;
    address: string;
    phone: string;
    email: string;
    hours?: string;
    mapUrl?: string;
    whatsapp?: string;
    services?: string;
    href?: string;
}

export const offices: Office[] = [
    {
        country: "India",
        city: "Malappuram, Kerala",
        address: "Vaiga Bhawan, Tirur Road, Puthanathani, Malappuram, Kerala 676551, India",
        phone: "+91 89432 02011",
        email: "services@vaiga.org",
        hours: "Mon – Sat: 10:00 AM – 5:00 PM",
        mapUrl: "https://www.google.com/maps?q=Vaiga+Bhawan+Puthanathani+Malappuram+Kerala",
        whatsapp: "918943202011",
        services: "Audit, Tax, Compliance, Bookkeeping",
        href: "/services/india",
    },
    {
        country: "UAE",
        city: "Dubai",
        address: "M16, RKM Building, Near Al Qiyadah Metro Station, Dubai, UAE",
        phone: "+971 52 390 2880",
        email: "services@vaiga.org",
        hours: "Sun – Thu: 9:00 AM – 6:00 PM",
        mapUrl: "https://www.google.com/maps?q=RKM+Building+Al+Qiyadah+Metro+Station+Dubai",
        whatsapp: "971523902880",
        services: "Audit, VAT, Tax Filing, Consultancy",
        href: "/services/uae",
    },
    {
        country: "Qatar",
        city: "Doha",
        address: "Office 6, 2nd Floor, Building No. 67, Opposite Liverpool John Moores University | Oryx University Doha, Qatar",
        phone: "+974 66437523",
        email: "audit@vaiga.org",
        hours: "Sun – Thu: 8:00 AM – 5:00 PM",
        mapUrl: "https://www.google.com/maps?q=Barwa+Commercial+Avenue+Doha+Qatar",
        whatsapp: "97466437523",
        services: "Audit, Accounting, Software, Consultancy",
        href: "/services/qatar",
    },
];
