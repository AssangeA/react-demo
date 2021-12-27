import React, { Component } from 'react'
import store from "../../redux/store" //引入store
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
    state = { count: 0 }

    // componentDidMount() {
    //     //检查redux中状态的变化只要变化就render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increament = () => {
        console.log(store);
        const { value } = this.selectMumber
        store.dispatch(createIncrementAction(value*1))

    }
    decreament = () => {
        const { value } = this.selectMumber
        store.dispatch(createDecrementAction(value*1))
    }
    increamentIfodd = () => {
        const { value } = this.selectMumber
        const count = store.getState()
        if (count % 2 === 1) {
            store.dispatch(createIncrementAction(value*1))
        }

    }
    increamentAsync = () => {
        const { value } = this.selectMumber
            store.dispatch(createIncrementAsyncAction(value*1,5000))
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
