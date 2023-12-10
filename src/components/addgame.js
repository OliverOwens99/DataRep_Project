const axios = require('axios');

const addGame = async (gameData) => {
    try {
        const response = await axios.post('/api/games', gameData);
        console.log('Game added successfully:', response.data);
    } catch (error) {
        console.error('Error adding game:', error);
    }
};

// Example usage
const gameData = {
    title: 'New Game',
    platform: 'PS5',
    genre: 'Action',
    releaseYear: 2022
};

export default addGame;
