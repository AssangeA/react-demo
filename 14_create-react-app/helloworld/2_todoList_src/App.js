import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

class App extends Component {
  state={
    list:[
      {id:"001",name:"吃饭",done:true},
      {id:"002",name:"睡觉",done:true},
      {id:"003",name:"打游戏",done:false},
    ]
  }

  //  addList 用于添加一个List
  addList=(todoObj)=>{
    console.log(todoObj);
    const {list} = this.state
    const newTodos = [todoObj,...list]
    this.setState({list:newTodos})
  }

  //更改勾选
  updateTodo=(id,done)=>{
    const {list} =this.state
    const newTodos = list.map((todo)=>{
      if(todo.id===id){
        return {...todo,done}
      }else return todo
    })
    this.setState({list:newTodos})
  }

  //删除todo
  deleteTodo=(id)=>{
    const {list} = this.state
    const newList = list.filter((list)=>{
      return list.id !== id
    })

    this.setState({list:newList})
  }

  //checkAllList 用于全选
  checkAllList=(done)=>{
    const {list}  = this.state
    const newList = list.map((list)=>{return {...list,done}})
    this.setState({list:newList})
  }

  // 清除所有已完成的
  clearAllDone=()=>{
    const {list} =this.state
    const newList = list.filter((item)=>{
      return !item.done 
    })
    this.setState({list:newList})
  }

  render() {
    const {list} = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
           <Header addList={this.addList} />
            <List list = {list} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer list={list} checkAllList={this.checkAllList}  clearAllDone={this.clearAllDone}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App