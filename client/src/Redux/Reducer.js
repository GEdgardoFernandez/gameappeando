import {
  GET_ALL_GAMES,
  GET_GAME_ID,
  GET_GAME_NAME,
  CREATE_GAME,
  GET_GENRES,
  ORDER_BY_NAME,
  ORDER_BY_GENRES,
  ORDER_BY_RATING,
  ORDER_BY_SOURCE,
  SEARCH_GAMES_BY_NAME
} from './Actions';

const inicialSate = {
  filteredGames: [],
  videogames: [],
  videogame: [],
  genres: [],
  platforms: [],

}

function rootReducer(state = inicialSate, action) {

  switch (action.type) {
    case GET_ALL_GAMES:
      const uniqueGames = action.payload.filter(
        (game, index, self) => index === self.findIndex(g => g.id === game.id)
      );
      let platforms = [];
      action.payload.map(e => platforms = [...platforms, ...e.platforms]);
      return {
        ...state,
        videogames: action.payload,
        filteredGames: uniqueGames,
        platforms: Array.from(new Set(platforms)),
      };
    case GET_GAME_ID:
      return {
        ...state,//copia estado importante no olvidar
        videogame: action.payload
      };
    case SEARCH_GAMES_BY_NAME:

      return {
        ...state,
        filteredGames: action.payload

      };
    case GET_GAME_NAME:
      const filtered = state.filteredGames.filter(game => 
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredGames: filtered,
      };
      
    case CREATE_GAME:
      return {
      };
      
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
      
    case ORDER_BY_NAME:
      let sortedGames = [...state.filteredGames];
      if (action.payload === 'A-Z') {
        sortedGames.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === 'Z-A') {
        sortedGames.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filteredGames: sortedGames,
      };
      

    case ORDER_BY_GENRES:
      return {

      }
      
    case ORDER_BY_RATING:
      const orderingRating = action.payload === 'High to Low' ?
        state.videogames.sort((a, b) => Number(b.rating) - Number(a.rating))
        :
        state.videogames.sort((a, b) => Number(a.rating) - Number(b.rating))
      return {
        ...state,
        videogames: orderingRating
      }
    case ORDER_BY_SOURCE:
      const getVideoGames = state.allVideoGames
      const filterVG = action.payload === 'DB' ? getVideoGames.filter(g => g.createdInDB)
        : getVideoGames.filter(e => !e.createdInDB)
      return {
        ...state,
        videogames: action.payload === 'All games' ? getVideoGames : filterVG
      }
    default: return state
  }
}

export default rootReducer