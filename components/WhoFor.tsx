import { whoFor } from "@/lib/copy";
import { Section } from "./Section";

export function WhoFor() {
  return (
    <Section id="who-its-for" kicker={whoFor.kicker} title={whoFor.title} intro={whoFor.intro}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {whoFor.examples.map((e) => (
          <li key={e} className="flex items-start gap-3 rounded-lg border border-line px-4 py-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            <span className="text-ink">{e}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
