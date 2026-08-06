require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// app.get("/", (req, res) => {
//   res.send("Backend Running...");
// });
app.post("/send-mail", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: to || process.env.EMAIL, 
      subject: subject || "Test Email",
      text: text || "Hello! This is a test email.",
    });

    // Always return JSON for API consistency
    return res.status(200).json({ success: true, message: "Email Sent Successfully!" });
  } catch (err) {
    console.error("Mail Error:", err);
    // Returning a status code prevents the server from hanging or crashing
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});