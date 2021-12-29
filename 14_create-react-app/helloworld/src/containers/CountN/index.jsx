import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/actions/count'

import { Component } from 'react'

//引入connect用于连接UI组件与redux

import {connect} from 'react-redux'



class CountUI extends Component {
    state = { count: 0 }


    increament = () => {
        const { value } = this.selectMumber
        this.props.add(value*1)

    }
    decreament = () => {
        const { value } = this.selectMumber
        this.props.minus(value*1)
    }
    increamentIfodd = () => {
        const { value } = this.selectMumber
        const {count} =this.props
        if(count % 2!==0){
            this.props.add(value*1)
        }

    }
    increamentAsync = () => {
        const { value } = this.selectMumber
        this.props.addAsyn(value*1,500)
    }
    render() {
        const {count} = this.props
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <select ref={c => this.selectMumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increament}>+</button>&nbsp;
                <button onClick={this.decreament}>-</button>&nbsp;
                <button onClick={this.increamentIfodd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.increamentAsync}>异步加</button>
            </div>
        )
    }
}


// // -----------------------------------------------复杂写法-----------------------------------------------------------------------------------------

// /* 1.mapStateToProps函数返回的是一个对象
//    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//    3.mapStateToProps 用于传递状态
// */
// function mapStateToProps(state){
//     return {count:state}
// }

// /* 1.mapDispatchToProps函数返回的是一个对象
//    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//    3.mapStateToProps 用于传递操作状态的方法。
// */
// function mapDispatchToProps(dispatch){
//     return {
//         add:(value)=>{
//             //通知redux执行加法
//             dispatch(createIncrementAction(value))
//         },
//         minus:(value)=>{
//             //通知redux执行加法
//             dispatch(createDecrementAction(value))
//         },
//         addAsyn:(value,time)=>{
//             dispatch(createIncrementAsyncAction(value,time))
//         }
//     }
// }


// //创建并暴露count容器组件  conenct有两个参数 :mapStateToProps mapDispatchToProps
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI);


// -----------------------------------------------简单写法-----------------------------------------------------------------------------------------
//react-redux会帮助自动分发，调用dispatch
export default connect(
    state=>({count:state}),
    {
       add:createIncrementAction,
       minus:createDecrementAction,
       addAsyn:createIncrementAsyncAction 
    }
)(CountUI)




