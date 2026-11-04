// Shape and checks for an early access request. Used by the form and the API route.

export type EarlyAccessRequest = {
  name: string;
  email: string;
  company: string;
  role: string;
  reconcile: string;
};

export const limits = { short: 200, long: 2000 } as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns the cleaned request, or a map of field name to error message. */
export function parseEarlyAccess(
  input: unknown,
): { ok: true; data: EarlyAccessRequest } | { ok: false; errors: Partial<Record<keyof EarlyAccessRequest, string>> } {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const text = (k: string) => (typeof raw[k] === "string" ? (raw[k] as string).trim() : "");

  const data: EarlyAccessRequest = {
    name: text("name"),
    email: text("email").toLowerCase(),
    company: text("company"),
    role: text("role"),
    reconcile: text("reconcile"),
  };

  const errors: Partial<Record<keyof EarlyAccessRequest, string>> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL.test(data.email)) errors.email = "Please enter a valid work email.";
  if (!data.company) errors.company = "Please enter your company.";
  for (const k of ["name", "email", "company", "role"] as const) {
    if (data[k].length > limits.short) errors[k] = "That's too long.";
  }
  if (data.reconcile.length > limits.long) errors.reconcile = `Please keep this under ${limits.long} characters.`;

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
