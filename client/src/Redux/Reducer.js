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
  SEARCH_GAMES_BY_NAME,
  GET_PLATFORMS,
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
      return {
        ...state,
        filteredGames: action.payload

      };
      
      case CREATE_GAME:
        return {
          ...state,
          videogame: [...state.videogame, action.payload],
        };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      }
    case ORDER_BY_NAME:
      let sortedGames = [...state.filteredGames];
      if (action.payload === 'A-Z') {
        sortedGames.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === 'Z-A') {
        sortedGames.sort((a, b) => b.name.localeCompare(a.name));
      } else if (action.payload === 'Highest-Rating') {
        sortedGames.sort((a, b) => b.rating - a.rating);
      } else if (action.payload === 'Lowest-Rating') {
        sortedGames.sort((a, b) => a.rating - b.rating);
      }
      return {
        ...state,
        filteredGames: sortedGames,
      };
      

    case ORDER_BY_GENRES:
      return {

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