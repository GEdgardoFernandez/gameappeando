import style from './GamesCards.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardGame from '../CardGame/CardGame';
import Pagination from '../Pagination/Pagination';
import { getAllGames } from '../../Redux/Actions';
import Loading from '../Loading/Loading';

export default function GamesCards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  const Allgames = useSelector(state => state.videogames); // Accede al estado de los juegos desde Redux
    // Calcula los juegos actuales
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 15;
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
   
  const games = Allgames.slice(indexOfFirstGame, indexOfLastGame); // Obtiene solo los primeros 15 elementos de la lista de juegos
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