import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Optional: Simple rate limiting per IP
const MAX_SUBMISSIONS = 5;
const submissions: Record<string, { count: number; last: number }> = {};

async function verifyRecaptcha(token: string) {
  const isProduction = process.env.NODE_ENV === "production";
  const secret = isProduction
    ? process.env.RECAPTCHA_SECRET_KEY // your real production key
    : "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // Google test key

  if (!secret) {
    console.warn("RECAPTCHA_SECRET_KEY not set");
    return false;
  }

  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // Rate limiting
    if (!submissions[ip]) submissions[ip] = { count: 0, last: now };
    if (
      submissions[ip].count >= MAX_SUBMISSIONS &&
      now - submissions[ip].last < 10 * 60 * 1000
    ) {
      return NextResponse.json(
        { message: "Too many requests. Please wait." },
        { status: 429 },
      );
    }
    submissions[ip].count += 1;
    submissions[ip].last = now;

    const body = await request.json();
    const { name, email, phone, company, message, token, honey } = body;

    if (!name || !email || !message || !phone || !token) {
      return NextResponse.json(
        { message: "Missing fields or captcha token" },
        { status: 400 },
      );
    }

    // Honeypot check (block bots)
    if (honey) {
      return NextResponse.json({ message: "Spam detected" }, { status: 400 });
    }

    // Verify Invisible reCAPTCHA token
    const isHuman = await verifyRecaptcha(token);
    console.log(isHuman);
    if (!isHuman) {
      return NextResponse.json(
        { message: "Captcha verification failed" },
        { status: 400 },
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // App Password
      },
    });

    // Email to your team
    const mailToTeam = {
      from: process.env.GMAIL_USER,
      to: "doriisoftware@gmail.com", // system sends to support
      subject: `New Contact Us Message from ${name}`,
      text: `
      New Contact Us Message:

      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Company / Organization: ${company || "Not provided"}
      Message:
      ${message}
        `.trim(),
    };

    // Email confirmation to sender
    const mailToUser = {
      from: process.env.GMAIL_USER,
      to: email, // sender
      subject: `We received your message`,
      text: `Hello ${name},\n\nThank you for contacting us. We will get back to you soon.\n\nYour message:\n${message}`,
    };

    // Send both emails
    await transporter.sendMail(mailToTeam);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
