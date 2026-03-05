import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX_SUBMISSIONS = 5;
const submissions: Record<string, { count: number; last: number }> = {};

async function verifyRecaptcha(token: string) {
  const isProduction = process.env.NODE_ENV === "production";

  const secret = isProduction
    ? process.env.RECAPTCHA_SECRET_KEY
    : "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

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

    const { name, email, phone, date, time, mode, notes, token, honey } = body;

    if (!name || !email || !phone || !date || !time || !mode || !token) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    if (honey) {
      return NextResponse.json({ message: "Spam detected" }, { status: 400 });
    }

    const isHuman = await verifyRecaptcha(token);

    if (!isHuman) {
      return NextResponse.json(
        { message: "Captcha verification failed" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailToTeam = {
      from: process.env.GMAIL_USER,
      to: "doriisoftware@gmail.com",
      subject: `New Free Consultation Booking`,
      text: `
New Consultation Request

Name: ${name}
Email: ${email}
Phone: ${phone}

Appointment Date: ${date}
Appointment Time: ${time}

Mode: ${mode}

Notes:
${notes || "No additional notes"}
      `.trim(),
    };

    const mailToUser = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Your Consultation Request Received`,
      text: `Hello ${name},

Thank you for scheduling a consultation with us.

Your Appointment Details:

Date: ${date}
Time: ${time}
Mode: ${mode}

Our team will contact you soon to confirm the meeting.

Best regards,
Dorii Software Team`,
    };

    await transporter.sendMail(mailToTeam);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({
      message: "Consultation booked successfully",
    });
  } catch (error) {
    console.error("Consultation email error:", error);

    return NextResponse.json(
      { message: "Failed to send consultation request" },
      { status: 500 },
    );
  }
}
