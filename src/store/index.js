import { combineReducers, createStore } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducers = combineReducers({
    Products: productReducer
});

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;