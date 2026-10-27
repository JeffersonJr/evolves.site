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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
        { name: "author", content: "Evolves Tecnologia" },
        { property: "og:site_name", content: "Evolves" },
        { property: "og:locale", content: "pt_BR" },
        { name: "twitter:card", content: "summary_large_image" },
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
  return (
    /* Light mode is the default experience */
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {/* Prevent flash of unstyled content — apply saved theme before paint (default: light) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('evolves_theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
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
