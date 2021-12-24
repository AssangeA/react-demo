import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    //users 初始是数组
    state = {
        users: [],
        isFirst: true,//是否为第一次打开也没见
        isLoading: false,//是否加载中
        err: "",//存储请求错误信息
    }

    componentDidMount() {
       this.token  =  Pubsub.subscribe('hhhh',(_,stataObj)=>{
          this.setState(stataObj)
        })
    }

    componentWillUnmount(){
        Pubsub.unsubscribe(this.token)
    }
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>welcome！please insert user name and presss search button!</h2> :
                        isLoading ? <h2>Loading.............</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return (

                                        <div className="card" key={userObj.id}>
                                            <a rel='noreferrer' href={userObj.html_url} target="_blank">
                                                <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
