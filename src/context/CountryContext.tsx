"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Country = "Global" | "India" | "UAE" | "Qatar";

interface CountryContextType {
    country: Country;
    setCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
    const [country, setCountryState] = useState<Country>("Global");

    // Load country from localStorage on initial mount
    useEffect(() => {
        const savedCountry = localStorage.getItem("selectedCountry") as Country;
        if (savedCountry && ["Global", "India", "UAE", "Qatar"].includes(savedCountry)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCountryState((prev) => (prev !== savedCountry ? savedCountry : prev));
        }
    }, []);

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
