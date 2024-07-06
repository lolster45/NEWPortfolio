// pages/api/contact.js

//NextJS...
import type { NextApiRequest, NextApiResponse } from 'next'

//Files...
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


  if (req.method === 'POST') {
    const { name, from, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    });

    try {
      await transporter.sendMail({
        from: from,
        to: process.env.SMTP_USER,
        subject: name,
        text: message,
      });
      
      res.status(200).json({ message: 'Email sent successfully.' });
    } 
    catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }

  } 
  else {
    res.status(405).end(); // Method Not Allowed
  }
}
