import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }

    increament = () => {
        const { value } = this.selectMumber
        const { count } = this.state
        this.setState({ count: value *1 + count })

    }
    decreament = () => {
        const { value } = this.selectMumber
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }
    increamentIfodd = () => {
        const { value } = this.selectMumber
        const { count } = this.state
        if (count % 2 === 1) {
            this.setState({ count: value * 1 + count })
        }

    }
    increamentAsync = () => {
        const { value } = this.selectMumber
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: value * 1 + count })
        }, 5000);
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
