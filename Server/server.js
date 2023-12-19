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

//adding a new game to the database
app.post('/api/games', (req, res) => {

    //create a game object from the model and save it to the database
    gameModel.create({
        gameName: req.body.gameName,
        gamePrice: req.body.gamePrice,
        gameDescription: req.body.gameDescription,
        gameImage: req.body.gameImage,
        gameCategory: req.body.gameCategory,
    })
        .then(() => { res.send('Game is created') })
        .catch(() => { res.send('Game is Not Created') })

});

//finding a game by id
app.get('/api/games/:id', async (req, res) => {
    console.log(req.params.id);

    let game = await gameModel.findById({ _id: req.params.id });
    res.send(game);
});

//Delete a game by id
app.delete('/api/games/:id', async (req, res) => {
    let game = await gameModel.findByIdAndDelete(req.params.id);
    res.send(game);
});

//update a game by id
app.put('/api/games/:id', async (req, res) => {
    console.log("Update: " + req.params.id);

    let game = await gameModel.findByIdAndUpdate(req.params.id, req.body, { new: true },);
    res.send(game);
});



//route /
app.get('/', (req, res) => {    //when the user goes to localhost:5000, run this function

    res.send('Welcome to Wish Cart'); //send a response to the user
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});