const express = require('express'); // Import express
const app = express(); // Make express app
const port = 5000; // Port for server
// add body-parser
const bodyParser = require('body-parser'); // Import body-parser
app.use(bodyParser.json()); // Use Body-parser
app.use(bodyParser.urlencoded({ extended: false })); // Use body-parser
//finding the build folder
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

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

//connecting to the database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.8c7ngnf.mongodb.net/?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//schema for Games
const GameSchema = new mongoose.Schema({
    gameName: String,
    gamePrice: String,
    gameDescription: String,
    gameImage: String,
    gameCategory: String,

});


const gameModel = mongoose.model('games', GameSchema);

//adding a book to the database with a promise
app.post('/api/games', (req, res) => {

    // console.log(req.body.title);
    // console.log(req.body.authors);
    // console.log(req.body.cover);

    //create a book object to be passed to the axios (which is a promise based http client) call to get the data from the api
    gameModel.create({
        gameName: req.body.gameName,
        gamePrice: req.body.gamePrice,
        gameDescription: req.body.gameDescription,
        gameImage: req.body.gameImage,
        gameCategory: req.body.gameCategory,
    })
        .then(() => { res.send('Book Created') })
        .catch(() => { res.send('Book Not Created') })

});




//routes
app.get('/', (req, res) => {    //when the user goes to localhost:5000, run this function

    res.send('Welcome to Wish Cart'); //send a response to the user
});