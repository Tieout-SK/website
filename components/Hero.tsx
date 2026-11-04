import { hero } from "@/lib/copy";
import { ProductMock } from "./ProductMock";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_70%_0%,#eff4ff_0%,rgba(255,255,255,0)_100%)]"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl xl:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{hero.subhead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#early-access"
              className="rounded-md bg-accent px-5 py-3 text-center text-base font-medium text-white hover:bg-accent-dark"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#how-it-works"
              className="rounded-md border border-line bg-white px-5 py-3 text-center text-base font-medium text-ink hover:border-slate-300"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <p className="mt-6 text-sm font-medium text-ink">{hero.note}</p>
        </div>
        <ProductMock />
      </div>
    </section>
  );
}
