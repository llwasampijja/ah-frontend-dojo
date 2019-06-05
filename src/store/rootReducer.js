// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import articles from './reducers/articles';

const rootReducers = combineReducers({
  registerReducer,
  articles,
});

export default rootReducers;
