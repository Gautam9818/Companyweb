// netlify/functions/send-email.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Configure your SMTP transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // replace with your SMTP server
    port: 587,
    secure: false,
    auth: {
      user: 'Rangergoku1@Gmail.com',
      pass: 'Gautamlegend15'
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'Rangergoku1@Gmail.com', // your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    return { statusCode: 200, body: 'Message sent successfully!' };
  } catch (error) {
    return { statusCode: 500, body: 'Message sending failed. Please try again later.' };
  }
};
