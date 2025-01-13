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