import { ADD_FAVORITE,DELETE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer (state = initialState,action) {
    switch(action.type){
        case ADD_FAVORITE:
            // const filteredAdd = state.myFavorites.filter(c => c.id !== action.payload)
            return {...state,
            myFavorites:[...state.allCharacters,action.payload],
            allCharacters: [...state.allCharacters,action.payload]
             }
        case DELETE_FAVORITE:
            const filteredDel = state.myFavorites.filter(c => c.id !== action.payload);
            return {...state,
            myFavorites: filteredDel 
        }
        case FILTER:
            const  filteredAllCharacters = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: filteredAllCharacters
            }
        case ORDER:
             const orderCharacters = (action.payload === 'Ascendente') ? state.allCharacters.sort((a,b) => a.id - b.id) : state.allCharacters.sort((a,b) => b.id - a.id);
            return {
                ...state,
                myFavorites: orderCharacters
            }
        default:
            return {...state}
    }
} 