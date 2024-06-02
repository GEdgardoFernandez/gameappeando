import style from './GamesCards.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardGame from '../CardGame/CardGame';
import Pagination from '../Pagination/Pagination';
import { getAllGames } from '../../Redux/Actions';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';
import OrderGenre from '../OrderGenre/OrderGenre.jsx';

export default function GamesCards() {
  const dispatch = useDispatch();
  const Allgames = useSelector(state => state.filteredGames);
  console.log(Allgames)
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const games = Allgames.slice(indexOfFirstGame, indexOfLastGame);
  console.log(games)
  // Cambia de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (games.length === 0) {

    return <div>
      <Loading />
    </div>
  }
  return (

    <div className={style.containerCards}>
      <div className={style.containerSearch}>
        <SearchBar />
        <OrderGenre />
      </div>
      {/* Verificar si la lista de juegos está definida antes de mapearla */}
      {games?.map(g => (
        <CardGame
          key={g.id} // Asegúrate de incluir una clave única para cada elemento en el array mapeado
          id={g.id}
          name={g.name}
          image={g.image}
          rating={g.rating}
          genre={g.genres?.join(', ')}
        />
      ))}
      <div>
        <Pagination
          gamesPerPage={gamesPerPage}
          totalGames={Allgames.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>

  );
}