// Local development only. The live site sends early access requests to
// Netlify Forms (see components/EarlyAccessForm.tsx and the README).
// Here, each request is appended to .data/early-access.jsonl (git-ignored,
// because it contains personal details).

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
