
// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

// Routes 
const projectRoute = require('./routes/projects');



dotenv.config();

const PORT = process.env.PORT;

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Access Granted')
})
.catch((error) => {
    console.log(error)
})

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoute);


app.listen(process.env.PORT || 5000,  () => console.log(`Backend server is running on PORT ${PORT}`))