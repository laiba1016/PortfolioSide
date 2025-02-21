const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    firstname: {
        type: 'string',
        required: true,
    },
    lastname: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
        minlength: [8, 'Password must be at least 8 characters']
    },
})

const authModel = mongoose.model('Auth', AuthSchema)

module.exports = authModel;