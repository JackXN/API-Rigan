const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema(
    {

    }
)

module.exports = mongoose.model('ContactForm', ContactFormSchema);