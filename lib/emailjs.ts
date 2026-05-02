import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function isEmailJsConfigured(): boolean {
  return Boolean(serviceId && publicKey);
}

export async function sendEmailJs(
  templateId: string,
  templateParams: Record<string, string>
): Promise<void> {
  if (!serviceId || !publicKey) {
    throw new Error("EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* env vars.");
  }
  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
