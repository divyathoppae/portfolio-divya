import { MessageCircle, Sparkle } from "lucide-react";

// Edit these to add, remove, or reorder the sticky nav's section links.
const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight"
        >
          <Sparkle className="h-4 w-4 text-accent" strokeWidth={2.5} />
          Divya Thoppae
        </a>

        {/* Collapsed on small screens to keep the header uncluttered */}
        <ul className="hidden items-center gap-8 text-sm text-foreground/80 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          Let&apos;s chat
        </a>
      </nav>
    </header>
  );
}
