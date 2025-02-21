const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const validator = require('validator');
const Contact = require('../models/Contact');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendContactEmail = (data) => {
    const mailOptions = {
        from: data.email,
        to: process.env.EMAIL_USER,
        subject: 'New Contact Form Submission',
        text: `
            You have received a new contact form submission.

            First Name: ${data.firstname}
            Last Name: ${data.lastname}
            Email: ${data.email}
            Phone: ${data.phone}
            Service: ${data.service}
            Message: ${data.message}
        `,
    };

    return transporter.sendMail(mailOptions);
};

const handleContactForm = async (req, res) => {
    const { firstname, lastname, email, phone, service, message } = req.body;

    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    const emailText = `  
        First Name: ${firstname}  
        Last Name: ${lastname}  
        Email: ${email}  
        Phone: ${phone}  
        Service: ${service}  
        Message: ${message}  
    `;

    try {
        const newContact = new Contact({ firstname, lastname, email, phone, service, message, emailContent: emailText });
        await newContact.save();

        await sendContactEmail({ firstname, lastname, email, phone, service, message });

        return res.status(200).json({ message: 'Contact form submitted successfully.' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong. Please try again.' });
    }
};

module.exports = { handleContactForm };