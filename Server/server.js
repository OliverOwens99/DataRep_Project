const express = require('express'); // Import express
const app = express(); // Make express app
const port = 5000; // Port for server
const bodyParser = require('body-parser'); // Import body-parser
app.use(bodyParser.json()); // Use Body-parser
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser

// add cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Mongoose

const mongoose = require('mongoose'); // Import mongoose
const Schema = mongoose.Schema; // Define Schema method




//routes
app.get('/', (req, res) => {    //when the user goes to localhost:5000, run this function

    res.send('Welcome to Wish Cart'); //send a response to the user
});