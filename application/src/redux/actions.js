import Axios from 'axios';

export const fetchMovies = (text) => async (dispatch, getState) => {
    dispatch({type: 'MOVIES_REQUEST'})

    try{
        const response = await Axios.get(`http://www.omdbapi.com/?s=${text}&type=movie&apikey=${process.env.REACT_APP_OMDB_KEY}`);
        dispatch({type: 'MOVIES_REQUEST_SUCESS', payload: response.data.Search});
    }catch(err){
        dispatch({type: 'MOVIES_REQUEST_ERROR', err: err});
    }
}

export const fetchPlot = (text) => async (dispatch, getState) => {
    dispatch({type: 'PLOT_REQUEST'})

    try{
        const response = await Axios.get(`http://www.omdbapi.com/?i=${text}&apikey=${process.env.REACT_APP_OMDB_KEY}&Plot=full`);
        dispatch({type: 'PLOT_REQUEST_SUCESS', payload: response.data});
    }catch(err){
        dispatch({type: 'PLOT_REQUEST_ERROR', err: err});
    }
}

export const addFavorite = (movie) => ({
    type: 'ADD_FAVORITE',
    payload: movie
})

export const removeFavortite = (id) => ({
    type: 'REMOVE_FAVORITE',
    payload: id
})