require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const router = require('./routes/router');

app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();