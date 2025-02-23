const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const express = require('express');
const connectDB = require('./database/connect');
const contactRoutes = require('./routes/contactRoutes');
const app = express()
const PORT = process.env.PORT
connectDB();

app.use(express.json())

// app.use(cors({
//     origin: [
//         "http://localhost:3000",
//         "https://portfolio-side-one.vercel.app"
//     ],
//     credentials: true,
// }));
app.use('/api', contactRoutes)

app.listen(PORT, console.log(`server is up and listening on port ${PORT}`));