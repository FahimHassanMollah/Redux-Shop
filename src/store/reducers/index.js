import {createStore,combineReducers} from 'redux'
import productReducer from './ProductReducer'
const root = combineReducers({
    productReducer,
})
const store = createStore(root);
export default store