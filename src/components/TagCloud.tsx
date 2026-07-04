import "./TagCloud.css";

const keywords = [
  "Criação de Sites",
  "Sistemas Customizados",
  "Hospedagem Cloud",
  "SEO Técnico",
  "Branding B2B",
  "Inteligência Artificial",
  "Alta Performance",
  "Design UI/UX",
  "Consultoria Tech",
  "Desenvolvimento Web",
  "Lojas Virtuais",
  "Acessibilidade Digital"
];

export function TagCloud() {
  return (
    <div className="tag-cloud-container w-full overflow-hidden py-12 border-y border-border/50 bg-background relative flex">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="tag-cloud-track flex gap-4 sm:gap-6 items-center">
        {/* We repeat the array 3 times to create the infinite scroll illusion */}
        {[...keywords, ...keywords, ...keywords].map((kw, i) => (
          <span 
            key={i} 
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-border/60 bg-surface/50 text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:text-primary hover:border-primary hover:scale-105 cursor-default shadow-sm hover:shadow-md"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}
