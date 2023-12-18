import BookItem from "./bookItem";

function Games(props) {

    return props.myGames.map(
        (game) => {
            // to display data to the screen from the book item component using  a map function with reload function for child elements
            return <GameItem myBooks={game} key={game._id} reload={()=>{props.reload();}}></GameItem>
        }
    );
}

export default Games;