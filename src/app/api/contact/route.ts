// /src/app/api/contact/route.ts

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parsing the request body to get the data
    const data = await req.json();  // Using req.json() for Next.js 13+ routes
    const { name, email, phone, message } = data;

    // Validate if all mandatory fields are provided
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Bitte alle Pflichtfelder ausfüllen.' }),
        { status: 400 }
      );
    }

    // Create the nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // SMTP Host, z.B. smtp.strato.de
      port: Number(process.env.SMTP_PORT), // SMTP Port, z.B. 465 (SSL) oder 587 (TLS)
      secure: process.env.SMTP_SECURE === 'true',  // Secure connection (SSL)
      auth: {
        user: process.env.SMTP_USER,   // E-Mail-Adresse für den SMTP-Server
        pass: process.env.SMTP_PASS,   // SMTP-Passwort
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.SMTP_USER,  // E-Mail, von der die Nachricht gesendet wird
      replyTo: email,               // E-Mail des Absenders (für Antworten)
      to: process.env.SMTP_USER,    // Die E-Mail-Adresse, an die die Nachricht gesendet wird
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,  // Der Text der E-Mail
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: 'Mail erfolgreich gesendet!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Fehler beim Verarbeiten.' }),
      { status: 500 }
    );
  }
}
