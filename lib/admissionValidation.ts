export type AdmissionFormValues = {
  studentName: string;
  grade: string;
  parentName: string;
  phone: string;
  branchPreference: string;
  message: string;
};

export type AdmissionFieldErrors = Partial<Record<keyof AdmissionFormValues, string>>;

const NAME_PATTERN = /^[\p{L}\s.'’-]{2,120}$/u;

function validatePersonName(value: string, label: string): string | undefined {
  const t = value.trim();
  if (!t) return `Enter ${label}.`;
  if (t.length < 2) return `${label} is too short.`;
  if (t.length > 120) return `${label} must be at most 120 characters.`;
  if (!NAME_PATTERN.test(t)) return `Use letters, spaces, and basic punctuation only.`;
  return undefined;
}

export function validateGrade(value: string): string | undefined {
  const t = value.trim();
  if (!t) return "Select the class you are applying for.";
  return undefined;
}

export function validateIndianPhone(value: string): string | undefined {
  const raw = value.trim().replace(/\s+/g, "");
  if (!raw) return "Enter a phone number.";
  let digits = raw;
  if (digits.startsWith("+91")) digits = digits.slice(3);
  else if (digits.startsWith("91") && digits.length === 12) digits = digits.slice(2);
  digits = digits.replace(/-/g, "");
  if (!/^\d{10}$/.test(digits)) {
    return "Enter a valid 10-digit mobile number.";
  }
  if (!/^[6-9]/.test(digits)) {
    return "Mobile number should start with 6, 7, 8, or 9.";
  }
  return undefined;
}

export function validateBranch(value: string): string | undefined {
  if (!value) return "Please select a branch preference.";
  return undefined;
}

export function validateAll(v: AdmissionFormValues): AdmissionFieldErrors {
  const out: AdmissionFieldErrors = {};
  
  const sn = validatePersonName(v.studentName, "student name");
  if (sn) out.studentName = sn;
  
  const g = validateGrade(v.grade);
  if (g) out.grade = g;
  
  const pn = validatePersonName(v.parentName, "parent name");
  if (pn) out.parentName = pn;
  
  const ph = validateIndianPhone(v.phone);
  if (ph) out.phone = ph;
  
  const br = validateBranch(v.branchPreference);
  if (br) out.branchPreference = br;
  
  return out;
}
