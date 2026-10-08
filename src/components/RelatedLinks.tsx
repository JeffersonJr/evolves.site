export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  if (!links.length) return null;
  return (
    <section className="mt-12 rounded-3xl bg-[#f5f5f7] p-6 dark:bg-surface sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight mb-5">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
