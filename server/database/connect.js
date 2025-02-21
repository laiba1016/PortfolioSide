const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log(`Database connection established with ${mongoose.connection.host}`)
    }).catch(err => {
        console.log(`Error Occured in connection ${err}`)
    })
}
module.exports = connectDB