import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import Count from "./containers/Count"
import store from "./redux/store"
import Person from "./containers/Person"

class App extends Component {
  


  render() {
    return (
      <div>
      <Count store={store} />
      <Person />
      </div>
    )
  }
}


export default App