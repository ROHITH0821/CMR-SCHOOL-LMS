"use client";

import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { Button } from "@/components/ui/Button";

export function PortalClient() {
  const auth = getFirebaseAuth();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, setUser);
  }, [auth]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!auth) {
      setError("Firebase is not configured. Add NEXT_PUBLIC_FIREBASE_* environment variables.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Could not sign in. Check credentials and Firebase configuration.");
    }
  };

  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  if (!auth) {
    return (
      <div className="rounded-modal border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
        Parent portal requires Firebase Auth. Set <code className="font-mono">NEXT_PUBLIC_FIREBASE_*</code> in your
        environment.
      </div>
    );
  }

  if (!user) {
    return (
      <form onSubmit={login} className="mx-auto max-w-md space-y-4 rounded-modal border border-border bg-white p-8 shadow-soft">
        <h2 className="font-display text-2xl text-primary">Parent login</h2>
        <label className="block text-sm">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-card border border-border px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-card border border-border px-3 py-2"
          />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" variant="gold">
          Sign in
        </Button>
      </form>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-body text-textSecondary">
          Signed in as <strong className="text-primary">{user.email}</strong>
        </p>
        <Button type="button" variant="outlineDark" onClick={logout}>
          Log out
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DashboardCard title="Attendance (monthly)">
          <div className="flex h-36 items-end justify-between gap-2">
            {[8, 12, 10, 14, 9, 11, 13].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-highlight/80"
                  style={{ height: `${h * 6}px` }}
                />
                <span className="text-[10px] text-textMuted">W{i + 1}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
        <DashboardCard title="Upcoming tests">
          <ul className="space-y-2 text-sm text-textSecondary">
            <li>Unit test — Mathematics · Apr 8</li>
            <li>Science practical · Apr 12</li>
            <li>Second language oral · Apr 18</li>
          </ul>
        </DashboardCard>
        <DashboardCard title="Latest results">
          <p className="text-sm text-textSecondary">Term 1 report card available.</p>
          <button type="button" className="mt-3 text-sm font-semibold text-highlight hover:underline">
            Download PDF
          </button>
        </DashboardCard>
        <DashboardCard title="Enquiry status">
          <p className="text-sm text-gray-600">For fee structure details, please call us or visit your nearest CMR campus.</p>
        </DashboardCard>
        <DashboardCard title="Circulars" className="md:col-span-2">
          <ul className="space-y-2 text-sm">
            {["Holiday list 2026", "Transport route update", "PTM schedule", "Lab safety guidelines"].map((c) => (
              <li key={c} className="flex justify-between border-b border-border py-2">
                <span>{c}</span>
                <span className="text-highlight">PDF</span>
              </li>
            ))}
          </ul>
        </DashboardCard>
        <DashboardCard title="Teacher remarks" className="md:col-span-2">
          <p className="text-sm text-textSecondary italic">
            “Consistent effort in group projects; continue reading beyond the syllabus.”
          </p>
          <p className="mt-2 text-xs text-textMuted">— Class teacher · Mar 20, 2026</p>
        </DashboardCard>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-modal border border-border bg-white p-5 shadow-soft ${className ?? ""}`}>
      <h3 className="font-display text-lg text-primary">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
