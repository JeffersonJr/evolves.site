import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LgpdModal } from "../components/LgpdModal";
import { ExitIntentModal } from "../components/ExitIntentModal";
import { EvoAssistant } from "../components/EvoAssistant";
import { NotFoundGame } from "../components/NotFoundGame";
import { htmlLang, useLocale, hreflangLinks } from "@/lib/i18n-urls";
import { SpeedInsights } from "@vercel/speed-insights/react";

function NotFoundComponent() {
  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <NotFoundGame />
    </>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();
  const locale = useLocale();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" role="alert">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <Link
            to="/$locale/"
            params={{ locale }}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Evolves® · Web Engineering & Cloud Infrastructure" },
        { name: "description", content: "Evolves: Engenharia web e infraestrutura cloud de alta performance. Desenvolvimento de sites, sistemas customizados, SEO técnico e hospedagem cloud para empresas B2B." },
        { name: "author", content: "Evolves Tecnologia" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "Evolves" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@evolvestech" },
        // Hint browser to preload the Geist font subset used above the fold
        { name: "theme-color", content: "#fbfbfd" },
      ],
      links: [
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        { rel: "stylesheet", href: appCss },
        // Non-blocking font load: media=print + onload swap eliminates render-blocking
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=optional",
          media: "print",
          // @ts-expect-error onload is valid HTML but not in TanStack types
          onload: "this.media='all'",
        },
        { rel: "describedby", href: "/llms.txt", type: "text/plain" },
        { rel: "icon", href: "/favicon.png", type: "image/png" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const lang = htmlLang(locale);

  return (
    /* Light mode is the default experience */
    <html lang={lang}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQZF3PXK');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "YOUR_CLOUDFLARE_ANALYTICS_TOKEN"}'
        />
        {/* End Cloudflare Web Analytics */}
        <HeadContent />
        {/* Prevent flash of unstyled content — apply saved theme before paint (default: light) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('evolves_theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQZF3PXK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Pular para o conteúdo principal
        </a>
        <div id="main-content">
          {children}
        </div>
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

import { RegionProvider } from "../contexts/RegionContext";
import { I18nProvider } from "../contexts/I18nContext";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <RegionProvider>
        <I18nProvider>
          <Outlet />
          <EvoAssistant />
          <LgpdModal />
          <ExitIntentModal />
        </I18nProvider>
      </RegionProvider>
    </QueryClientProvider>
  );
}
