const mongoose = require('mongoose');

const NetworkSchema = new mongoose.Schema(
    {
        id: {type: Number, required: true, unique: true},
        firstName: {type: String, required: true,},
        lastName: {type: String, required: true},
        occupation: {type, String, required: true},
       contact: {
           phoneNumber: {type: Number, required: false},
           emailAddress: {type: String, required: false},
           linkedIn: {type: String, required: false},
           instagram: {type: String, required: false},
           twitter: {type: String, required: false},
       }


    }
)

module.exports = mongoose.model('Network', NetworkSchema);