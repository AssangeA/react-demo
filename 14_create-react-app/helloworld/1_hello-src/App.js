import React,{Component} from 'react' //文件里面包含多种暴露，包括default暴露和export暴露
import Hello  from './components/Hello/Hello'

class App extends Component{

  render(){
    return (
      <div>
        <Hello />
      </div>
    )
  }
}


export default App