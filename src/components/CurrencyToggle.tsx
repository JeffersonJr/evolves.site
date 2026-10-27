import { useRegion, type Region } from "@/contexts/RegionContext";

const OPTIONS: { value: Region; flag: string; label: string }[] = [
  { value: "BRL", flag: "🇧🇷", label: "R$"  },
  { value: "EUR", flag: "🇪🇺", label: "€"   },
  { value: "USD", flag: "🌐", label: "$"    },
];

export function CurrencyToggle({ className = "" }: { className?: string }) {
  const { region, setRegion } = useRegion();

  return (
    <div
      role="group"
      aria-label="Select currency region"
      className={`inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5 text-xs font-mono transition-colors dark:border-white/[0.08] dark:bg-white/[0.03] ${className}`}
    >
      {OPTIONS.map((opt) => {
        const active = region === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setRegion(opt.value)}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer ${
              active
                ? "bg-white text-zinc-900 shadow-xs dark:bg-white/10 dark:text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span aria-hidden="true">{opt.flag}</span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
