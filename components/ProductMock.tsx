// An illustrative product view built in HTML and CSS. All figures are sample data.

type Row = { id: string; servicer: string; report: string; status: "matched" | "flagged"; note?: string };

const rows: Row[] = [
  { id: "L-10231", servicer: "1,204.17", report: "1,204.17", status: "matched" },
  { id: "L-10232", servicer: "862.50", report: "862.50", status: "matched" },
  { id: "L-10245", servicer: "1,530.00", report: "0.00", status: "flagged", note: "Charged off Sep 14" },
  { id: "L-10251", servicer: "418.92", report: "418.92", status: "matched" },
  { id: "L-10260", servicer: "995.40", report: "985.40", status: "flagged", note: "Differs by 10.00" },
];

function Status({ row }: { row: Row }) {
  if (row.status === "matched") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-ok-soft px-1.5 py-0.5 sm:px-2 text-[11px] font-medium text-ok">
        <span aria-hidden="true">✓</span> Matched
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-warn-soft px-1.5 py-0.5 sm:px-2 text-[11px] font-medium text-warn">
      <span aria-hidden="true">!</span> Flagged
    </span>
  );
}

export function ProductMock() {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
        <div className="flex items-center justify-between gap-3 border-b border-line bg-wash px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <p className="truncate text-xs font-medium text-muted">October 2026 · Interest accrued</p>
        </div>

        <div className="grid grid-cols-3 divide-x divide-line border-b border-line text-center">
          {[
            ["4,812", "Rows"],
            ["4,797", "Matched"],
            ["15", "Flagged"],
          ].map(([n, label]) => (
            <div key={label} className="px-2 py-3">
              <p className="font-mono text-base font-medium text-ink">{n}</p>
              <p className="text-[11px] text-muted">{label}</p>
            </div>
          ))}
        </div>

        {/* Bottom padding leaves room for the rule card that overlaps the window's edge. */}
        <div className="overflow-x-auto pb-6 sm:pb-8">
          <table className="w-full text-left text-xs">
            <thead className="text-[11px] text-muted">
              <tr className="border-b border-line">
                <th scope="col" className="px-3 py-2 font-medium sm:px-4">Loan</th>
                <th scope="col" className="px-1.5 py-2 text-right font-medium sm:px-2">Servicer file</th>
                <th scope="col" className="px-1.5 py-2 text-right font-medium sm:px-2">Last report</th>
                <th scope="col" className="px-3 py-2 font-medium sm:px-4">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[11px] sm:text-xs">
              {rows.map((r) => (
                <tr key={r.id} className={`border-b border-line last:border-0 ${r.status === "flagged" ? "bg-warn-soft/40" : ""}`}>
                  <td className="whitespace-nowrap px-3 py-2.5 text-ink sm:px-4">
                    {r.id}
                    {r.note && <span className="block font-sans text-[10px] text-warn">{r.note}</span>}
                  </td>
                  <td className="whitespace-nowrap px-1.5 py-2.5 text-right sm:px-2 text-ink">{r.servicer}</td>
                  <td className="whitespace-nowrap px-1.5 py-2.5 text-right sm:px-2 text-ink">{r.report}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-sans sm:px-4">
                    <Status row={r} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative mx-3 -mt-4 rounded-xl border border-accent/25 bg-white p-4 shadow-[0_16px_40px_-18px_rgba(29,78,216,0.45)] sm:mx-8 sm:-mt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">Rule proposed</p>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
            Awaiting approval
          </span>
        </div>
        <p className="mt-2 text-sm leading-snug text-ink">
          <span className="font-mono text-xs text-muted">R-14 </span>
          Leave a loan out of Interest accrued when it was charged off before the first day of the period.
        </p>
        <p className="mt-2 text-xs text-muted">Reproduces 11 of 12 past signed-off months.</p>
        <div className="mt-3 flex gap-2" aria-hidden="true">
          <span className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-white">Approve</span>
          <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-ink">Edit</span>
          <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-ink">Reject</span>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-muted">Illustrative example with sample data.</figcaption>
    </figure>
  );
}
