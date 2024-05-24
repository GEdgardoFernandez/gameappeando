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
      let platforms = [];
      action.payload.map(e => platforms = [...platforms, ...e.platforms]);
      return {
        ...state,
        videogames: action.payload,
        filteredGames: action.payload,
        platforms: Array.from(new Set(platforms)),
      }
      break;

    case GET_GAME_ID:
      return {
        ...state,//copia estado importante no olvidar
        videogame: action.payload
      }
      break;
    case SEARCH_GAMES_BY_NAME:

      return {
        ...state,
        filteredGames: action.payload

      };
      break;
    case GET_GAME_NAME:
      return {
        ...state,
        filteredGames: Array.isArray(action.payload) ? action.payload : []
      };
      break;
    case CREATE_GAME:
      return {
      }
      break;
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      }
      break;
    case ORDER_BY_NAME:
      const orderingName = action.payload === 'A-Z' ?
        state.videogames.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

          if (b.name.toLowerCase() > a.name.toLowerCase()) return -1
          return 0
        })
        :
        state.videogames.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
          if (b.name.toLowerCase() > a.name.toLowerCase()) return 1
          return 0
        })
      return {
        ...state,
        videogames: orderingName,
      }
      break;

    case ORDER_BY_GENRES:
      return {

      }
      break;
    case ORDER_BY_RATING:
      const orderingRating = action.payload === 'High to Low' ?
        state.videogames.sort((a, b) => Number(b.rating) - Number(a.rating))
        :
        state.videogames.sort((a, b) => Number(a.rating) - Number(b.rating))
      return {
        ...state,
        videogames: orderingRating
      }

      break;
    case ORDER_BY_SOURCE:
      const getVideoGames = state.allVideoGames
      const filterVG = action.payload === 'DB' ? getVideoGames.filter(g => g.createdInDB)
        : getVideoGames.filter(e => !e.createdInDB)
      return {
        ...state,
        videogames: action.payload === 'All games' ? getVideoGames : filterVG
      }
      break;
    default: return state
  }
}

export default rootReducer