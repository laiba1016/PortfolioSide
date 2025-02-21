const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const connectDB = require('./database/connect');
const contactRoutes = require('./routes/contactRoutes');
const app = express()
const PORT = process.env.PORT
connectDB();

app.use(express.json())
app.use(cors())
app.use('/', router)
app.use('/api', contactRoutes)

app.listen(PORT, console.log(`server is up and listening on port ${PORT}`));