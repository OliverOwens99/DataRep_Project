
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Games from './games'; // Assuming Games is in the same directory
const WelcomeComponent = () => {


    const [games, setGames] = useState([]);// Replace with actual games from the database

    useEffect(() => {
        axios.get('http://localhost:5000/api/games')
            .then((response) => {
                setGames(response.data.slice(0, 3)); // Fetch the first three games
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            })
    }, []);

    const reloadGames = () => {
        axios.get('http://localhost:5000/api/games')
            .then((response) => {
                setGames(response.data.slice(0, 3)); // Fetch the first three games
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            })
    }

    return (
        <div>
            <h1>Welcome to Wish Cart</h1>
            <h2>Here are the first three games in your wishlist</h2>
            {/* Display the first three games in the wishlist with inline styling */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Games myGames={games} reload={reloadGames} />
            </div>
        </div>
    );
}

export default WelcomeComponent;
