"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export type Country = "Global" | "India" | "UAE" | "Qatar";

interface CountryContextType {
    country: Country;
    setCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
    const [country, setCountryState] = useState<Country>("Global");
    const pathname = usePathname();

    // Sync country state with URL on navigation
    useEffect(() => {
        if (pathname.startsWith("/india")) {
            setCountryState("India");
        } else if (pathname.startsWith("/uae")) {
            setCountryState("UAE");
        } else if (pathname.startsWith("/qatar")) {
            setCountryState("Qatar");
        } else if (pathname === "/" || !["/india", "/uae", "/qatar"].some(p => pathname.startsWith(p))) {
            // Only revert to "Global" or saved state if we are at root or non-regional pages
            // But if we have a saved country, we might want to stay in that context?
            // For now, let's treat the root / explicitly as "Global" or whatever is saved.
            const savedCountry = localStorage.getItem("selectedCountry") as Country;
            if (savedCountry && pathname === "/") {
                setCountryState(savedCountry);
            } else if (pathname === "/") {
                setCountryState("Global");
            }
        }
    }, [pathname]);

    // Load country from localStorage on initial mount as a fallback
    useEffect(() => {
        const savedCountry = localStorage.getItem("selectedCountry") as Country;
        if (savedCountry && ["Global", "India", "UAE", "Qatar"].includes(savedCountry)) {
            // Only set if we're at root, otherwise trust the URL
            if (pathname === "/") {
                setCountryState(savedCountry);
            }
        }
    }, [pathname]);

    const setCountry = (newCountry: Country) => {
        setCountryState(newCountry);
        localStorage.setItem("selectedCountry", newCountry);
    };

    return (
        <CountryContext.Provider value={{ country, setCountry }}>
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
