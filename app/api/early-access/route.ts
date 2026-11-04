import { NextResponse } from "next/server";
import { parseEarlyAccess } from "@/lib/early-access";
import { saveEarlyAccess } from "@/lib/store";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Hidden "website" field: people never see it, bots often fill it in.
  // Pretend it worked so the bot moves on, but don't save anything.
  if (typeof body === "object" && body !== null && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseEarlyAccess(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 422 });
  }

  try {
    await saveEarlyAccess(parsed.data);
  } catch (err) {
    console.error("[early-access] save failed", err);
    return NextResponse.json({ ok: false, error: "Could not save your request." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
