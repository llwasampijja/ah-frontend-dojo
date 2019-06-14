// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import loginReducer from 'store/reducers/loginReducer';
import confirmEmailReducer from 'store/reducers/confirmEmailReducer';
import passwordResetReducer from 'store/reducers/passwordResetReducer';

import articles from './reducers/articles';


const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  articles,
  confirmEmailReducer,
  passwordResetReducer
});

export default rootReducers;
