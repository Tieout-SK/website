import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#why-tieout", label: "Why Tieout" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Tieout home" className="shrink-0">
          <Logo />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/about" className="px-2 text-sm text-muted hover:text-ink md:hidden">
            About
          </Link>
          <Link
            href="/#early-access"
            className="rounded-md bg-accent px-3 py-2 text-sm font-medium text-white hover:bg-accent-dark sm:px-4"
          >
            Request early access
          </Link>
        </nav>
      </div>
    </header>
  );
}
