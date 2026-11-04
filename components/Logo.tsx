// PLACEHOLDER logo: a simple mark and wordmark until the real logo is ready.
// To swap it, put your file in public/ (e.g. public/logo.svg) and render
// <img src="/logo.svg" alt="Tieout" className="h-7 w-auto" /> here instead.

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" className="fill-accent" />
        <path d="M9 11h14M16 11v12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M11 23h10" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-ink">Tieout</span>
    </span>
  );
}
