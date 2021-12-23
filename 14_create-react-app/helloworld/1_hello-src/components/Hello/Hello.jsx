import React,{Component} from 'react'
// import './Hello.css'
import hello from './Hello.module.css'

export default class Hello extends Component{
    render(){
        return (
            <div className={hello.title}>
                <h1>Hello,world!</h1>
            </div>
        )
    }
}
