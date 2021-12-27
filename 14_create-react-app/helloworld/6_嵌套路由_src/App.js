import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavlink'
import News from './pages/Home/News'
import Message from './pages/Home/Message'


class App extends Component {
  

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
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
               <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About/>}  />
                  <Route path="/home" element={<Home/>} >
                        <Route path="/home/" element={<News />} />
                        <Route path="/home/news" element={<News />} />
                        <Route path="/home/message"  element={<Message />} />
                  </Route>
               </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default App