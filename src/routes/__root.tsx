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
import { WhatsAppButton } from "../components/WhatsAppButton";

import { NotFoundGame } from "../components/NotFoundGame";

function NotFoundComponent() {
  return <NotFoundGame />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "criação de sites, sistemas web, automação, Inteligência Artificial, IA, hospedagem cloud, branding corporativo, desenvolvimento web, marketing digital, SEO" },
      { title: "Evolves | Criação de Sites, Sistemas, Hospedagem e Branding" },
      {
        name: "description",
        content:
          "Criação de sites, sistemas customizados, hospedagem e branding com inteligência artificial e design de vanguarda.",
      },
      { name: "author", content: "Evolves Tecnologia" },
      { property: "og:title", content: "Evolves | Criação de Sites, Sistemas, Hospedagem e Branding" },
      {
        property: "og:description",
        content:
          "Transformamos ideias em experiências digitais de alto impacto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Evolves | Criação de Sites, Sistemas, Hospedagem e Branding" },
      { name: "description", content: "Evolves Tecnologia cria sites inteligentes, sistemas customizados, hospedagem de alta performance e branding com IA e design de vanguarda." },
      { property: "og:description", content: "Evolves Tecnologia cria sites inteligentes, sistemas customizados, hospedagem de alta performance e branding com IA e design de vanguarda." },
      { name: "twitter:description", content: "Evolves Tecnologia cria sites inteligentes, sistemas customizados, hospedagem de alta performance e branding com IA e design de vanguarda." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fb55e15d-dd84-4441-8254-64bd5127bd10" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fb55e15d-dd84-4441-8254-64bd5127bd10" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppButton />
      <LgpdModal />
      <ExitIntentModal />
    </QueryClientProvider>
  );
}
