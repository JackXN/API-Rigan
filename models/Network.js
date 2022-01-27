const mongoose = require('mongoose');

const NetworkSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true,},
        lastName: {type: String, required: true},
        image: {type: String, required: false},
        occupation: {type: String, required: true},
       contact: {
           phoneNumber: {type: Number, required: false},
           emailAddress: {type: String, required: false},
           linkedIn: {type: String, required: false},
           instagram: {type: String, required: false},
           twitter: {type: String, required: false},
           discord: {type: String, required: false},
           other: {type: String, required: false},
       },
       notes: {type: String, required: false},
       
    }
)

module.exports = mongoose.model('Network', NetworkSchema);