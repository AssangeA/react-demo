import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    //搜索按钮事件
    search=()=>{
        //发送请求前更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //获取用户输入
        axios.get(`/api1/search/users?q=${this.keywordElement.value}`).then(
            res=>{
                this.props.updateAppState({users:res.data.items,isLoading:false})
            },
            err=>{
                console.log(err);
                this.props.updateAppState({err:err.message,isLoading:false})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keywordElement=c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
