import type { Metadata } from "next";
import { about } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Tieout is built by Sarah Fernando and Kareena Dutta, who met at Purdue.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{about.title}</h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        {about.story.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {site.founders.map((f) => (
          <li key={f.name} className="flex items-center gap-4 rounded-xl border border-line p-5">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-base font-semibold text-accent"
            >
              {f.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
            <div>
              <p className="font-semibold text-ink">{f.name}</p>
              <p className="text-sm text-muted">{f.role}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-xl border border-line bg-wash p-6">
        <h2 className="text-xl font-semibold text-ink">{about.contactTitle}</h2>
        <p className="mt-2 text-muted">{about.contactBody}</p>
        <a href={`mailto:${site.contactEmail}`} className="mt-4 inline-block font-medium text-accent hover:underline">
          {site.contactEmail}
        </a>
      </div>
    </div>
  );
}
