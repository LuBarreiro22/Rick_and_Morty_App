import { createStore } from 'redux';
// import { applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;