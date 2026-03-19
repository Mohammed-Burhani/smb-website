import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, company, phone, email, product, message } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const ownerHtml = `
    <h2>New Inquiry from SMB Fitting Website</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Company</strong></td><td>${company || "—"}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email || "—"}</td></tr>
      <tr><td><strong>Product</strong></td><td>${product || "—"}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
    </table>
  `;

  const userHtml = `
    <h2>Thank you for reaching out, ${name}!</h2>
    <p>We've received your inquiry and will get back to you shortly.</p>
    <h3>Your Submission Details</h3>
    <table cellpadding="8" style="border-collapse:collapse;width:100%">
      ${company ? `<tr><td><strong>Company</strong></td><td>${company}</td></tr>` : ""}
      <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
      ${product ? `<tr><td><strong>Product Interest</strong></td><td>${product}</td></tr>` : ""}
      ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ""}
    </table>
    <br/>
    <p style="color:#666;font-size:13px;">SMB Fitting Industry &mdash; Thiruvottiyur High Road, Tondiarpet, Chennai – 600081</p>
  `;

  const sends = [
    transporter.sendMail({
      from: `"SMB Fitting Industry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Inquiry from ${name}`,
      html: ownerHtml,
    }),
  ];

  if (email) {
    sends.push(
      transporter.sendMail({
        from: `"SMB Fitting Industry" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We received your inquiry – SMB Fitting Industry",
        html: userHtml,
      })
    );
  }

  await Promise.all(sends);

  return NextResponse.json({ success: true });
}
