// ============================================================================
// PLUG IN HERE: where early access requests are saved.
//
// This is a stub. Replace the body of saveEarlyAccess() with one of:
//   Formspree: POST the fields to your form endpoint (see README).
//   Resend:    send yourself an email with the fields (see README).
//   Database:  insert a row (Postgres, Supabase, Neon, etc.).
// Keep the function signature the same and nothing else needs to change.
//
// What the stub does now:
//   In development (npm run dev): appends each request to .data/early-access.jsonl
//              (git-ignored, because it contains personal details).
//   Hosted (Netlify or any production build): the file system isn't writable,
//              so it only logs the request. You can read it in Netlify under
//              Logs > Functions, but logs expire. Swap in a real destination
//              before you launch.
// ============================================================================

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { EarlyAccessRequest } from "./early-access";

export async function saveEarlyAccess(request: EarlyAccessRequest): Promise<void> {
  const record = { ...request, receivedAt: new Date().toISOString() };

  if (process.env.NODE_ENV === "production") {
    console.log("[early-access]", JSON.stringify(record));
    return;
  }

  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "early-access.jsonl"), JSON.stringify(record) + "\n", "utf8");
}
