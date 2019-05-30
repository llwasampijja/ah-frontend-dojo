import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';

const enhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducer, {}, enhancers);

export default store;
