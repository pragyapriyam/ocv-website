const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: "2a4eab0f5375a6fbb02e8cac0a3832fc-4e034d9e-816dcbd6" || '2a4eab0f5375a6fbb02e8cac0a3832fc-4e034d9e-816dcbd6',
});

app.post('/send-email', async (req, res) => {
  try {
    const domain = 'sandbox0df0533597654396ad2d196b393ad0ff.mailgun.org'; // Replace with your Mailgun domain
    const senderEmail = 'Pragya Priyam <pragyapriyam1@gmail.com>';
    const recipientEmail = ['raymond.ratti@gmail.com']; // Replace with the recipient's email address
    const subject = 'Testing backend code';

    // Extract form data from the request body
    const { firstName, lastName, email, website, message } = req.body;

    // Compose the email text and HTML
    const text = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`;
    const html = `<h1>Contact Details</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Message:</strong> ${message}</p>`;

    await mg.messages.create(domain, {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: text,
      html: html,
    });

    console.log('Email sent successfully!');
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
