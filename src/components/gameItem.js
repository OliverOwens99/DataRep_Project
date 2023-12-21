import { CardBody, CardImg, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// function to represent a single game item



function GameItem(props) {

    return (
        // create a card to display the data to the screen
        <Card style={{ width: '55rem' }}>
            <CardBody>
                {/* this is to display data to the screen */}
                {console.log(props.myGames.gameName)}
                <Card.Img variant="top" src={props.myGames.gameImage} style={{ height: '75%' }} ></Card.Img>
                <CardTitle> Title: {props.myGames.gameName}</CardTitle>
                <CardTitle>Price: €{props.myGames.gamePrice}</CardTitle>
                <CardTitle>Description: {props.myGames.gameDescription}</CardTitle>
                <CardTitle>Category: {props.myGames.gameCategory}</CardTitle>
            </CardBody>
            {/* edit button to edit a game from the api */}
            <Link to={"/edit/" + props.myGames._id} className='btn btn-primary'>Edit</Link>
            {/* delete button to delete a game from the api */}
            <Button variant="danger" onClick={
                (e) => {
                    axios.delete('http://localhost:5000/api/games/' + props.myGames._id)
                        .then((res) => {
                            console.log('Game deleted');
                            let reload = props.reload();
                        })
                        .catch();
                }
            }>Delete</Button>
        </Card>
    );
}

export default GameItem;