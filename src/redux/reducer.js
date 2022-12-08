import { ADD_FAVORITE,DELETE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: []
}

export default function reducer (state = initialState,action) {
    switch(action.type){
        case ADD_FAVORITE:
            // const filteredAdd = state.myFavorites.filter(c => c.id !== action.payload)
            return {...state,
            myFavorites:[...state.myFavorites,action.payload]
             }
        case DELETE_FAVORITE:
            const filteredDel = state.myFavorites.filter(c => c.id !== action.payload)
            return {...state,
            myFavorites: filteredDel 
        }
        default:
            return {...state}
    }
} 