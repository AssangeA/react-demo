/**
 * 该文件专用于暴露一个store
 */

import {createStore,applyMiddleware} from "redux"
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))

