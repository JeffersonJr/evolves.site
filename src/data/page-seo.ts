import type { Locale, PageKey } from "@/lib/i18n-urls";

type PageCopy = { title: string; description: string };

export const PAGE_SEO: Record<
  PageKey | "home",
  Record<Locale, PageCopy>
> = {
  home: {
    pt: {
      title:
        "Evolves® · Engenharia Digital & Plataformas Web de Alta Performance",
      description:
        "Estúdio de desenvolvimento de websites corporativos, landing pages de alta conversão e infraestrutura em nuvem de alta velocidade para empresas na Europa e no Brasil.",
    },
    en: {
      title: "Evolves® · Digital Engineering & High-Performance Web Platforms",
      description:
        "Studio for corporate websites, high-conversion landing pages and high-speed cloud infrastructure for companies in Europe, Brazil and the United States.",
    },
    es: {
      title:
        "Evolves® · Ingeniería digital y plataformas web de alto rendimiento",
      description:
        "Estudio de sitios corporativos, landing pages de alta conversión e infraestructura cloud de alta velocidad para empresas en Europa, Brasil y Estados Unidos.",
    },
    it: {
      title:
        "Evolves® · Ingegneria digitale e piattaforme web ad alte prestazioni",
      description:
        "Studio per siti corporate, landing page ad alta conversione e infrastruttura cloud ad alta velocità per aziende in Europa, Brasile e Stati Uniti.",
    },
  },
  about: {
    pt: {
      title:
        "Sobre a Evolves Tecnologia | Empresa de Desenvolvimento Web e Design Digital",
      description:
        "Conheça a Evolves: empresa de tecnologia especializada em desenvolvimento web, sistemas sob medida, inteligência artificial, SEO técnico e design de produto para negócios digitais no Brasil e exterior.",
    },
    en: {
      title: "About Evolves | Web Development and Digital Product Studio",
      description:
        "Evolves is a digital engineering studio for custom websites, tailored systems, technical SEO and product design for companies in Brazil, Europe and the United States.",
    },
    es: {
      title: "Sobre Evolves | Estudio de desarrollo web y producto digital",
      description:
        "Evolves es un estudio de ingeniería digital para sitios, sistemas a medida, SEO técnico y diseño de producto para empresas en Brasil, Europa y Estados Unidos.",
    },
    it: {
      title: "Chi siamo | Evolves, studio di engineering digitale",
      description:
        "Evolves è uno studio di ingegneria digitale per siti, sistemi su misura, SEO tecnico e product design per aziende in Brasile, Europa e Stati Uniti.",
    },
  },
  services: {
    pt: {
      title:
        "Serviços de Desenvolvimento Web, SEO Técnico, Sistemas e Cloud | Evolves",
      description:
        "Serviços especializados da Evolves: criação de sites profissionais, desenvolvimento de sistemas customizados, SEO técnico, hospedagem cloud, consultoria UX/UI, inteligência artificial e branding B2B para empresas.",
    },
    en: {
      title: "Web Development, Technical SEO, Systems and Cloud Services",
      description:
        "Evolves services: professional websites, custom systems, technical SEO, cloud hosting, UX/UI consulting, applied AI and B2B branding for growing companies.",
    },
    es: {
      title: "Servicios de desarrollo web, SEO técnico, sistemas y cloud",
      description:
        "Servicios de Evolves: sitios profesionales, sistemas a medida, SEO técnico, hosting cloud, consultoría UX/UI, IA aplicada y branding B2B.",
    },
    it: {
      title: "Servizi di sviluppo web, SEO tecnico, sistemi e cloud",
      description:
        "Servizi Evolves: siti professionali, sistemi su misura, SEO tecnico, hosting cloud, consulenza UX/UI, AI applicata e branding B2B.",
    },
  },
  cases: {
    pt: {
      title: "Projetos e Cases: Sites, Portais e Sistemas para Empresas | Evolves",
      description:
        "Conheça os projetos reais da Evolves: portal europeu de alta conversão para Hidrolinfa Detox, presença digital para a ARLS União Fraternal e portal institucional da GLEBRA.",
    },
    en: {
      title: "Projects and Case Studies | Evolves Digital Engineering",
      description:
        "Real Evolves projects: a high-conversion European portal for Hidrolinfa Detox, digital presence for ARLS União Fraternal and the GLEBRA institutional portal.",
    },
    es: {
      title: "Proyectos y casos de éxito | Evolves",
      description:
        "Proyectos reales de Evolves: portal europeo de alta conversión para Hidrolinfa Detox, presencia digital para ARLS União Fraternal y el portal institucional de GLEBRA.",
    },
    it: {
      title: "Progetti e casi studio | Evolves",
      description:
        "Progetti reali Evolves: portale europeo ad alta conversione per Hidrolinfa Detox, presenza digitale per ARLS União Fraternal e portale istituzionale GLEBRA.",
    },
  },
  blog: {
    pt: {
      title:
        "Blog: Desenvolvimento Web, SEO Técnico, IA e Design Digital | Evolves",
      description:
        "Artigos aprofundados sobre criação de sites, SEO técnico, Core Web Vitals, sistemas customizados, hospedagem cloud, inteligência artificial e branding para empresas.",
    },
    en: {
      title: "Blog: Web Development, Technical SEO, AI and Digital Design",
      description:
        "In-depth articles on websites, technical SEO, Core Web Vitals, custom systems, cloud hosting, applied AI and branding for companies.",
    },
    es: {
      title: "Blog: desarrollo web, SEO técnico, IA y diseño digital",
      description:
        "Artículos sobre sitios web, SEO técnico, Core Web Vitals, sistemas a medida, hosting cloud, inteligencia artificial y branding para empresas.",
    },
    it: {
      title: "Blog: sviluppo web, SEO tecnico, AI e design digitale",
      description:
        "Articoli su siti web, SEO tecnico, Core Web Vitals, sistemi su misura, hosting cloud, intelligenza artificiale e branding per aziende.",
    },
  },
  contact: {
    pt: {
      title: "Solicitar Orçamento de Site, Sistema ou Hospedagem | Evolves",
      description:
        "Solicite uma proposta técnica para seu projeto de site profissional, sistema customizado, hospedagem cloud ou branding digital. A Evolves atende empresas no Brasil e em Portugal.",
    },
    en: {
      title: "Request a Website, System or Hosting Proposal | Evolves",
      description:
        "Request a technical proposal for a professional website, custom system, cloud hosting or digital branding. Evolves works with companies in Brazil, Europe and the US.",
    },
    es: {
      title: "Solicitar presupuesto de sitio, sistema o hosting | Evolves",
      description:
        "Pida una propuesta técnica para un sitio profesional, sistema a medida, hosting cloud o branding digital. Evolves atiende empresas en Brasil, Europa y Estados Unidos.",
    },
    it: {
      title: "Richiedi un preventivo per sito, sistema o hosting | Evolves",
      description:
        "Richiedi una proposta tecnica per un sito professionale, un sistema su misura, hosting cloud o branding digitale. Evolves lavora con aziende in Brasile, Europa e Stati Uniti.",
    },
  },
  privacy: {
    pt: {
      title: "Política de Privacidade e Proteção de Dados | Evolves",
      description:
        "Saiba como a Evolves coleta, trata e protege dados pessoais em conformidade com a LGPD e o RGPD.",
    },
    en: {
      title: "Privacy Policy and Data Protection | Evolves",
      description:
        "How Evolves collects, uses and protects personal data in line with LGPD and GDPR requirements.",
    },
    es: {
      title: "Política de privacidad y protección de datos | Evolves",
      description:
        "Cómo Evolves recopila, trata y protege datos personales conforme a la LGPD y el RGPD.",
    },
    it: {
      title: "Informativa sulla privacy e protezione dei dati | Evolves",
      description:
        "Come Evolves raccoglie, tratta e protegge i dati personali in conformità a LGPD e GDPR.",
    },
  },
  cookies: {
    pt: {
      title: "Política de Cookies | Evolves",
      description:
        "Entenda o uso de cookies no site da Evolves, suas finalidades e as opções disponíveis para gerenciar suas preferências.",
    },
    en: {
      title: "Cookie Policy | Evolves",
      description:
        "How Evolves uses cookies, why they are needed and how you can manage your preferences.",
    },
    es: {
      title: "Política de cookies | Evolves",
      description:
        "Cómo Evolves utiliza cookies, para qué sirven y cómo puede gestionar sus preferencias.",
    },
    it: {
      title: "Cookie policy | Evolves",
      description:
        "Come Evolves utilizza i cookie, a cosa servono e come puoi gestire le tue preferenze.",
    },
  },
};
