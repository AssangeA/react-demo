import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    //全选
    handleCheckAll=(event)=>{
        this.props.checkAllList(event.target.checked)
    }
    //清除所有已完成的list
    handleClearAllDone=()=>{
        this.props.clearAllDone()
    }
    render() {
        const { list } = this.props
        // 已完成
        const doneCount = list.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        //总数
        const total = list.length
        return (
            <div className="todo-footer" >
                <label>
                    <input type="checkbox"  checked={doneCount===total && total!==0?true:false } onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
