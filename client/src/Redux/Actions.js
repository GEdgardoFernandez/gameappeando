import axios from 'axios';

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_GAME_ID = 'GET_GAME_ID'
export const GET_GAME_NAME = 'GET_GAME_NAME'
export const CREATE_GAME = 'CREATE_GAME'
export const GET_GENRES = 'GET_GENRES'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_GENRES = 'ORDER_BY_NAME'
export const ORDER_BY_RATING = 'ORDER_BY_NAME'
export const ORDER_BY_SOURCE = 'ORDER_BY_NAME'
export const SEARCH_GAMES_BY_NAME = 'SEARCH_GAMES_BY_NAME'

const RUTA_VIDEOGAMES = 'http://localhost:3001/videogames'
const RUTA_GENRES = 'http://localhost:3001/genres'

export function getAllGames(){
  return async function(dispatch) {
    try {
      const response = await axios.get(`${RUTA_VIDEOGAMES}`)
      const allVideoGames = response.data
      dispatch({
        type: GET_ALL_GAMES,
        payload: allVideoGames
        
      })
    } catch (e) {
      alert ('I cant get all the games',e.message)
    }
  }
};

export function getGameID(id){
  console.log( id)
  return async function(dispatch) {
    try {
      const response = await axios.get(`${RUTA_VIDEOGAMES}?name=${id}`)
      const videoGameID = response.data
      
      dispatch({
        type: GET_GAME_ID,
        payload: videoGameID
      })
    } catch (e) {
      alert ('I cant get that game',e.message)
    }
  }
};

export function getGameName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${RUTA_VIDEOGAMES}/?${name}`);
      const videoGameName = response.data.slice(0, 15);
      dispatch({
        type: GET_GAME_NAME,
        payload: videoGameName,
      });
    } catch (e) {
      console.error('I can\'t get that game', e.message);
    }
  };
}
export function createGame(payload){
  return async function(dispatch) {
    try {
      const response =  axios.post(`${RUTA_VIDEOGAMES}}`, payload)
      const videoGame = response.data
      dispatch({
        type: CREATE_GAME,
        payload: videoGame
      })
    } catch (e) {
      alert ('I cant create that game',e.message)
    }
  }
};


export function orderByName(payload) {
   return function(dispatch) {
    return dispatch({type: ORDER_BY_NAME, payload})
   }
};

export function orderByGenres(payload) {
  return function(dispatch) {
   return dispatch({type: ORDER_BY_GENRES, payload})
  }
};

export function orderByRating(payload) {
  return function(dispatch) {
   return dispatch({type: ORDER_BY_RATING, payload})
  }
};

export function orderBySource(payload) {
  return function(dispatch) {
   return dispatch({type: ORDER_BY_SOURCE, payload})
  }
};