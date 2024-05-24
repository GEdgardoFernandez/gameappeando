import style from './GamesCards.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardGame from '../CardGame/CardGame';
import Pagination from '../Pagination/Pagination';
import { getAllGames } from '../../Redux/Actions';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

export default function GamesCards() {
  const dispatch = useDispatch();
  const Allgames = useSelector(state => state.filteredGames);
  console.log(Allgames)
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const games = [];
  if (Array.isArray(Allgames)){
    games = Allgames.slice(indexOfFirstGame, indexOfLastGame);
    return games
  };
  console.log(games)
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  // Cambia de página
  const paginate = pageNumber => setCurrentPage(pageNumber);
  if (games.length === 0) {

    return <div>
      <Loading />
    </div>
  }
  return (

    <div className={style.containerCards}>
      <div>
        <SearchBar />
      </div>
      {/* Verificar si la lista de juegos está definida antes de mapearla */}
      {games?.map(g => (
        <CardGame
          key={g.id} // Asegúrate de incluir una clave única para cada elemento en el array mapeado
          id={g.id}
          name={g.name}
          image={g.image}
          genre={g.genres.join(', ')}
        />
      ))}
      <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={Allgames.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>

  );
}