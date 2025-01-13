const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const contactRoutes = require("./Routes/routes"); // Assuming this file contains your /api/contact handlers

dotenv.config();
const app = express();
const PORT = 3001;

// Middleware

const corsOption ={
    origin:"*",methods:['POST'],
}
app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB Connection Error::", err));

// Routes
app.use("/api", contactRoutes); // Ensure this points to the correct routes

// Start Server
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
