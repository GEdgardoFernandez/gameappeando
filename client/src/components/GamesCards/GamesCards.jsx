
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './GamesCards.module.css';
import CardGame from '../CardGame/CardGame';
import { Link } from 'react-router-dom';


export default function GamesCards( param ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/videogames`);
        const games = response.data;
        setGames(games);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);
  console.log(games.genres)
  return (
    <div className={style.containerCards}>
      {
        
        games.map((game) => (
          
          <CardGame key={game.id} name={game.name} image={game.background_image } genre={game.genres.name} />
        ))
      }
    </div>

  )
}