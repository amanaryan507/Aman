


const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { to, subject, text, html } = req.body;

  // Create a transporter object
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // replace with your Gmail address
      pass: 'your-email-password',  // replace with your Gmail password or app password
    },
  });

  // Set up email options
  let mailOptions = {
    from: 'amanaryan507@gmail.com', // sender address
    to: to,                       // list of receivers
    subject: subject,             // Subject line
    text: text,                   // plain text body
    html: html,                   // html body (optional)
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
};