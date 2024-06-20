import axios from 'axios';

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_GAME_ID = 'GET_GAME_ID'
export const GET_GAME_NAME = 'GET_GAME_NAME'
export const CREATE_GAME = 'CREATE_GAME'
export const GET_GENRES = 'GET_GENRES'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE'
export const SEARCH_GAMES_BY_NAME = 'SEARCH_GAMES_BY_NAME'
export const GET_PLATFORMS = 'GET_PLATFORMS'

const RUTA_VIDEOGAMES = '/videogames'
const RUTA_GENRES = '/genres'
const RUTA_PLATFORMS = '/platforms'

export function getAllGames() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${RUTA_VIDEOGAMES}`)
      const allVideoGames = response.data
      dispatch({
        type: GET_ALL_GAMES,
        payload: allVideoGames

      })
    } catch (e) {
      alert('I cant get all the games', e.message)
      dispatch({
        type: GET_ALL_GAMES,
        payload: [],
      });
    }
  }
};

export function getGameID(id) {
  console.log(id)
  return async function (dispatch) {
    try {
      const response = await axios.get(`${RUTA_VIDEOGAMES}/${id}`)
      const videoGameID = response.data
      dispatch({
        type: GET_GAME_ID,
        payload: videoGameID
      })
    } catch (e) {
      alert('I cant get that game', e.message)
    }
  }
};

export function getGameName(name) {
  console.log(name)
  return async function (dispatch) {
    try {
      const response = await axios.get(`${RUTA_VIDEOGAMES}?name=${name}`);
      dispatch({
        type: GET_GAME_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching games by name:', error);
    }
  }
}

export function getAllGenres() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${RUTA_GENRES}`);
      dispatch({
        type: GET_GENRES,
        payload: response.data,
      });
    } catch (error) {
    }
  }
}
export function getAllPlatforms() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${RUTA_PLATFORMS}`);
      dispatch({
        type: GET_PLATFORMS,
        payload: response.data
      })
    } catch (error) {

    }
  }
}
export function createGame(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${RUTA_VIDEOGAMES}`, payload); // Corrige la ruta aquí
      const videoGame = response.data;
      console.log(videoGame)
      dispatch({
        type: CREATE_GAME,
        payload: videoGame
      });
    } catch (e) {
      alert('I can\'t create that game', e.message);
    }
  }
}


export function orderByName(order) {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

export function filterBySource(source) {
  console.log(source)
  return {
    type: FILTER_BY_SOURCE,
    payload: source
  };
}