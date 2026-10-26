import { useRegion } from "@/contexts/RegionContext";

export function CurrencyToggle({ className = "" }: { className?: string }) {
  const { region, setRegion } = useRegion();

  return (
    <div
      role="group"
      aria-label="Selecionar Região e Moeda"
      className={`inline-flex items-center rounded-full border border-black/[0.08] bg-black/[0.03] p-0.5 text-xs font-mono transition-colors dark:border-white/10 dark:bg-white/[0.05] ${className}`}
    >
      <button
        type="button"
        onClick={() => setRegion("EUR")}
        aria-pressed={region === "EUR"}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer ${
          region === "EUR"
            ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span aria-hidden="true">🇪🇺</span>
        <span>EUR (€)</span>
      </button>

      <button
        type="button"
        onClick={() => setRegion("BRL")}
        aria-pressed={region === "BRL"}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer ${
          region === "BRL"
            ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span aria-hidden="true">🇧🇷</span>
        <span>BRL (R$)</span>
      </button>
    </div>
  );
}
