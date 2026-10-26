import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { ChevronDown, Check } from "lucide-react";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { language, setLanguage, languages, currentLanguageOption } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-xs font-mono transition-all hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] cursor-pointer"
      >
        <span className="text-sm leading-none" aria-hidden="true">
          {currentLanguageOption.flag}
        </span>
        <span className="text-[11px] font-medium text-foreground">
          {currentLanguageOption.short}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Selecionar Idioma"
          className="absolute right-0 mt-1.5 w-48 origin-top-right rounded-2xl border border-border bg-background/95 p-1.5 shadow-[var(--shadow-card)] backdrop-blur-xl z-[120] animate-fade-up focus:outline-none"
        >
          {languages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(item.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-2.5 py-1.5 text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm leading-none" aria-hidden="true">
                    {item.flag}
                  </span>
                  <span>{item.name}</span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
