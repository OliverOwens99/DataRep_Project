import React from 'react';

const WelcomeComponent = () => {
    const games = ['Game 1', 'Game 2', 'Game 3']; // Replace with actual games from the database

    return (
        <div>
            <h1>Welcome to Wish Cart</h1>
            <h2>Games in the Database:</h2>
            <ul>
                {games.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </div>
    );
};

export default WelcomeComponent;
