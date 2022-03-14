import {useState, useEffect} from 'react';
import {backend_url, gamesEP} from '../strings/strings';

function GamePage(props){

    const [gameState, setGames] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(backend_url + gamesEP);
        const data = await response.json();
        
        let gameNames = Object.keys(data);

        let newGameState = gameNames.map((key)=>(
            JSON.parse(data[key])
        ));
        setGames(newGameState);
    }

    useEffect( () => {
        getGamesData();
    }, []);

    const loaded = () => {
        const gameArr = gameState.map((game, index)=>(
                <div className="container" key={index}>
                    <div>
                        <h1>{game.name}</h1>
                    </div>
                    <div>
                        <img src={game.img} alt={game.name} />
                    </div>
                </div>
        ));
        return gameArr
    };

    return gameState ? loaded() : <h1>Loading...</h1>
}

export default GamePage;