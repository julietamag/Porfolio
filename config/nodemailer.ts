import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_FROM;
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO;
const pass = process.env.NEXT_PUBLIC_PASS;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: emailTo,
};
