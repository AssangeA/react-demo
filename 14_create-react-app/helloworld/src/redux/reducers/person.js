import {
    ADD_PERSON
} from "../constant";
import {nanoid} from "nanoid"

//初始化人的表
const initState = [{id:nanoid(),name:"jobs",age:51}]
export default function personReducer(preState = initState, action) {
    const {
        type,
        data
    } = action
    switch (type) {
        //添加一个人
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}