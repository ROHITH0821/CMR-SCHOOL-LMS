"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { isEmailJsConfigured, sendEmailJs } from "@/lib/emailjs";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const fireConfetti = () => {
    confetti({
      particleCount: 72,
      spread: 68,
      origin: { y: 0.72 },
      colors: ["#0A2463", "#F5A623", "#FFFFFF"],
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
      if (isEmailJsConfigured() && templateId) {
        await sendEmailJs(templateId, {
          from_name: form.name,
          phone: form.phone,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        });
      }
      fireConfetti();
      setStatus("ok");
    } catch {
      setStatus("err");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-modal border border-border bg-white p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-textSecondary">Name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-1 w-full rounded-card border border-border px-3 py-2 outline-none ring-highlight/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="text-textSecondary">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="mt-1 w-full rounded-card border border-border px-3 py-2 outline-none ring-highlight/30 focus:ring-2"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-textSecondary">Email</span>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="mt-1 w-full rounded-card border border-border px-3 py-2 outline-none ring-highlight/30 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="text-textSecondary">Subject</span>
        <input
          value={form.subject}
          onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
          className="mt-1 w-full rounded-card border border-border px-3 py-2 outline-none ring-highlight/30 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="text-textSecondary">Message</span>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="mt-1 w-full rounded-card border border-border px-3 py-2 outline-none ring-highlight/30 focus:ring-2"
        />
      </label>
      <Button type="submit" variant="gold" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
      {status === "ok" && (
        <p className="text-sm text-success">Message sent. We&apos;ll get back to you soon.</p>
      )}
      {status === "err" && (
        <p className="text-sm text-red-600">
          Something went wrong. Configure EmailJS or try again later.
        </p>
      )}
    </form>
  );
}
