import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from "./redux/store"
//当许多组件都需要store时，需要Provider来传递store
import {Provider} from 'react-redux'


// 渲染APP
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))

//方便redux在更新的时候重新渲染
//在使用react-redux之后，就可以不用了，connect会自动帮助渲染
// store.subscribe(()=>{
//     ReactDOM.render(<App />,document.getElementById('root'))
// })
    