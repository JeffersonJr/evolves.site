import React, { createContext, useContext, useEffect, useState } from "react";

export type Region = "EUR" | "BRL" | "USD";

export interface RegionContextType {
  region: Region;
  setRegion: (r: Region) => void;
  currencySymbol: string;
  currencyCode: string;
  isEurope: boolean;
  isBrazil: boolean;
  isGlobal: boolean;
}

const RegionContext = createContext<RegionContextType>({
  region: "EUR",
  setRegion: () => {},
  currencySymbol: "€",
  currencyCode: "EUR",
  isEurope: true,
  isBrazil: false,
  isGlobal: false,
});

const CURRENCY_MAP: Record<Region, { symbol: string; code: string }> = {
  EUR: { symbol: "€",  code: "EUR" },
  BRL: { symbol: "R$", code: "BRL" },
  USD: { symbol: "$",  code: "USD" },
};

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegionState] = useState<Region>("EUR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("evolves_region_preference") as Region | null;
      if (saved === "EUR" || saved === "BRL" || saved === "USD") {
        setRegionState(saved);
        return;
      }

      // Geo-detection by timezone and locale
      const tz   = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const lang = navigator.language || "";

      if (
        tz.includes("Sao_Paulo") || tz.includes("Recife") || tz.includes("Fortaleza") ||
        tz.includes("Manaus")    || tz.includes("Brazil")  || lang.toLowerCase() === "pt-br"
      ) {
        setRegionState("BRL");
      } else if (
        tz.includes("Auckland") || tz.includes("Wellington") ||
        tz.includes("New_York") || tz.includes("Los_Angeles") ||
        tz.includes("Chicago")  || tz.includes("Denver") ||
        lang.toLowerCase().startsWith("en-us") || lang.toLowerCase().startsWith("en-nz") ||
        lang.toLowerCase().startsWith("en-au")
      ) {
        setRegionState("USD");
      } else {
        setRegionState("EUR");
      }
    } catch {
      setRegionState("EUR");
    }
  }, []);

  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    try {
      localStorage.setItem("evolves_region_preference", newRegion);
    } catch {
      // Storage unavailable
    }
  };

  const { symbol, code } = CURRENCY_MAP[region];

  return (
    <RegionContext.Provider
      value={{
        region,
        setRegion,
        currencySymbol: symbol,
        currencyCode: code,
        isEurope: region === "EUR",
        isBrazil: region === "BRL",
        isGlobal: region === "USD",
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => useContext(RegionContext);
