"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Country = "Global" | "India" | "UAE" | "Qatar";

interface CountryContextType {
    country: Country;
    setCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

const validCountries: Country[] = ["Global", "India", "UAE", "Qatar"];

export function CountryProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [savedCountry, setSavedCountry] = useState<Country>("Global");
    const [isHydrated, setIsHydrated] = useState(false);

    // Initial load hydration
    useEffect(() => {
        setIsHydrated(true);
        try {
            const stored = localStorage.getItem("selectedCountry") as Country;
            if (stored && validCountries.includes(stored)) {
                setSavedCountry(stored);
            }
        } catch { }
    }, []);

    // Derive active country synchronously from URL to prevent double-load flashes
    let activeCountry: Country = "Global";
    if (pathname.startsWith("/india") || pathname.startsWith("/services/india")) {
        activeCountry = "India";
    } else if (pathname.startsWith("/uae") || pathname.startsWith("/services/uae")) {
        activeCountry = "UAE";
    } else if (pathname.startsWith("/qatar") || pathname.startsWith("/services/qatar")) {
        activeCountry = "Qatar";
    } else if (pathname === "/") {
        activeCountry = "Global";
    } else {
        // Shared pages (about, contact, blog) inherit user preference
        activeCountry = isHydrated ? savedCountry : "Global";
    }

    // Effect to keep localStorage and savedCountry exactly in sync with URL changes
    useEffect(() => {
        if (!isHydrated) return;

        if (pathname === "/") {
            // Read directly from localStorage to guarantee we have the absolute latest click value
            // (since React state 'savedCountry' might be batched)
            let latestPref: Country = "Global";
            try {
                const item = localStorage.getItem("selectedCountry");
                if (item) latestPref = item as Country;
            } catch { }

            if (latestPref && validCountries.includes(latestPref) && latestPref !== "Global") {
                router.replace(`/${latestPref.toLowerCase()}`);
            } else {
                setSavedCountry("Global");
            }
        } else if (pathname.startsWith("/india") || pathname.startsWith("/services/india")) {
            setSavedCountry("India");
            try { localStorage.setItem("selectedCountry", "India"); } catch { }
        } else if (pathname.startsWith("/uae") || pathname.startsWith("/services/uae")) {
            setSavedCountry("UAE");
            try { localStorage.setItem("selectedCountry", "UAE"); } catch { }
        } else if (pathname.startsWith("/qatar") || pathname.startsWith("/services/qatar")) {
            setSavedCountry("Qatar");
            try { localStorage.setItem("selectedCountry", "Qatar"); } catch { }
        }
        // If it's a shared page (like /about), do not overwrite savedCountry. It inherits nicely.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, isHydrated]);

    const setCountry = useCallback((newCountry: Country) => {
        setSavedCountry(newCountry);
        try { localStorage.setItem("selectedCountry", newCountry); } catch { }
    }, []);

    return (
        <CountryContext.Provider value={{ country: activeCountry, setCountry }}>
            {children}
        </CountryContext.Provider>
    );
}

export function useCountry() {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
}
