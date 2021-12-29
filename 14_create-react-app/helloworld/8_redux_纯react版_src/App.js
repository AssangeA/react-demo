import React, { Component } from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import Count from "./components/Count"

class App extends Component {
  

  render() {
    return (
      <div>
      <Count />
      </div>
    )
  }
}


export default App