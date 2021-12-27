
/*
    创建W为count服务的reducer
    preState:之前的参数  action：操作
*/
const initData= 0
export default function countReducer (preState=initData,action){
    const {type,data} = action;
    switch(type){
        case "increment":
            return preState + data;break;
        case "decrement":
            return preState - data;break;
        default : return preState;
    }
}