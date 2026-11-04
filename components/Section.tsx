export function Section({
  id,
  kicker,
  title,
  intro,
  tone = "white",
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  intro?: string;
  tone?: "white" | "wash";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone === "wash" ? "border-y border-line bg-wash" : ""}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent">{kicker}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
