import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const sheetWebhookUrl = process.env.ADMISSION_SHEET_WEBHOOK_URL;

    console.log("--- New Admission Submission ---");
    console.log("Data:", data);
    console.log("Target URL:", sheetWebhookUrl ? `${sheetWebhookUrl.substring(0, 45)}...` : "UNDEFINED");

    if (!sheetWebhookUrl) {
      console.error("❌ ERROR: ADMISSION_SHEET_WEBHOOK_URL is not configured in .env.local");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    // Send to Google Sheets
    const response = await fetch(sheetWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Google Response Status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error("❌ Google Sheets API error (Status " + response.status + "):", text.substring(0, 500));
      return NextResponse.json({ error: "Failed to save to sheet" }, { status: 502 });
    }

    console.log("✅ Success: Data successfully recorded in Google Sheets");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ CRITICAL ERROR in Admission Route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
