import {
  GET_ALL_GAMES,
  GET_GAME_ID,
  GET_GAME_NAME,
  CREATE_GAME,
  GET_GENRES,
  ORDER_BY_NAME,
  FILTER_BY_SOURCE,
  SEARCH_GAMES_BY_NAME,
  GET_PLATFORMS,
} from './Actions';

const initialState = {
  allGames: [],
  filteredGames: [],
  videogames: [],
  videogame: [],
  genres: [],
  platforms: [],
  sourceFilter: 'both',
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case GET_ALL_GAMES:
      const uniqueGames = action.payload.filter(
        (game, index, self) => index === self.findIndex(g => g.id === game.id)
      );
      let platforms = [];
      action.payload.map(e => platforms = [...platforms, ...e.platforms]);
      return {
        ...state,
        allGames: uniqueGames,
        filteredGames: uniqueGames,
        platforms: Array.from(new Set(platforms)),
      };

    case GET_GAME_ID:
      return {
        ...state,
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

    case FILTER_BY_SOURCE:
      let sourceFilteredGames = [];
      if (action.payload === 'api') {
        sourceFilteredGames = state.allGames.filter(game => typeof game.id === 'number');
      } else if (action.payload === 'db') {
        sourceFilteredGames = state.allGames.filter(game => typeof game.id == "ab182556-c4b5-4adc-aa41-913da1ed23a9");
      } else {
        sourceFilteredGames = state.allGames;
      }
      return {
        ...state,
        filteredGames: sourceFilteredGames,
      };
    default: return state
  }
}

export default rootReducer