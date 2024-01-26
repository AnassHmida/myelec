

    const nodemailer = require('nodemailer');

    export default async function handler(req, res) {
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
      }
    
      try {
        const { name, email, message } = req.body;
    
        // Gmail email configuration (replace with your own credentials)
        const gmailEmail = 'myelecmc@gmail.com';
        const gmailPassword = 'flkf xeby gvwe rlrh';
    
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailEmail,
            pass: gmailPassword,
          },
        });
    
        const mailOptions = {
          from: gmailEmail,
          to: gmailEmail, 
          subject: `MyElec website : ${name} - ${email}`,
          text: `The user ${name} with email ${email} sent you this message: ${message}`, 
        };
    
        await transporter.sendMail(mailOptions);
    
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email.' });
      }
    }
    