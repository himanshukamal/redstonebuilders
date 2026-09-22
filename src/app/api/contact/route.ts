import { NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Redstone Builders Website";

  if (!apiKey || !toEmail || !senderEmail) {
    console.error("Contact form: BREVO_API_KEY, CONTACT_TO_EMAIL or BREVO_SENDER_EMAIL is not set");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let body: { name?: unknown; phone?: unknown; message?: unknown; enquiryType?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 30) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";
  const enquiryType =
    typeof body.enquiryType === "string" && body.enquiryType.trim()
      ? body.enquiryType.trim().slice(0, 50)
      : "General";

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Name, phone and message are required." }, { status: 400 });
  }

  const htmlContent = `
    <h2>New ${escapeHtml(enquiryType)} enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: toEmail, name: "Redstone Builders" }],
      subject: `New ${enquiryType} enquiry from ${name}`,
      htmlContent,
      textContent: `New ${enquiryType} enquiry\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Brevo request failed", response.status, await response.text());
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
