// third party libraries
import { combineReducers } from 'redux';

// reducers
import authReducer from './reducers/authReducer';
import articles from './reducers/articles';

const rootReducers = combineReducers({
  authReducer,
  articles,
});

export default rootReducers;
