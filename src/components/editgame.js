import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [gameName, setName] = useState('');
    const [gamePrice, setPrice] = useState('');
    const [gameDescription, setDescription] = useState('');
    const [gameImage, setImage] = useState('');
    const [gameCategory, setCategory] = useState('');
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:5000/api/games/' + id)
            .then((response) => {// Assign Response data to the arrays using useState.
                setName(response.data.gameName);
                setPrice(response.data.gamePrice);
                setDescription(response.data.gameDescription);
                setImage(response.data.gameImage);
                setCategory(response.data.gameCategory);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newGame = {
            id: id,
            gameName: gameName,
            gamePrice: gamePrice,
            gameDescription: gameDescription,
            gameImage: gameImage,
            gameCategory: gameCategory
        };
        axios.put('http://localhost:5000/api/games/' + id, newGame)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Game Name</label>
                    <input type="text" className="form-control" value={gameName} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Edit Game Price</label>
                    <input type="text" className="form-control" value={gamePrice} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Edit Game Description</label>
                    <input type="text" className="form-control" value={gameDescription} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Edit Game Image</label>
                    <input type="text" className="form-control" value={gameImage} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Edit Game Category</label>
                    <input type="text" className="form-control" value={gameCategory} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Game</button>



                </form>
            
        </div>
    );
}
