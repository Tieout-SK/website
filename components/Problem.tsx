import { problem } from "@/lib/copy";
import { Section } from "./Section";

export function Problem() {
  return (
    <Section id="problem" kicker={problem.kicker} title={problem.title} intro={problem.intro} tone="wash">
      <div className="grid gap-6 md:grid-cols-3">
        {problem.points.map((p) => (
          <div key={p.title} className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
