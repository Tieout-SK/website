import { different } from "@/lib/copy";
import { Section } from "./Section";

export function Different() {
  return (
    <Section id="why-tieout" kicker={different.kicker} title={different.title} intro={different.intro} tone="wash">
      <div className="grid gap-6 sm:grid-cols-2">
        {different.points.map((p, i) => (
          <div key={p.title} className="rounded-xl border border-line bg-white p-6">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-2 text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
