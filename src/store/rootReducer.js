// third party libraries
import { combineReducers } from 'redux';
import registerReducer from 'store/reducers/registerReducer';
import loginReducer from 'store/reducers/loginReducer';
import confirmEmailReducer from 'store/reducers/confirmEmailReducer';
import passwordResetReducer from 'store/reducers/passwordResetReducer';
import bookmarkReducer from 'store/reducers/bookmarkReducer';
import commentReducer from 'store/reducers/commentReducer';

import articles from './reducers/articles';
import facebookReducer from './reducers/socialReducer/Facebook';
import googleReducer from './reducers/socialReducer/Google';
import profile from './reducers/profileReducer';


const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
  articles,
  confirmEmailReducer,
  passwordResetReducer,
  facebookReducer,
  googleReducer,
  profile,
  bookmarkReducer,
  commentReducer,
});

export default rootReducers;
