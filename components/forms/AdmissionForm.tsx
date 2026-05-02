"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { isEmailJsConfigured, sendEmailJs } from "@/lib/emailjs";
import { cn } from "@/lib/utils";
import {
  type AdmissionFormValues,
  type AdmissionFieldErrors,
  validateAll,
} from "@/lib/admissionValidation";
import { Send, CheckCircle2, MapPin, GraduationCap, User, Phone, MessageSquare } from "lucide-react";

const CLASSES = [
  "Pre-Primary (Nursery/PP1/PP2)",
  "Grade I - V",
  "Grade VI - VIII",
  "Grade IX - X",
  "Grade XI - XII",
];

const BRANCHES = [
  "Lalgadi Malakpet",
  "Kompally",
  "Suraram",
  "Shampur",
  "Kundanpally",
  "MB Grammar School",
];

export function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState<AdmissionFormValues>({
    studentName: "",
    grade: "",
    parentName: "",
    phone: "",
    branchPreference: "",
    message: "",
  });
  const [errors, setErrors] = useState<AdmissionFieldErrors>({});

  const update = (k: keyof AdmissionFormValues, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => {
      const next = { ...e };
      delete next[k];
      return next;
    });
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0A2463", "#F5A623", "#0DB6B5"],
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validateAll(form);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }

    setPending(true);
    try {
      // 1. Send to EmailJS (Existing logic)
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID;
      if (isEmailJsConfigured() && templateId) {
        await sendEmailJs(templateId, {
          student_name: form.studentName,
          grade: form.grade,
          parent_name: form.parentName,
          phone: form.phone,
          branch_preference: form.branchPreference,
          message: form.message,
        });
      }

      // 2. Send to Google Sheets (Via internal API route to avoid CORS)
      try {
        await fetch("/api/admission", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      } catch (err) {
        console.error("Sheet submission error:", err);
      }

      fireConfetti();
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Still show success to user if at least one service succeeded or if we want to fail gracefully
      setSubmitted(true);
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[2.5rem] border border-[#0DB6B5]/30 bg-white p-12 text-center shadow-2xl"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0DB6B5]/10 text-[#0DB6B5]">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="font-display text-3xl font-bold text-[#0A2463]">Enquiry Submitted!</h3>
        <p className="mt-4 text-gray-500 leading-relaxed">
          Thank you for choosing CMR. Our admissions counselor will contact you <br /> within 24 hours to schedule a campus visit.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2.5rem] border border-gray-100 bg-white p-8 md:p-12 shadow-[0_40px_100px_rgba(10,36,99,0.08)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Field
          id="studentName"
          label="Student Name"
          icon={<User size={18} />}
          value={form.studentName}
          error={errors.studentName}
          onChange={(v) => update("studentName", v)}
          placeholder="Enter full name"
        />
        <div className="space-y-2">
          <label className="text-[11px] font-black uppercase tracking-widest text-[#0A2463]/40 flex items-center gap-2">
            <GraduationCap size={18} />
            Class Applying For
          </label>
          <select
            value={form.grade}
            onChange={(e) => update("grade", e.target.value)}
            className={cn(
              "w-full rounded-2xl border bg-gray-50/50 px-5 py-4 font-body text-sm outline-none transition-all focus:ring-2 focus:ring-[#0DB6B5]/20",
              errors.grade ? "border-red-300" : "border-gray-100 focus:border-[#0DB6B5]"
            )}
          >
            <option value="">Select Class</option>
            {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.grade && <span className="text-[10px] font-bold text-red-500 uppercase">{errors.grade}</span>}
        </div>

        <Field
          id="parentName"
          label="Parent Name"
          icon={<User size={18} />}
          value={form.parentName}
          error={errors.parentName}
          onChange={(v) => update("parentName", v)}
          placeholder="Enter parent/guardian name"
        />
        <Field
          id="phone"
          label="Phone Number"
          icon={<Phone size={18} />}
          value={form.phone}
          error={errors.phone}
          onChange={(v) => update("phone", v)}
          placeholder="10-digit mobile number"
        />

        <div className="space-y-2 md:col-span-2">
          <label className="text-[11px] font-black uppercase tracking-widest text-[#0A2463]/40 flex items-center gap-2">
            <MapPin size={18} />
            Branch Preference
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {BRANCHES.map(branch => (
              <button
                key={branch}
                type="button"
                onClick={() => update("branchPreference", branch)}
                className={cn(
                  "px-4 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all text-center",
                  form.branchPreference === branch
                    ? "bg-[#0A2463] text-white border-[#0A2463] shadow-lg shadow-[#0A2463]/20"
                    : "bg-white text-[#0A2463] border-gray-100 hover:border-[#0DB6B5]/30"
                )}
              >
                {branch}
              </button>
            ))}
          </div>
          {errors.branchPreference && <span className="text-[10px] font-bold text-red-500 uppercase">{errors.branchPreference}</span>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-[11px] font-black uppercase tracking-widest text-[#0A2463]/40 flex items-center gap-2">
            <MessageSquare size={18} />
            Message (Optional)
          </label>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-4 font-body text-sm outline-none transition-all focus:border-[#0DB6B5] focus:ring-2 focus:ring-[#0DB6B5]/20"
            placeholder="Any specific questions or requirements?"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full group flex items-center justify-center gap-3 bg-[#0A2463] text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#F5A623] transition-all shadow-xl shadow-[#0A2463]/10"
      >
        {pending ? "Processing..." : (
          <>
            Register Enquiry
            <Send size={16} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  icon,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black uppercase tracking-widest text-[#0A2463]/40 flex items-center gap-2">
        {icon}
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-2xl border bg-gray-50/50 px-5 py-4 font-body text-sm outline-none transition-all focus:ring-2 focus:ring-[#0DB6B5]/20",
          error ? "border-red-300" : "border-gray-100 focus:border-[#0DB6B5]"
        )}
      />
      {error && <span className="text-[10px] font-bold text-red-500 uppercase">{error}</span>}
    </div>
  );
}
