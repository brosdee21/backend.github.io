// const nodemailer = require("nodemailer");
// const User = require("../models/user");
// require('dotenv').config();

// const contactEmail = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "nwaokolodennis90@gmail.com",
//         pass: "zaqm qfgs phse bewm",
//     },
// });

// // Verify connection configuration
// contactEmail.verify((error) => {
//     if (error) {
//         console.error("Email verification failed:", error);
//     } else {
//         console.log("Ready to Send Emails");
//     }
// });

// // Send contact form email
// exports.sendContactEmail = async (req, res) => {
//     try {
//         const { firstName, lastName, email, phone, message } = req.body;

//         // Create a new user/contact entry in the database
//         const newUser = new User({
//             firstName,
//             lastName,
//             email,
//             phone,
//             message,
//         });

//         await newUser.save(); // Save to the database

//         // Setup email options
//         const mail = {
//             from: `${firstName} ${lastName} <${email}>`,
//             to: "nwaokolodennis90@gmail.com",
//             subject: "New Contact Form Submission",
//             html: `
//                 <h3>Contact Form Details</h3>
//                 <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Phone:</strong> ${phone}</p>
//                 <p><strong>Message:</strong> ${message}</p>
//             `,
//         };

//         // Send email
//         contactEmail.sendMail(mail, (error) => {
//             if (error) {
//                 console.error("Failed to send email:", error);
//                 return res.status(500).json({ status: "Fail", error });
//             }
//             res.status(200).json({ status: "Success", message: "Email Sent Successfully!" });
//         });
//     } catch (err) {
//         console.error("Error:", err.message);
//         res.status(500).json({ status: "Fail", error: err.message });
//     }
// };

const Contact = require("../models/user");
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Save the contact form data to the database
    const contact = new Contact({ firstName, lastName, email, phone, message });
    await contact.save();

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USER, // Your receiving email address
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again later." });
  }
};

module.exports = { sendEmail };
