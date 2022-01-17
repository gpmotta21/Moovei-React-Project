const initState = {
    items: [],
    loading: false,
    error: null
}

export const moviesReducer = (state = initState, action) => {
    switch(action.type){
        case 'MOVIES_REQUEST': 
            return{...state, loading: true, error: null}
        case 'MOVIES_REQUEST_SUCESS':
            return {...state, loading: false, items: action.payload}
        case 'MOVIES_REQUEST_ERROR':
            return {error: true, loading: false, items: []}
        default:
            return state
    }
}

const iState = {
    items: '',
    loading: false,
    error: null
}

export const plotReducer = (state = iState, action) => {
    switch(action.type){
        case 'PLOT_REQUEST': 
        return{...state, loading: true, error: null}
    case 'PLOT_REQUEST_SUCESS':
        return {...state, loading: false, items: action.payload}
    case 'PLOT_REQUEST_ERROR':
        return {error: true, loading: false, items: []}
    default:
        return state
}
    }

const favorite = {
    items: []
}

export const favoriteReducer = (state = favorite, action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
            return  {items: [...state.items, action.payload]}
        case 'REMOVE_FAVORITE':
            return {items: state.items.filter((fav, index) => index !== action.payload)}
        default: 
            return state
    }
}

