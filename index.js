const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./src/utils/errorHandlers');
require('dotenv').config();

const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err));


// middleware
app.use(express.json());


// error handler
app.use(errorHandler);
