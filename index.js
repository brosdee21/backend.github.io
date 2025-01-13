// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const routes = require('routes');
// const dotenv = require('dotenv');

// const Port = 3000;

// dotenv.config();

// //Middleware
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());

// //Mongoose  setup
// mongoose.set('strictQuery', false)
// mongoose.connect(process.env.URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log("Connected to MongoDB");
    
// })
// .catch((err) => {
//     console.log(err);
    
// })

// app.use("/api", routes);

// app.listen(Port, () => console.log(`Server Running on ${Port}`));


// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "nwaokolodennis90@gmail.com",

//         pass: "*******"
//     },
// });

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error); 
//     } else {
//         console.log("Ready to Send");
//     }
// });

// router.post("/contact", (req, res) => {
//     const name = req.body.firtsName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone
//     const mail = {
//         from: name,
//         to: "nwaokolodennis90@gmail.com",
//         subject: "Response to Portfolio",
//         html: `<p>Name: ${name}</p>
//                 <p>Name: ${email}</p>
//                 <p>Name: ${phone}</p>
//                 <p>Name: ${message}</p>`
//     };
//     contactEmail.sendMail(mail, (error) => {
//         if (error) {
//             res.json(error);
//         } else {
//             res.json({ code: 200, status: "Message Sent" });
//         }
//     });
// });

// const contactEmails = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "nwaokolodennis90@gmail.com",
//       pass: "rlpw qisj nlen ztzy"
//     },
//   });

// contactEmail.verify((error, success) => {
//     if (error) {

//         console.error("Verification error:", error);
//     } else {
//         console.log("Ready to Send");
//     }
// });



// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");

// const contactRoutes = require("./Routes/routes");

// dotenv.config();
// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.URL)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.log("MongoDB Connection Error:", err));

// // Routes
// app.use("/api/contact", contactRoutes);

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server Running on Port ${PORT}`);
// });

// app.post('/api/contact', (req, res) => {
//     // Handle the request
//     res.send('Contact endpoint working');
// });

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
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB Connection Error::", err));

// Routes
app.use("/api/contact", contactRoutes); // Ensure this points to the correct routes

// Start Server
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
