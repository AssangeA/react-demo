import React, { Component } from 'react'
import store from "../../redux/store" //引入store

export default class Count extends Component {
    state = { count: 0 }


    increament = () => {
        console.log(store);
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
