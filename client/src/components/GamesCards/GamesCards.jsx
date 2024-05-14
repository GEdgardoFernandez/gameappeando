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
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        let url = '';
        if (location.pathname === '/home') {
          url = `http://localhost:3001/videogames?page=${currentPage}&pageSize=15`; // Agrega los parámetros de paginación
        } else if (location.pathname === '/genres') {
          url = `http://localhost:3001/genres?page=${currentPage}&pageSize=10`; // Agrega los parámetros de paginación
        }
        const response = await axios.get(url);
        const games = response.data;
        const { totalPages } = response.data
        setTotalPages(totalPages);
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
  const allGames = games.length;
  const gamesPerPage = 15;

  return (
    <div className={style.containerCards}>
      <Pagination
        gamesPerPage={gamesPerPage}
        allVideoGames={allGames}
        totalPages={totalPages}
      />
      {games.map((game) => (
        <CardGame
          key={game.key}
          name={game.name}
          image={game.image}
          genre={game.genres.join(', ')}
        />
      ))}
    </div>
  );
}
