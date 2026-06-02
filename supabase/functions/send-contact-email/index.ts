import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const TO_EMAIL = "sales@queuefusion.com";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

interface Payload {
  type: "contact" | "reseller";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  // reseller-specific
  website?: string;
  partnerType?: string;
  region?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Payload;

    // Basic validation
    if (!body || (body.type !== "contact" && body.type !== "reseller")) {
      return new Response(JSON.stringify({ error: "Invalid type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const name = (body.name || "").trim().slice(0, 200);
    const email = (body.email || "").trim().slice(0, 320);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Name and valid email required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const host = Deno.env.get("SMTP_HOST")!;
    const port = parseInt(Deno.env.get("SMTP_PORT") || "587", 10);
    const username = Deno.env.get("SMTP_USERNAME")!;
    const password = Deno.env.get("SMTP_PASSWORD")!;
    const from = Deno.env.get("SMTP_FROM") || username;

    const isReseller = body.type === "reseller";
    const subject = isReseller
      ? `New reseller application — ${name}`
      : `New contact form submission — ${name}`;

    const rows: [string, string | undefined][] = isReseller
      ? [
          ["Name", body.name],
          ["Email", body.email],
          ["Phone", body.phone],
          ["Company", body.company],
          ["Website", body.website],
          ["Partner type", body.partnerType],
          ["Region / state", body.region],
          ["Message", body.message],
        ]
      : [
          ["Name", body.name],
          ["Email", body.email],
          ["Phone", body.phone],
          ["Company", body.company],
          ["Message", body.message],
        ];

    const htmlRows = rows
      .filter(([, v]) => v && String(v).trim())
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;color:#444;vertical-align:top">${k}</td><td style="padding:6px 12px;color:#111;white-space:pre-wrap">${escapeHtml(String(v))}</td></tr>`,
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#111">${escapeHtml(subject)}</h2>
        <p style="color:#555">Submitted via queuefusion.com</p>
        <table style="border-collapse:collapse;width:100%;border:1px solid #eee">${htmlRows}</table>
      </div>`;

    const text = rows
      .filter(([, v]) => v && String(v).trim())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const client = new SMTPClient({
      connection: {
        hostname: host,
        port,
        tls: port === 465,
        auth: { username, password },
      },
    });

    await client.send({
      from,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      content: text,
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
