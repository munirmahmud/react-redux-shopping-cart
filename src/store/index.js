import { combineReducers, createStore } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducers = combineReducers({
    productReducer
});

const store = createStore(rootReducers);

export default store;