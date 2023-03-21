import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  ERROR,
  FILTER,
  GET_FAVORITE,
  ORDER,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        errors: {},
      };
    case DELETE_FAVORITE:
      return { ...state, myFavorites: payload, errors: {} };
    case GET_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        errors: {},
      };
    case FILTER:
      const filteredAllCharacters = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredAllCharacters,
      };
    case ORDER:
      const orderCharacters =
        payload === "Ascendente"
          ? state.allCharacters.sort((a, b) => a.id - b.id)
          : state.allCharacters.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: orderCharacters,
      };
    case ERROR: {
      return { ...state, errors: payload };
    }
    default:
      return { ...state };
  }
}
