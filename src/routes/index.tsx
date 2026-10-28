import { createFileRoute, redirect } from "@tanstack/react-router";
import { CONTENT_DEFAULT_LOCALE } from "@/lib/i18n-urls";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: `/${CONTENT_DEFAULT_LOCALE}`, statusCode: 301 });
  },
});
