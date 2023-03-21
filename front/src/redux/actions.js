import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ERROR = "ERROR";
export const GET_FAVORITE = "GET_FAVORITE";

export const addFavorite = (personaje) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/favs/create",
        personaje
      );
      return dispatch({
        type: ADD_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/favs/delete/${id}`
      );
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
export const getFavorite = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/favs/get`);
      return dispatch({
        type: GET_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
