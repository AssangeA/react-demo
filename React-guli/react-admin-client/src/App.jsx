import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom"
import {  message } from "antd"
import "./App.less"
import Admin from "./pages/Admin/admin";
import Login from "./pages/Login/login";

export default class App extends PureComponent {
    handleClick = () => {
        message.success('This is a success message');
    }
    render() {
        
        return (
            <div className="app">
                <Switch>
                    <Route path="/login" component={Login } ></Route>
                    <Route  path="/" component={Admin } ></Route>
                </Switch>
            </div>
        )
    }
}

