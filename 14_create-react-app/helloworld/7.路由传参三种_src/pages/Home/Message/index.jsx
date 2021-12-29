import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Message extends Component {
    state={
        messageArr:[
            {id:"01",title:"消息1"},
            {id:"02",title:"消息2"},
            {id:"03",title:"消息3"},
            {id:"04",title:"消息4"},
        ]
    }

    repalceShow=()=>{
        
    }

    render() {
        return (
            <ul>
               {
                   this.state.messageArr.map((msgObj)=>{
                       return (
                        <li key={msgObj.id}>
                            {/* params参数 */}
                        {/* <Link to={`/home/message/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                            {/* search参数 */}
                        {/* <Link to={`/home/message/?id=${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                            {/* state 传递 */}
                            <Link  to={{pathname:`/home/message/`}}>{msgObj.title}</Link>&nbsp;&nbsp;<button onClick={()=>{this.repalceShow()}}>push</button>
                        </li>
                       )
                   })
               }
               <hr />
            </ul>
        )
    }
}
