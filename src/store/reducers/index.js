import {createStore,combineReducers} from 'redux'
import productReducer from './ProductReducer'
const root = combineReducers({
    productReducer,
})
const store = createStore(root,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store