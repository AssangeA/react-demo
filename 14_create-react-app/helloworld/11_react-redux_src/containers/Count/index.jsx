import  CountUI from '../../components/Count'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../../src/redux/actions/count'

//引入connect用于连接UI组件与redux

import {connect} from 'react-redux'

/* 1.mapStateToProps函数返回的是一个对象
   2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
   3.mapStateToProps 用于传递状态
*/
function mapStateToProps(state){
    return {count:state}
}

/* 1.mapDispatchToProps函数返回的是一个对象
   2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
   3.mapStateToProps 用于传递操作状态的方法。
*/
function mapDispatchToProps(dispatch){
    return {
        add:(value)=>{
            //通知redux执行加法
            dispatch(createIncrementAction(value))
        },
        minus:(value)=>{
            //通知redux执行加法
            dispatch(createDecrementAction(value))
        },
        addAsyn:(value,time)=>{
            dispatch(createIncrementAsyncAction(value,time))
        }
    }
}


//创建并暴露count容器组件  conenct有两个参数 :mapStateToProps mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);