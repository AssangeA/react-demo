import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

class Header extends Component {
    // 对接收的propsh进行类型、必要性进行限制
    static propTypes = {
        addList:PropTypes.func.isRequired
    }
    handleKeyup = (event) => {
        const { target, keyCode } = event
        if (keyCode !== 13) return
        //添加名字不能为空
        if (target.value.trim() === "") {
            alert("输入不能为空！")
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addList(todoObj)
        target.value=""

    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyup} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}

export default Header;