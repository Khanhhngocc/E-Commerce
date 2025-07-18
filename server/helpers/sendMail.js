import nodemailer from "nodemailer";

export function sendMail({email, subject, html}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error sending Email:", error);
            return {success: false, error: error.message}
        } else {
          console.log('Email sent: ' + info.response);
          return {success: true, messageId: info.messageId}
        }
    });
}