import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  list: require('./AppReducer').reducer,
});

export default rootReducers;
