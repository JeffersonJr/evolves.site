import { Link } from "@tanstack/react-router";
import logo from "@/assets/evolves-logo.webp";
import { servicesData } from "@/data/services";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/[.06] bg-[#f5f5f7] text-foreground dark:border-border dark:bg-surface dark:text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-1 mb-6">
              <img src={logo} alt="Evolves" className="h-8 w-auto" />
              <span className="text-xs text-muted-foreground font-medium">
                ®
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed pr-4">
              Transformamos empresas através de soluções digitais inteligentes.
              Especialistas em desenvolvimento de sistemas, branding e design
              B2B.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/71072104/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-white/70 transition-colors dark:bg-card"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5513981326869"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-[#25D366] transition-colors dark:bg-card"
                aria-label="WhatsApp da Evolves"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-6">Links Rápidos</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Sobre a Evolves
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Ver todos os Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="hover:text-primary transition-colors"
                >
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog & Artigos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-6">Nossas Soluções</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-6">Legal & Contato</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
              <li className="flex items-start gap-3 mt-6">
                <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                <span>contato@evolves.site</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                <span>(13) 98132-6869</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>CNPJ: 39.521.111/0001-38</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Evolves Tecnologia. Todos os direitos
            reservados.
          </p>
          <p>Feito com paixão por tecnologia.</p>
        </div>
      </div>
    </footer>
  );
}
