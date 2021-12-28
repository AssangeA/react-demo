
/*
    创建W为count服务的reducer
    preState:之前的参数  action：操作
*/

import {INCREMENT,DECREMENT} from "./constant"
const initData= 0
export default function countReducer (preState=initData,action){
    const {type,data} = action;
    switch(type){
        case INCREMENT:
            return preState + data;break;
        case DECREMENT:
            return preState - data;break;
        default : return preState;
    }
}