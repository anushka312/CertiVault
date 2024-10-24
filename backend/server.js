const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

// Set up SendGrid API Key
sgMail.setApiKey('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'); // Add your SendGrid API Key here

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

let otpStore = {}; // Store OTPs for email addresses

// Send OTP
app.post('/send-otp', (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); 
    const timestamp = Date.now();

    
    const msg = {
        to: email,
        from: 'devesh.00003135516.aesl@gmail.com',// single sender verification email 
        subject: 'Your OTP Code for Verification',
        html: `
            <div style="font-family: Arial, sans-serif; text-align: center; color: #333;">
                <h2 style="color: #4CAF50;">Your OTP Code</h2>
                <p>Use the OTP code below to complete your registration.</p>
                <p style="font-size: 24px; font-weight: bold; color: #333;">${otp}</p>
                <p>This OTP is valid for <strong>5 minutes</strong>.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="color: #999;">If you did not request this, please ignore this email.</p>
            </div>
        `,
    };

    sgMail
        .send(msg)
        .then(() => {
            otpStore[email] = { otp, timestamp }; // Store OTP and timestamp
            console.log('Email sent to:', email);
            res.json({ success: true });
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            res.json({ success: false });
        });
});

// Verify OTP
app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    const currentTime = Date.now(); // Current timestamp
    const storedData = otpStore[email];

    if (!storedData) {
        return res.json({ success: false, message: 'No OTP found for this email.' });
    }

    const { otp: storedOtp, timestamp } = storedData;

    // Check if OTP is within 5 minutes (300000 milliseconds)
    if (currentTime - timestamp > 300000) { // More than 5 minutes
        delete otpStore[email]; // Delete the OTP since it has expired
        return res.json({ success: false, message: 'OTP expired. Please request a new one.' });
    }

    // Check if the OTP matches
    if (storedOtp === parseInt(otp)) {
        delete otpStore[email]; // OTP matched, remove it
        return res.json({ success: true });
    }

    res.json({ success: false, message: 'Invalid OTP. Please try again.' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
