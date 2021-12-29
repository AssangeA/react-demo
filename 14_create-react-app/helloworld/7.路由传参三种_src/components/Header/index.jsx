import React, { Component } from 'react'

export default class Header extends Component {
    forward=()=>{

    }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button  onClick={this.forward}>前进</button>
            </div>
        )
    }
}
