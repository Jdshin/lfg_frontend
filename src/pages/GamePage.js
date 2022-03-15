import {useState, useEffect} from 'react';
import {backend_url, gamesEP} from '../strings/strings';
import {Form, Button, Image } from 'react-bootstrap';
import axiosInstance from '../axiosApi';

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

    const deleteGame = (e) => {
        e.preventDefault();
        try{
            const response = axiosInstance.delete('api/delete/game/' + e.target.id + "/").then((response)=> {
                return response;
            });
        } catch (error) {
            throw error;
        }
    }

    const loaded = () => {
        const gameArr = gameState.map((game, index)=>(
                <div className="container col-6 offset-2" key={index}>
                    <div className="container" key={game.id}>
                        <div>
                            <h1>{game.name}</h1>
                        </div>
                        <div>
                            <Image className="h-50" src={game.img} alt={game.name} fluid />
                        </div>
                    </div>
                    <Form id={game.id} onSubmit={deleteGame}>
                        <Button variant="danger" type="submit">
                            Delete
                        </Button>
                    </Form>
                </div>
        ));
        return gameArr
    };

    return gameState ? loaded() : <h1>Loading...</h1>
}

export default GamePage;