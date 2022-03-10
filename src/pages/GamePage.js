import {useState, useEffect} from 'react';

function GamePage(props){

    const backend_url = "https://lookingforgroup-jds.herokuapp.com/";

    const [gameState, setGames] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(backend_url + "api/games");
        const data = await response.json();
        
        let gameNames = Object.keys(data);

        let newGameState = gameNames.map((key)=>(
            JSON.parse(data[key])
        ));
        setGames(newGameState);
    }

    useEffect(()=> getGamesData());

    const loaded = () => {
        return (
            gameState.map((game)=>(
                <div class="container">
                    <div>
                        <h1>{game.name}</h1>
                    </div>
                    <div>
                        <img src={game.img} alt={game.name} />
                    </div>
                </div>
            ))
        );
    };

    return gameState ? loaded() : <h1>Loading...</h1>
}

export default GamePage;