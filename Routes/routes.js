// const express = require("express");
// const router = express.Router();
// const { sendContactEmail } = require("../controllers/user");

// // Ensure the correct method (POST) and path (/api/contact)
// router.post("/api/contact", sendContactEmail);

// module.exports = router;


const express = require("express");
const { sendEmail } = require("../controllers/user");
const router = express.Router();

router.post("/contact", sendEmail);

module.exports = router;


