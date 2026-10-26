import React, { createContext, useContext, useEffect, useState } from "react";

export type Region = "EUR" | "BRL";

export interface RegionContextType {
  region: Region;
  setRegion: (r: Region) => void;
  currencySymbol: string;
  isEurope: boolean;
  isBrazil: boolean;
}

const RegionContext = createContext<RegionContextType>({
  region: "EUR",
  setRegion: () => {},
  currencySymbol: "€",
  isEurope: true,
  isBrazil: false,
});

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [region, setRegionState] = useState<Region>("EUR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("evolves_region_preference") as Region | null;
      if (saved === "EUR" || saved === "BRL") {
        setRegionState(saved);
        return;
      }

      // Geo-detection by timezone and locale
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const lang = navigator.language || "";

      if (
        tz.includes("Sao_Paulo") ||
        tz.includes("Recife") ||
        tz.includes("Fortaleza") ||
        tz.includes("Manaus") ||
        tz.includes("Brazil") ||
        lang.toLowerCase() === "pt-br"
      ) {
        setRegionState("BRL");
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

  return (
    <RegionContext.Provider
      value={{
        region,
        setRegion,
        currencySymbol: region === "EUR" ? "€" : "R$",
        isEurope: region === "EUR",
        isBrazil: region === "BRL",
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => useContext(RegionContext);
