import axios from "axios";

const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const addFavorite = (game) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/videogames", game);
            dispatch({
                type: ADD_FAVORITE,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const removeFavorite = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3001/videogames/${id}`);
            dispatch({
                type: REMOVE_FAVORITE,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

