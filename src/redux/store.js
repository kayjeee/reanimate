import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import animeReducer from './anime/AnimeSlice';

const rootReducer = combineReducers({
  anime: animeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
