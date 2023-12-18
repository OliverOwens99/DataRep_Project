import { CardBody, CardImg, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// function to represent a single book item
function BookItem(props) {

    return (
        // create a card to display the data to the screen
        <Card style={{ width: '18rem' }}>
            <CardBody>
                {/* this is to display data to the screen */}
                {console.log(props.myGames.title)}
                <CardTitle> Title: {props.myGames.title}</CardTitle>
                <CardTitle>Authors: {props.myGames.authors}</CardTitle>
                <Card.Img variant="top" src={props.myGames.cover}></Card.Img>
            </CardBody>
            {/* edit button to edit a book from the api */}
            <Link to={"/edit/" + props.myGames._id} className='btn btn-primary'>Edit</Link>
            {/* delete button to delete a book from the api */}
            <Button variant="danger" onClick={
                (e) => {
                    axios.delete('http://localhost:4000/api/books/' + props.myGames._id)
                        .then((res)=>{
                            console.log('Game deleted');
                           let reload =  props.reload();
                        })
                        .catch();
                }
            }>Delete</Button>
        </Card>
    );
}

export default GameItem;