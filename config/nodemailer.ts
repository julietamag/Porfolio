import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_FROM;
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO;
const pass = process.env.NEXT_PUBLIC_PASS;

export const mailOptions = {
  from: email,
  to: emailTo,
};

export const transporter = nodemailer.createTransport({
  host: process.env.NEXT_SMTP_HOST,
  port: Number(process.env.NEXT_SMTP_PORT),
  auth: {
    user: email,
    pass: pass,
  },
});