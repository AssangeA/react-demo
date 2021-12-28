import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import Count from "./containers/Count"
import store from "./redux/store"

class App extends Component {
  


  render() {
    return (
      <div>
      <Count store={store} />
      </div>
    )
  }
}


export default App