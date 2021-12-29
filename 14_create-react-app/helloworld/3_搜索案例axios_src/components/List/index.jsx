import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props
        console.log(this.props);
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
