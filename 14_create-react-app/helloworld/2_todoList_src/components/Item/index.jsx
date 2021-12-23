import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes ={
        updateTodo:PropTypes.func.isRequired
    }
    state={mouse:false}//鼠标移入对应状态
    //鼠标移入事件
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    //鼠标勾选、取消勾选
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    //删除一个事件
    handleClick=(id)=>{
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }else return 
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleClick(id)}} className="btn btn-danger" style={{ display: mouse?"block":"none" }}>删除</button>
            </li>

        )
    }
}
