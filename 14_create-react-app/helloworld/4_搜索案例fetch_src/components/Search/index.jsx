import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'

export default class Search extends Component {
    //搜索按钮事件
    search=async ()=>{
       
       
        //发送请求前更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        Pubsub.publish('hhhh',{isFirst:false,isLoading:true})
         /*------------------------使用axios-------------------------------------------*/
        //获取用户输入
        // axios.get(`/api1/search/users?q=${this.keywordElement.value}`).then(
        //     res=>{
        //         // this.props.updateAppState({users:res.data.items,isLoading:false})
        //         Pubsub.publish('hhhh',{users:res.data.items,isLoading:false})
        //     },
        //     err=>{
        //         console.log(err);
        //         // this.props.updateAppState({err:err.message,isLoading:false})
        //         Pubsub.publish('hhhh',{err:err.message,isLoading:false})
        //     }
        // )

        /*----------------------------使用fetch------------------------------------------------*/
        //未优化
        // fetch(`/api1/search/user1?q=${this.keywordElement.value}`).then(
        //     res=>{
        //         console.log('联系服务器成功！',res);
        //         return res.json()
        //     },
        //     err=>{
        //         console.log('联系服务器失败');
        //         return new Promise(()=>{})
        //     }
        // ).then(
        //     res=>{
        //         console.log('u获取数据成功',res);
        //     },
        //     err=>{
        //         console.log('获取数据失败',err);
        //     }
        // )

        //优化
       try {
        const res = await  fetch(`/api1/search/users?q=${this.keywordElement.value}`)
        const data=await res.json()
        console.log(data);
       } catch (error) {
           console.log(error);
       }
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
