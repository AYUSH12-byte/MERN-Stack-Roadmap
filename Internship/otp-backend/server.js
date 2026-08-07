const express = require("express");
const app = express();
const PORT = 3000;
const nodemailer = require("nodemailer");
require("dotenv").config();
// Middleware to parse incoming JSON payloads
app.use(express.json());

console.log(process.env.EMAIL);
console.log(process.env.PASSWORD);

let otp = "5432";

const sendEmail = async (name, email, message) => {
  console.log(name, email, message);

  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // 2. Define email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: email, // Where you want to receive the mail
    subject: `New Message from ${name}`,
    text: message,
  };

  // 3. Send the mail
  try {
    await transporter.sendMail(mailOptions);
    return console.log("successful ");
  } catch (error) {
    console.log(error);
  }
};

// POST route responding with Hello
app.post("/otp", (req, res) => {
  // const { name, email, message } = req.body;

  sendEmail("to verify email", "achy93858@gmail.com", otp);
  res.send("Email sent successfully!");
});

// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
