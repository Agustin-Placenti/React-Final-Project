import {createStore, combineReducers} from 'redux';
import searcherReducer from './reducers/searcherReducer';
import albumReducer from './reducers/albumReducer';

const reducer = combineReducers({
    searcherReducer,
    albumReducer
});

const store = createStore(reducer);

export default store;