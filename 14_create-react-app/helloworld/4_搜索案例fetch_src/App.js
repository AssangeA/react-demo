import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import List from './components/List'
import Search from './components/Search'

class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
         <Search  />
         <List />
        </div>
      </div>
    )
  }
}


export default App