import { useParams } from "@tanstack/react-router";
import routes from "@/data/i18n-routes.json";

export const LOCALES = routes.locales;
export type Locale = (typeof LOCALES)[number];
export type PageKey = keyof typeof routes.segments;

export const X_DEFAULT_LOCALE = routes.xDefault as Locale;
export const CONTENT_DEFAULT_LOCALE = routes.contentDefault as Locale;

const SEGMENT_PAGES = Object.keys(routes.segments) as PageKey[];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function htmlLang(locale: Locale) {
  return routes.htmlLang[locale];
}

export function hrefLang(locale: Locale) {
  return routes.hreflang[locale];
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : CONTENT_DEFAULT_LOCALE;
}

export function useLocale(): Locale {
  const params = useParams({ strict: false });
  return isLocale(params.locale) ? params.locale : CONTENT_DEFAULT_LOCALE;
}

function splitPath(pathname: string) {
  return pathname.split("/").filter(Boolean);
}

function publicSegment(page: PageKey, locale: Locale) {
  return routes.segments[page][locale];
}

function internalSegment(page: PageKey) {
  return routes.segments[page].internal;
}

function blogCategoryPublic(locale: Locale) {
  return routes.blogCategory[locale];
}

function blogSearchPublic(locale: Locale) {
  return routes.blogSearch[locale];
}

function pageFromPublicSlug(locale: Locale, slug: string): PageKey | undefined {
  return SEGMENT_PAGES.find((page) => publicSegment(page, locale) === slug);
}

function pageFromInternalSlug(slug: string): PageKey | undefined {
  return SEGMENT_PAGES.find((page) => internalSegment(page) === slug);
}

function restToInternal(locale: Locale, rest: string[]): string[] | null {
  if (rest.length === 0) return [];
  const page =
    pageFromPublicSlug(locale, rest[0]) ?? pageFromInternalSlug(rest[0]);
  if (!page) return null;
  const mapped = [internalSegment(page), ...rest.slice(1)];
  if (page === "blog" && mapped[1]) {
    if (
      mapped[1] === blogCategoryPublic(locale) ||
      mapped[1] === routes.blogCategory.internal
    ) {
      mapped[1] = routes.blogCategory.internal;
    } else if (
      mapped[1] === blogSearchPublic(locale) ||
      mapped[1] === routes.blogSearch.internal
    ) {
      mapped[1] = routes.blogSearch.internal;
    }
  }
  return mapped;
}

function restToPublic(locale: Locale, rest: string[]): string[] | null {
  if (rest.length === 0) return [];
  const page = pageFromInternalSlug(rest[0]) ?? pageFromPublicSlug(locale, rest[0]);
  if (!page) return null;
  const mapped = [publicSegment(page, locale), ...rest.slice(1)];
  if (page === "blog" && mapped[1]) {
    if (
      mapped[1] === routes.blogCategory.internal ||
      mapped[1] === blogCategoryPublic(locale)
    ) {
      mapped[1] = blogCategoryPublic(locale);
    } else if (
      mapped[1] === routes.blogSearch.internal ||
      mapped[1] === blogSearchPublic(locale)
    ) {
      mapped[1] = blogSearchPublic(locale);
    }
  }
  return mapped;
}

function joinPath(parts: string[]) {
  return `/${parts.join("/")}`;
}

export function rewritePublicToInternal(pathname: string) {
  const parts = splitPath(pathname);
  if (!isLocale(parts[0])) return pathname;
  const rest = restToInternal(parts[0], parts.slice(1));
  if (!rest) return pathname;
  return joinPath([parts[0], ...rest]);
}

export function rewriteInternalToPublic(pathname: string) {
  const parts = splitPath(pathname);
  if (!isLocale(parts[0])) return pathname;
  const rest = restToPublic(parts[0], parts.slice(1));
  if (!rest) return pathname;
  return joinPath([parts[0], ...rest]);
}

export function localizedPath(
  locale: Locale,
  page: PageKey | "home",
  extra: string[] = [],
) {
  if (page === "home") return `/${locale}`;
  const rest = restToPublic(locale, [internalSegment(page), ...extra]);
  if (!rest) return `/${locale}`;
  return joinPath([locale, ...rest]);
}

export function publicPath(pathname: string) {
  return rewriteInternalToPublic(pathname);
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const parts = splitPath(pathname);
  if (!isLocale(parts[0])) return `/${locale}`;
  const internal = restToInternal(parts[0], parts.slice(1));
  if (!internal) return `/${locale}`;
  const next = restToPublic(locale, internal);
  if (!next) return `/${locale}`;
  return joinPath([locale, ...next]);
}

export function localizeHref(locale: Locale, href: string) {
  const url = new URL(href, "https://www.evolves.site");
  const nextPath = isLocale(splitPath(url.pathname)[0])
    ? switchLocalePath(url.pathname, locale)
    : (() => {
        const rest = restToInternal("en", splitPath(url.pathname));
        if (!rest) return `/${locale}`;
        const pub = restToPublic(locale, rest);
        return pub ? joinPath([locale, ...pub]) : `/${locale}`;
      })();
  return `${nextPath}${url.search}${url.hash}`;
}

export function alternatePaths(pathname: string) {
  const parts = splitPath(pathname);
  const locale = isLocale(parts[0]) ? parts[0] : CONTENT_DEFAULT_LOCALE;
  const rest = isLocale(parts[0])
    ? restToInternal(locale, parts.slice(1))
    : restToInternal("en", parts);
  if (!rest) {
    return LOCALES.map((item) => ({
      locale: item,
      hrefLang: hrefLang(item),
      path: `/${item}`,
    }));
  }
  return LOCALES.map((item) => {
    const pub = restToPublic(item, rest) ?? [];
    return {
      locale: item,
      hrefLang: hrefLang(item),
      path: joinPath([item, ...pub]),
    };
  });
}

export function hreflangLinks(pathname: string, origin: string) {
  const alternates = alternatePaths(pathname);
  const xDefault = alternates.find((item) => item.locale === X_DEFAULT_LOCALE);
  return [
    ...alternates.map((item) => ({
      rel: "alternate" as const,
      hrefLang: item.hrefLang,
      href: `${origin}${item.path}`,
    })),
    {
      rel: "alternate" as const,
      hrefLang: "x-default",
      href: `${origin}${xDefault?.path ?? `/${X_DEFAULT_LOCALE}`}`,
    },
  ];
}

const STATIC_FILE = /\.[a-z0-9]+$/i;

export function redirectPath(pathname: string): string | null {
  if (
    pathname.startsWith("/assets") ||
    pathname.startsWith("/node_modules") ||
    (STATIC_FILE.test(pathname) && !pathname.includes("/blog/"))
  ) {
    return null;
  }

  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === "/") return `/${CONTENT_DEFAULT_LOCALE}`;

  const parts = splitPath(normalized);
  if (isLocale(parts[0])) {
    const rest = restToInternal(parts[0], parts.slice(1));
    if (!rest) return null;
    const canonical = joinPath([
      parts[0],
      ...(restToPublic(parts[0], rest) ?? rest),
    ]);
    return canonical !== normalized ? canonical : null;
  }

  const rest = restToInternal("en", parts);
  if (!rest) return null;
  return joinPath([
    CONTENT_DEFAULT_LOCALE,
    ...(restToPublic(CONTENT_DEFAULT_LOCALE, rest) ?? rest),
  ]);
}

export const locationRewrite = {
  input: ({ url }: { url: URL }) => {
    const next = rewritePublicToInternal(url.pathname);
    if (next === url.pathname) return url;
    const copy = new URL(url);
    copy.pathname = next;
    return copy;
  },
  output: ({ url }: { url: URL }) => {
    const next = rewriteInternalToPublic(url.pathname);
    if (next === url.pathname) return url;
    const copy = new URL(url);
    copy.pathname = next;
    return copy;
  },
};
