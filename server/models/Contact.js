const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    emailContent: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
