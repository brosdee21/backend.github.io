// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//    email: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
    type: String, 
    require: true
    },
    lastName: {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        require: true
    },
    phone: {
        type: String
    },
    message: {
        type: String, 
        require: true
    },
    createdAt: {
        type: String, 
        require: true
    },
});

module.exports = mongoose.model("User", userSchema);