import React, { useState } from 'react';
import axios from 'axios';

function addGame() {
    // gameName: req.body.gameName,
    // gamePrice: req.body.gamePrice,
    // gameDescription: req.body.gameDescription,
    // gameImage: req.body.gameImage,
    // gameCategory: req.body.gameCategory,

    // import the useState hook from react
    const [gameName, setName] = useState('');
    const [gamePrice, setPrice] = useState('');
    const [gameDescription, setDescription] = useState('');
    const [gameImage, setImage] = useState('');
    const [gameCategory, setCategory] = useState('');
    // handles when the form is submitted with arrow function and log it to the console
    const handleSubmit = (e) => {
        e.preventDefault();
        // a log to see if the data is being passed to the console
        console.log("Game Name: " + gameName + " Game Price: " + gamePrice + " Game Description: " + gameDescription + " Game Image: " + gameImage + " Game Category: " + gameCategory);
        // create a game object to be passed to the axios (which is a promise based http client) call to get the data from the api
        const game= {gameName:gameName, gamePrice:gamePrice, gameDescription:gameDescription, gameImage:gameImage, gameCategory:gameCategory};
        axios.post('http://localhost:5000/api/games', game)
        .then()
        .catch();
    };
    return (
        // create compoentent that dislays to the main react app when called in app.js
        <div>
            <h2>Add Game</h2>
            {/* create a form to add a game to the database */} 
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Game Name</label>
                    {/* create a text box to add a game name to the database */}
                    <input type="text" className="form-control" value={gameName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Game Price</label>
                    {/* create a text box to add a game price to the database */}
                    <input type="text" className="form-control" value={gamePrice} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Game Description</label>
                    {/* create a text box to add a game description to the database */}
                    <input type="text" className="form-control" value={gameDescription} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Game Image</label>
                    {/* create a text box to add a game image to the database */}
                    <input type="text" className="form-control" value={gameImage} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Game Category</label>
                    {/* create a text box to add a game category to the database */}
                    <input type="text" className="form-control" value={gameCategory} onChange={(e) => setCategory(e.target.value)} />
                </div>
                {/* create a button to submit the form */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default addGame;
