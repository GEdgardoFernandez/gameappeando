
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './GamesCards.module.css';
import CardGame from '../CardGame/CardGame';
import { useLocation } from 'react-router-dom';

export default function GamesCards(param) {
  const [games, setGames] = useState([]);
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === '/home') {
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
    } else if (location.pathname === '/genres') {
      const fetchGames = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/genres`);
          const genres = response.data;
          setGames(genres.games);
          console.log(genres)
        } catch (error) {
          console.error('Error fetching games:', error);
        }
      };
      fetchGames();
    }


  }, [location.pathname]);
  console.log(games.genres)
  return (
    <div className={style.containerCards}>
      {
        games.map((param) => (

          <CardGame key={param.id} name={param.name} image={param.background_image} genre={param.genres.name} />
        ))
      }
    </div>

  )
}