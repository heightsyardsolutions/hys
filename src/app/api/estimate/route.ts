import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "heightsyardsolutions@gmail.com";
const FROM_EMAIL = "Heights Yard Solutions <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots tend to fill every field, real users never see this one.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const category = typeof body.category === "string" ? body.category.trim() : "";
  const measurements =
    typeof body.measurements === "string" ? body.measurements.trim() : "";
  const details = typeof body.details === "string" ? body.details.trim() : "";

  if (!name || !phone || !category || !details) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — estimate request could not be sent.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const textLines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email && `Email: ${email}`,
    `Project Category: ${category}`,
    measurements && `Approximate Measurements: ${measurements}`,
    "",
    "Project Details:",
    details,
  ].filter(Boolean);

  const htmlRows = [
    ["Name", name],
    ["Phone", phone],
    email && ["Email", email],
    ["Project Category", category],
    measurements && ["Approximate Measurements", measurements],
  ].filter((row): row is [string, string] => Boolean(row));

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111;">
      <h2 style="margin: 0 0 16px;">New Estimate Request</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        ${htmlRows
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight: bold; vertical-align: top; padding-right: 12px;">${escapeHtml(label)}</td>
            <td>${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="font-weight: bold; margin: 20px 0 4px;">Project Details</p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(details)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `Estimate Request — ${category}`,
      text: textLines.join("\n"),
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending estimate request:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send request." },
      { status: 500 },
    );
  }
}
