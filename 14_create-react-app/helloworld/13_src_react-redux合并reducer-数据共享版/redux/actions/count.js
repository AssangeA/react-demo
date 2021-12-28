import store from "../store"
import {INCREMENT,DECREMENT} from "../constant"

export const  createIncrementAction = (data)=>{
    return {type:INCREMENT,data}
}
export const createDecrementAction = (data)=>{
    return {type:DECREMENT,data}
}
export const createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
                dispatch(createIncrementAction(data))
        }, time);
    }
}