const nodemailer = require('nodemailer');
require('dotenv').config()

class WelcomeEmailSender {
  constructor() {
    // Create a transporter with your email service provider details
    console.log("constructor")
    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:  process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD 
        }
    });
    console.log(2)
  }


  sendWelcomeEmail(userEmail, userName) {
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: userEmail,
      subject: 'Welcome to WeCanTalk!',
      text: `Dear ${userName},\n\nWelcome to WeCanTalk! We're thrilled to have you as part of our community.\n\nYour account has been successfully created, and you're now ready to explore all the exciting features we have to offer.\n\nIf you have any questions or need assistance, feel free to reach out to  ${process.env.MAIL_USER}\n\nBest regards,\nThe WeCanTalk Team`
    };

    console.log("process.env.MAIL_USER: "+process.env.MAIL_USER)
    console.log(mailOptions)

    // Send the email
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending welcome email:', error);
      } else {
        console.log('Welcome email sent:', info.response);
      }
    });
  }
}

module.exports = WelcomeEmailSender;
