/**
 * 该文件专用于暴露一个store
 */

import {createStore} from "redux"
import countReducer from './count_reducer'

export default createStore(countReducer)

