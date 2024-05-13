import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './GamesCards.module.css';
import CardGame from '../CardGame/CardGame';
import Pagination from '../Pagination/Pagination';
import { useLocation } from 'react-router-dom';

export default function GamesCards() {
  const location = useLocation();
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        let url = '';
        if (location.pathname === '/home') {
          url = `http://localhost:3001/videogames?page=${currentPage}&pageSize=20`; // Agrega los parámetros de paginación
        } else if (location.pathname === '/genres') {
          url = `http://localhost:3001/genres?page=${currentPage}&pageSize=20`; // Agrega los parámetros de paginación
        }
        const response = await axios.get(url);
        const games = response.data;
        setGames(games);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, [location.pathname, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.containerCards}>
      {games.map((param) => (
                <CardGame
                  key={param.key}
                  name={param.name}
                  image={param.background_image}
                  genre={param.genres.map((genre) => genre.name)}
                />
      ))}
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={5} />
    </div>
  );
}
