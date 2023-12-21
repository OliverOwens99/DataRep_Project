import GameItem from "./gameItem";

function Games(props) {
    // Displays the games in a grid format so the  cards are displayed side by side
    return (
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '10px' 
        }}>
            {props.myGames.map((game) => (
                <GameItem myGames={game} key={game._id} reload={props.reload}></GameItem>
            ))}
        </div>
    );
}

export default Games;