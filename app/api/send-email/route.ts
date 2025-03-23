import { Email } from '@/components/EmailComposition';
import { NextResponse } from 'next/server';
import path from 'path';
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

const mailGenerator = new Mailgen({
  theme: {
    path: path.resolve("public/assets/default.html"),
    plaintextPath: path.resolve("public/assets/theme.txt"),
  },
  product: {
    name: "DK EXPORTING",
    link: 'www.dkexporting.com',
    logo: ''
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = Email(body.name, body.email, body.phone, body.message);
    const emailBody = mailGenerator.generate(email.styledEmail);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `DK EXPORTING <${process.env.EMAIL_FROM}>`,
      to: body.email,
      subject: "Your Enquiry Has Been Received",
      html: emailBody,
    });

    await transporter.sendMail({
      from: `DK EXPORTING <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Enquiry Received",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json({ message: "Emails Sent Successfully" }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
