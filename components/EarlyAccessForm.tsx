"use client";

import { useState } from "react";
import { earlyAccess as copy } from "@/lib/copy";
import { type EarlyAccessRequest, limits, parseEarlyAccess } from "@/lib/early-access";
import { site } from "@/lib/site";

type Errors = Partial<Record<keyof EarlyAccessRequest, string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const inputClass =
  "mt-1.5 block w-full rounded-md border border-line bg-white px-3 py-2.5 text-base text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 aria-[invalid=true]:border-red-500";

function Field({
  name,
  label,
  error,
  optional,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    const parsed = parseEarlyAccess(values);
    if (!parsed.ok) {
      setErrors(parsed.errors);
      const first = Object.keys(parsed.errors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, website: values.website ?? "" }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: Errors };
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        if (json.errors) setErrors(json.errors);
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-ok/30 bg-ok-soft p-6 text-ink">
        <p className="font-semibold">Request submitted</p>
        <p className="mt-1 text-muted">{copy.success}</p>
      </div>
    );
  }

  const describe = (k: keyof EarlyAccessRequest) => (errors[k] ? `${k}-error` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label={copy.fields.name} error={errors.name}>
          <input id="name" name="name" autoComplete="name" required maxLength={limits.short} className={inputClass} aria-invalid={!!errors.name} aria-describedby={describe("name")} />
        </Field>
        <Field name="email" label={copy.fields.email} error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={limits.short} className={inputClass} aria-invalid={!!errors.email} aria-describedby={describe("email")} />
        </Field>
        <Field name="company" label={copy.fields.company} error={errors.company}>
          <input id="company" name="company" autoComplete="organization" required maxLength={limits.short} className={inputClass} aria-invalid={!!errors.company} aria-describedby={describe("company")} />
        </Field>
        <Field name="role" label={copy.fields.role} error={errors.role} optional>
          <input id="role" name="role" autoComplete="organization-title" maxLength={limits.short} className={inputClass} aria-invalid={!!errors.role} aria-describedby={describe("role")} />
        </Field>
      </div>
      <Field name="reconcile" label={copy.fields.reconcile} error={errors.reconcile} optional>
        <textarea
          id="reconcile"
          name="reconcile"
          rows={3}
          maxLength={limits.long}
          placeholder={copy.fields.reconcilePlaceholder}
          className={inputClass}
          aria-invalid={!!errors.reconcile}
          aria-describedby={describe("reconcile")}
        />
      </Field>

      {/* Spam trap: hidden from people, often filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "failed" && (
        <p role="alert" className="text-sm text-red-600">
          {copy.error}{" "}
          <a className="underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-accent px-5 py-3 text-base font-medium text-white hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? copy.submitting : copy.submit}
      </button>
    </form>
  );
}
