import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchRocketThunk from './rockets/rocketsThunk';
import rocketReducer from './rockets/rockets';
import { missionReducer } from './missions/missions';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchRocketThunk());

export default store;
