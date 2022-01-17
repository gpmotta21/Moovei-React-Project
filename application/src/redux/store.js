import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import  { moviesReducer, plotReducer, favoriteReducer }  from './reducers'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'favorites',
    storage,
}

const reducer = combineReducers({
    movies: moviesReducer,
    plot: plotReducer,
    favorites: favoriteReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store , persistor }