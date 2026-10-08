import { Link } from "@tanstack/react-router";
import "./TagCloud.css";

const keywords = [
  { label: "Criação de Sites", slug: "sites-inteligentes" },
  { label: "Sistemas Customizados", slug: "sistemas-customizados" },
  { label: "Hospedagem Cloud", slug: "hospedagem-performance" },
  { label: "SEO Técnico", slug: "seo-tecnico" },
  { label: "Branding B2B", slug: "branding-design" },
  { label: "Inteligência Artificial", slug: "inteligencia-artificial" },
  { label: "Alta Performance", slug: "hospedagem-performance" },
  { label: "Design UI/UX", slug: "consultoria-ux-ui" },
  { label: "Consultoria Tech", slug: "consultoria-tech" },
  { label: "Desenvolvimento Web", slug: "sites-inteligentes" },
  { label: "Lojas Virtuais", slug: "lojas-virtuais" },
  { label: "Acessibilidade Digital", slug: "acessibilidade-digital" },
];

export function TagCloud() {
  return (
    <section
      className="tag-cloud-container border-t border-border/60 py-8 sm:py-10"
      aria-label="Especialidades"
    >
      <div className="tag-cloud-viewport" aria-live="off">
        <div className="tag-cloud-track">
          <ul className="tag-cloud-list" aria-label="Serviços da Evolves">
            {keywords.map((keyword) => (
              <li key={keyword.label} className="tag-cloud-item">
                <span className="tag-cloud-dot" aria-hidden="true" />
                <Link
                  to="/services/$slug"
                  params={{ slug: keyword.slug }}
                  className="rounded-full outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {keyword.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="tag-cloud-list" aria-hidden="true">
            {keywords.map((keyword) => (
              <li key={keyword.label} className="tag-cloud-item">
                <span className="tag-cloud-dot" />
                {keyword.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
