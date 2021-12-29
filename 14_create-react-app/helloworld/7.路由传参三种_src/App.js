import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavlink'
import News from './pages/Home/News'
import Message from './pages/Home/Message'
import MessageInfo from './pages/Home/Message/MessageInfo'
import Header from './components/Header'


class App extends Component {
  state={
    messageArr:[
        {id:"01",title:"消息1"},
        {id:"02",title:"消息2"},
        {id:"03",title:"消息3"},
        {id:"04",title:"消息4"},
    ]
}

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生html,靠<a></a>跳转不同页面 */}
            {/* <a className="list-group-item active" href="./about.html">About</a>
            <a className="list-group-item" href="./home.html">Home</a> */}

            {/* 在react中靠路由链接实现切换组件 */}
              {/* <Link className='list-group-item' to="/about">About</Link>
              <Link className='list-group-item' to="/home">Home</Link> */}
                  {/* <NavLink activeclassname="active1" className='list-group-item' to="/about">About</NavLink>
              <NavLink activeclassname="active1" className='list-group-item' to="/home">Home</NavLink> */}
              <MyNavLink to="/about" >About</MyNavLink>
              <MyNavLink to="/home" >Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
               <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about" />
               </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default App