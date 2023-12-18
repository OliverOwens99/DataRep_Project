// Purpose: To display the books that are read using the usestate hook and axios to get the data from the api
import { useEffect, useState } from "react";
import Games from "./games";
import axios from "axios";

function View() {

    const [data, setData] = useState([]);
    //data to be passed to the axios (which is a promise based http client) call to get the data from the api
    useEffect(
        () => {
            axios.get('http://localhost:5000/api/games')
                .then(
                    (response) => {
                         setData(response.data);
                    }
                )
                .catch((error) => console.log(error))
        }, []);

        //to relaod read when changes occur
        const ReloadData = (e) => {
            console.log("Data Reloaded");
            axios.get('http://localhost:5000/api/games')
                .then(
                    (response) => {
                         setData(response.data);
                    }
                )
                .catch((error) => console.log(error))
        };

    return (
        // Read compoentent that dislays to the main react app when called in app.js and also relaods the data when changes occur
        <div>
            <h2>Hello from view  compoent </h2>
            <Games myGames={data} reload={ReloadData}></Games>
        </div>
    );
}
export default View;
