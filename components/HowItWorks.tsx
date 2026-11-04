import { howItWorks } from "@/lib/copy";
import { Section } from "./Section";

const icons = [
  // Raw data
  <path key="0" d="M4 6h16M4 12h16M4 18h10" />,
  // History
  <path key="1" d="M12 7v5l3 2M3.5 12a8.5 8.5 0 1 0 2.5-6M3 4v4h4" />,
  // Approval
  <path key="2" d="M5 12.5l4.5 4.5L19 7.5" />,
  // Every cycle
  <path key="3" d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4" />,
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" kicker={howItWorks.kicker} title={howItWorks.title}>
      <ol className="grid gap-4 md:grid-cols-4 md:gap-0">
        {howItWorks.steps.map((s, i) => {
          const last = i === howItWorks.steps.length - 1;
          return (
            <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-0 md:pr-8">
              {/* Connector: vertical on mobile, horizontal on desktop */}
              {!last && (
                <>
                  <span aria-hidden="true" className="absolute left-5 top-12 h-[calc(100%-2rem)] w-px bg-slate-300 md:hidden" />
                  <span aria-hidden="true" className="absolute left-12 right-3 top-5 hidden h-px bg-slate-300 md:block" />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    className="absolute right-2 top-[15px] hidden h-2.5 w-2.5 text-slate-400 md:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 1l4 4-4 4" />
                  </svg>
                </>
              )}
              <span
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                  i === 2 ? "border-accent bg-accent text-white" : "border-line bg-white text-accent"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[i]}
                </svg>
              </span>
              <div className="pb-6 md:pb-0 md:pt-5">
                <p className="text-xs font-semibold text-muted">Step {i + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
