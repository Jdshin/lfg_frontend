import {useState, useEffect} from 'react';

function GamePage(props){

    const backend_url = "https://lookingforgroup-jds.herokuapp.com/";

    const [games, setGames] = useState(null);

    const getGamesData = async () => {
        const response = await fetch(backend_url + "api/games");
        const data = await response.json();
        setGames(data);
    }

    useEffect(()=> getGamesData());

    const loaded = () => {
        return games.map((game)=> (
            <div>
                <h1>{game.name}</h1>
                <img src = {game.img} alt="Placeholder" />
            </div>
        ));
    };

    return games ? loaded() : <h1>Loading...</h1>
}

export default GamePage;