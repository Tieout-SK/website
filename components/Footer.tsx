import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-wash">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-muted">Recurring financial workflows, automated on analyst-approved rules.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li>
            <a href={`mailto:${site.contactEmail}`} className="hover:text-ink">
              {site.contactEmail}
            </a>
          </li>
          <li>
            <a href={site.linkedinUrl} className="hover:text-ink" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/about" className="hover:text-ink">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
