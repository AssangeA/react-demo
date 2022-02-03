import React, { Component } from 'react'
import "./linkbutton.less"

export default class LinkButton extends Component {
    render() {
        return (
           <button {...this.props}>{this.props.children}</button>
        )
    }
}
