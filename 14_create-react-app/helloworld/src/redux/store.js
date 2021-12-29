/**
 * 该文件专用于暴露一个store
 */

import {createStore,applyMiddleware,combineReducers} from "redux"
import countReducer from './reducers/count'
import personReducer from "./reducers/person"
import thunk from 'redux-thunk'


//汇总所有reducer,成为一个总的reducer
const allReducers=  combineReducers({
    count:countReducer,
    personArr:personReducer,
})
export default createStore(allReducers,applyMiddleware(thunk))

 