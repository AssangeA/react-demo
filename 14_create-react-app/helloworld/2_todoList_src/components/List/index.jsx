import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
import "./index.css"

class List extends Component {
    static propTypes ={
        list:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        const {list,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    list.map((item)=>{
                        return <Item updateTodo={updateTodo} deleteTodo={deleteTodo} key={item.id} {...item} />
                    })
                }
             </ul>
        );
    }
}

export default List;