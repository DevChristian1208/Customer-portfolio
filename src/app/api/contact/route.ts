import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen.' });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        replyTo: email,
        to: process.env.SMTP_USER,
        subject: `Neue Nachricht von ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      };

      await transporter.sendMail(mailOptions);

      // Erfolgreiche Antwort zurückgeben
      return res.status(200).json({ message: 'Mail erfolgreich gesendet!' });
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      // Fehlerhafte Antwort zurückgeben
      return res.status(500).json({ error: 'Fehler beim Verarbeiten der Anfrage. Bitte versuche es später erneut.' });
    }
  } else {
    // Wenn keine POST-Methode
    return res.status(405).json({ error: 'Methode nicht erlaubt' });
  }
}
