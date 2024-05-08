
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './GamesCards.module.css';
import CardGame from '../CardGame/CardGame';



export default function GamesCards({ param }) {
    const [games, setGames] = useState([]);

    useEffect(() => {
      const fetchGames = async () => {
        try {
          const response = await axios.get('http://localhost:3001/videogames'); // Ruta para obtener los primeros 15 juegos
          setGames(response.data);
        } catch (error) {
          console.error('Error fetching games:', error);
        }
      };
  
      fetchGames();
    }, []);

    return (
        <div className={style.container}>
            {
                games.map(param => (
                    <CardGame key={param.id} name={param.name} image={param.image} genre={param.genre} />
                ))
            }
        </div>
    )
}