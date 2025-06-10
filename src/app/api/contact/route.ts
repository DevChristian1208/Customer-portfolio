// pages/api/contact.ts (TypeScript-Datei)

import { NextApiRequest, NextApiResponse } from 'next';  // Importiere die richtigen Typen
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Überprüfen, ob es eine POST-Anfrage ist
  if (req.method === 'POST') {
    try {
      // Extrahiere die Daten aus dem Request-Body
      const { name, email, phone, message } = req.body;

      // Überprüfen, ob alle Pflichtfelder ausgefüllt sind
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen.' });
      }

      // Erstelle den SMTP-Transporter mit den Umgebungsvariablen
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Definiere die E-Mail-Optionen
      const mailOptions = {
        from: process.env.SMTP_USER,
        replyTo: email,
        to: process.env.SMTP_USER,
        subject: `Neue Nachricht von ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      };

      // Sende die E-Mail
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Mail erfolgreich gesendet!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Fehler beim Verarbeiten.' });
    }
  } else {
    // Wenn es keine POST-Anfrage ist, gib eine Methode-nicht-erlaubt-Antwort zurück
    return res.status(405).json({ error: 'Methode nicht erlaubt' });
  }
}
