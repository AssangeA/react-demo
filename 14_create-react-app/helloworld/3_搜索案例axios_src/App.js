import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import List from './components/List'
import Search from './components/Search'

class App extends Component {
//users 初始是数组
  state ={
    users:[],
    isFirst:true,//是否为第一次打开也没见
    isLoading:false,//是否加载中
    err:"",//存储请求错误信息
  }
  //更新app的state
  updateAppState=(stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    return (
      <div>
        <div className="container">
         <Search updateAppState={this.updateAppState} />
         <List {...this.state} />
        </div>
      </div>
    )
  }
}


export default App