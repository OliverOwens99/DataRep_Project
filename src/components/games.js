import BookItem from "./bookItem";

function Books(props) {

    return props.myGames.map(
        (book) => {
            // to display data to the screen from the book item component using  a map function with relaod function for child elements
            return <BookItem myBooks={book} key={book._id} reload={()=>{props.Reload();}}></BookItem>
        }
    );
}

export default Games;