import React, { PureComponent } from "react";
import {Router, Routes, Route } from "react-router-dom"
import { Button, message } from "antd"
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
                <Routes>
                    <Route path="/" element={<Admin />} ></Route>
                    <Route path="/login" element={<Login />} ></Route>
                </Routes>
            </div>
        )
    }
}

