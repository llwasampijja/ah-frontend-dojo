import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import articles from './reducers/articles';

const rootReducers = combineReducers({
  authReducer,
  articles,
});

export default rootReducers;
